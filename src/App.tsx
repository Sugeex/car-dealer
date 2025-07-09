import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import MainFilter from "./pages/MainPage/components/MainFilter/MainFilter";
import CarDetails from "./pages/CarDetails/CarDetails";
import { useEffect } from "react";
import axios from "axios";
import WebApp from "@twa-dev/sdk";
import { useAppDispatch } from "./hooks/reduxHooks";
import { fetchCars } from "./store/slice/carsSlice";
import { fetchFilters } from "./store/slice/filtersSlice";

function App() {
  const dispatch = useAppDispatch();

  const authUser = async (data: any) => {
    try {
      const response = await axios.post(
        "http://45.91.201.37:2094/api/auth",
        data
      );
      const token = response.headers["authorization"];

      if (token) {
        localStorage.setItem("token", token);
        await dispatch(fetchCars({page: 1, per_page: 10}));
        await dispatch(fetchFilters());
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  useEffect(() => {
    const checkTelegramReady = () => {
      const telegram = window.Telegram?.WebApp;

      if (telegram?.initData) {
        const authTgToken = telegram.initDataUnsafe?.user;
        console.log(authTgToken);

        if (authTgToken) {
          authUser(authTgToken);
        } else {
          console.warn("error");
        }
      } else {
        authUser({
          id: 629463269,
          first_name: "Rudeus",
          last_name: "",
          username: "notbigdaddyrudolf",
          language_code: "ru",
          photo_url:
            "https://t.me/i/userpic/320/dYBNQKGA39ywEGcXmHHw53N7g0iKi-uFVn1EOuvD05E.svg",
          allows_write_to_pm: true,
        });
      }
    };
    checkTelegramReady();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/filter" element={<MainFilter />} />
      <Route path="/details/:id" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
