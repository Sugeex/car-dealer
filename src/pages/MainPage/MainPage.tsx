import { Button } from "antd";
import s from "./MainPage.module.scss";
import { useState } from "react";
import CarsList from "./components/CarsList/CarsList";
import { useNavigate } from "react-router-dom";


const MainPage = () => {
  
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className={s.mainPageContainer}>
      <div className={s.headerBtn}>
      
        <Button type="text" className={s.filterBtn} onClick={() => navigate("/filter")}>Filter</Button>
      </div>
      <div className={s.filterContainer}>
        <div
          className={`${s.filterItem} ${activeCategory === "all" && s.active}`}
          onClick={() => setActiveCategory("all")}
        >
          All models
        </div>
        <div
          className={`${s.filterItem} ${
            activeCategory === "sedan" && s.active
          }`}
          onClick={() => setActiveCategory("sedan")}
        >
          1 Series
        </div>
        <div
          className={`${s.filterItem} ${
            activeCategory === "convertible" && s.active
          }`}
          onClick={() => setActiveCategory("convertible")}
        >
          2 Series
        </div>
        <div
          className={`${s.filterItem} ${
            activeCategory === "hatch" && s.active
          }`}
          onClick={() => setActiveCategory("hatch")}
        >
          3 Series
        </div>
      </div>
      <CarsList activeCategory={activeCategory} />
    </div>
  );
};

export default MainPage;
