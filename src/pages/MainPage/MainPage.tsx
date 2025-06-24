import { Button, Input } from "antd";
import s from "./MainPage.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import CarsList from "./components/CarsList/CarsList";
import { useNavigate } from "react-router-dom";


const MainPage = () => {
  
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className={s.mainPageContainer}>
      <div className={s.headerBtn}>
        <Input
          className={s.search}
          allowClear
          placeholder="Search"
          prefix={<SearchOutlined className={s.searchIcon} />}
        />
        <Button type="text" className={s.filterBtn} onClick={() => navigate("/filter")}>Filter</Button>
      </div>
      <div className={s.filterContainer}>
        <div
          className={`${s.filterItem} ${activeCategory === "all" && s.active}`}
          onClick={() => setActiveCategory("all")}
        >
          All Categories
        </div>
        <div
          className={`${s.filterItem} ${
            activeCategory === "sedan" && s.active
          }`}
          onClick={() => setActiveCategory("sedan")}
        >
          Sedan
        </div>
        <div
          className={`${s.filterItem} ${
            activeCategory === "convertible" && s.active
          }`}
          onClick={() => setActiveCategory("convertible")}
        >
          Convertible
        </div>
        <div
          className={`${s.filterItem} ${
            activeCategory === "hatch" && s.active
          }`}
          onClick={() => setActiveCategory("hatch")}
        >
          Hatchback
        </div>
      </div>
      <CarsList activeCategory={activeCategory} />
    </div>
  );
};

export default MainPage;
