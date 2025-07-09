import { Button } from "antd";
import s from "./MainPage.module.scss";
import { useState } from "react";
import CarsList from "./components/CarsList/CarsList";
import { useNavigate } from "react-router-dom";
import { toAbsoluteUrl } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchCars, setFilters } from "../../store/slice/carsSlice";

const MainPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const dispatch = useAppDispatch();

  const { data: filtersData } = useAppSelector((state) => state.filters);
  const { totalItems } = useAppSelector((state) => state.cars);

  // const extractAllCars = (carsData: { by_series: Record<string, any[]> }) =>
  // Object.values(carsData.by_series || {}).flat();

  const getModelIcon = (modal: string) => {
    switch (modal) {
      case "2 Series":
        return toAbsoluteUrl("/modelIcon/2series.webp");
      case "3 Series":
        return toAbsoluteUrl("/modelIcon/3series.webp");
      case "4 Series":
        return toAbsoluteUrl("/modelIcon/4series.webp");
      case "5 Series":
        return toAbsoluteUrl("/modelIcon/5series.webp");
      case "7 Series":
        return toAbsoluteUrl("/modelIcon/7series.webp");
      case "8 Series":
        return toAbsoluteUrl("/modelIcon/8series.webp");
      case "X1":
        return toAbsoluteUrl("/modelIcon/X1.webp");
      case "X3":
        return toAbsoluteUrl("/modelIcon/X3.webp");
      case "X4":
        return toAbsoluteUrl("/modelIcon/X4.webp");
      case "X5":
        return toAbsoluteUrl("/modelIcon/X5.webp");
      case "X6":
        return toAbsoluteUrl("/modelIcon/X6.webp");
      case "X7":
        return toAbsoluteUrl("/modelIcon/X7.webp");
      case "XM":
        return toAbsoluteUrl("/modelIcon/XM.webp");
      case "i4":
        return toAbsoluteUrl("/modelIcon/i4.webp");
      case "i5":
        return toAbsoluteUrl("/modelIcon/i5.webp");
      case "i7":
        return toAbsoluteUrl("/modelIcon/i7.webp");
      case "iX":
        return toAbsoluteUrl("/modelIcon/iX.webp");
    }
  };

  return (
    <div className={s.mainPageContainer}>
      <div className={s.headerContainer}>
        <div className={s.filterContainer}>
          <div
            className={`${s.filterItem} ${
              activeCategory === "all" && s.active
            }`}
            onClick={() => {
              if (activeCategory === "all") return;
              dispatch(setFilters({ series: undefined, page: 1 }));
              dispatch(fetchCars({page: 1, per_page: 10}));
              setActiveCategory("all");
            }}
          >
            All models
          </div>
          {filtersData.series.map((item) => (
            <div
              key={item}
              className={`${s.filterItem} ${
                activeCategory === item.toLowerCase().replace(/\s+/g, "-") &&
                s.active
              }`}
              onClick={() => {
                setActiveCategory(item.toLowerCase().replace(/\s+/g, "-"));
                if (activeCategory === item.toLowerCase().replace(/\s+/g, "-")) return;
                dispatch(setFilters({ series: item }));
                dispatch(fetchCars({ series: item, page: 1, per_page: 10 }));
              }}
            >
              <div className={s.modalIcon}>
                <img src={getModelIcon(item)} alt="model" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className={s.totalFilterContainer}>
          <span className={s.total}>
            in total <span className={s.amount}>({totalItems})</span>
          </span>
          <Button
            className={s.mainFilterBtn}
            type="text"
            onClick={() => navigate("/filter")}
          >
            <img
              src={toAbsoluteUrl("/icons/filterIcon.svg")}
              alt="filterIcon"
            />
          </Button>
        </div>
      </div>
      <CarsList />
    </div>
  );
};

export default MainPage;
