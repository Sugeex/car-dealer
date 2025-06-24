import {
  CheckOutlined,
  DownOutlined,
  LeftOutlined,
  StarFilled,
  UpOutlined,
} from "@ant-design/icons";
import s from "./MainFilter.module.scss";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Card/Card";
import { Button, Checkbox, Radio, Slider, Switch } from "antd";
import { useState } from "react";

const popularCarsMock = [
  "Chevrolet",
  "Alfa Romeo",
  "Cadillac",
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "Maserati",
  "Ford",
  "BMW",
  "Mercedes",
  "Audi",
  "Toyota",
  "Honda",
  "Tesla",
];

const colorsMock = ["black", "gray", "blue", "red", "brown", "yellow", "pink"];
const featuresMock = ["Airbag", "Navigation", "Parking Sensors", "Lane Assist"];

const MainFilter = () => {
  const [selectedOption, setSelectedOption] = useState("popular");
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const navigate = useNavigate();

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature) 
        : [...prev, feature] 
    );
  };

  return (
    <div className={s.mainFilterContainer}>
      <div className={s.headerFilter}>
        <LeftOutlined onClick={() => navigate(-1)} />
        <span className={s.resetBtn}>Reset</span>
      </div>
      <div className={s.filterCont}>
        <h1>Filter</h1>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Mileage</span>
          <Card className={s.rangeInput}>
            <Slider
              max={1000000}
              range
              defaultValue={[0, 1000000]}
              className={s.slider}
            />
          </Card>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Sort Options</span>
          <Card className={s.sortOptions}>
            <div className={s.option}>
              <span>Popularity</span>
              <Checkbox
                checked={selectedOption === "popular"}
                onClick={() => setSelectedOption("popular")}
              />
            </div>
            <div className={s.option}>
              <span>Star Rating (higest first)</span>
              <Checkbox
                checked={selectedOption === "ratingHF"}
                onClick={() => setSelectedOption("ratingHF")}
              />
            </div>
            <div className={s.option}>
              <span>Star Rating (lowest first)</span>
              <Checkbox
                checked={selectedOption === "ratingLF"}
                onClick={() => setSelectedOption("ratingLF")}
              />
            </div>
            <div className={s.option}>
              <span>Best Reviewed First</span>
              <Checkbox
                checked={selectedOption === "best"}
                onClick={() => setSelectedOption("best")}
              />
            </div>
            <div className={s.option}>
              <span>Most Reviewed First</span>
              <Checkbox
                checked={selectedOption === "most"}
                onClick={() => setSelectedOption("most")}
              />
            </div>
            <div className={s.option}>
              <span>Price (lowest first)</span>
              <Checkbox
                checked={selectedOption === "priceLF"}
                onClick={() => setSelectedOption("priceLF")}
              />
            </div>
            <div className={s.option}>
              <span>Price (higest first)</span>
              <Checkbox
                checked={selectedOption === "priceHF"}
                onClick={() => setSelectedOption("priceHF")}
              />
            </div>
          </Card>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Test drive</span>
          <Card className={s.testDrive}>
            <span>Free Test Drive</span>
            <Switch />
          </Card>
        </div>
        <div className={s.filterCard}>
          <div className={s.brandCarHeader}>
            <span className={s.titleCard}>Brand Car</span>
            <Button
              type="text"
              className={s.seeAllBtn}
              onClick={() => setShowAllBrands((prev) => !prev)}
            >
              {showAllBrands ? "Show less" : "See all"}
              {showAllBrands ? <UpOutlined /> : <DownOutlined />}
            </Button>
          </div>
          <div className={s.popularCarsList}>
            {(showAllBrands
              ? popularCarsMock
              : popularCarsMock.slice(0, 8)
            ).map((item, index) => (
              <div
                key={index}
                className={`${s.popularCar} ${
                  selectedCar === item && s.checked
                }`}
                onClick={() =>
                  setSelectedCar((prev) => (prev === item ? null : item))
                }
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Colors</span>
          <div className={s.colorsList}>
            {colorsMock.map((item, index) => (
              <div
                style={{ backgroundColor: item }}
                key={index}
                className={s.colorItem}
                onClick={() =>
                  setSelectedColor((prev) => (prev === item ? null : item))
                }
              >
                {selectedColor === item && (
                  <CheckOutlined className={s.checkArrow} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Features</span>
          <div className={s.featuresList}>
            {featuresMock.map((item, index) => (
              <div key={index} className={`${s.featuresItem} ${selectedFeatures.includes(item) && s.selectedF}`} onClick={() => toggleFeature(item)}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Price Range</span>
          <Card className={s.rangeInput}>
            <Slider
              max={1000000}
              range
              defaultValue={[0, 1000000]}
              className={s.slider}
            />
          </Card>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Star Rating</span>
          <Radio.Group style={{ width: "100%" }} className={s.ratingBtns}>
            <Radio.Button className={s.ratingBtn} value={1}>
              1<StarFilled className={s.star} />
            </Radio.Button>
            <Radio.Button className={s.ratingBtn} value={2}>
              2<StarFilled className={s.star} />
            </Radio.Button>
            <Radio.Button className={s.ratingBtn} value={3}>
              3<StarFilled className={s.star} />
            </Radio.Button>
            <Radio.Button className={s.ratingBtn} value={4}>
              4<StarFilled className={s.star} />
            </Radio.Button>
            <Radio.Button className={s.ratingBtn} value={5}>
              5<StarFilled className={s.star} />
            </Radio.Button>
          </Radio.Group>
        </div>
        <Button type="primary" className={s.applyBtn}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default MainFilter;
