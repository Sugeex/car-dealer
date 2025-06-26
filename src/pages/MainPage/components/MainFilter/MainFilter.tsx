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
import { Button, Radio, Slider } from "antd";
import { useState } from "react";

const popularCarsMock = [
  "1 Series",
  "2 Series",
  "3 Series",
  "4 Series",
  "5 Series",
  "6 Series",
  "7 Series",
  "X1",
  "X2",
  "X3",
  "X4",
  "X5",
  "X6",
  "X7",
];

const colorsMock = ["black", "gray", "blue", "red", "brown", "yellow", "pink"];
const featuresMock = [
  "Driving Assistant",
  "LED Adaptive",
  "Individual Roof-lining Anthracite",
  "Remote Engine Start",
  "Sun Protection Glazing",
  "Backup Camera",
  "Hifi Loudspeaker System",
  "National version Canada",
  "Steering Wheel Heating",
  " Seat Heating F Driver/front Passenger",
  "Park Distance Control (pdc)",
  "Speedometer With Kilometer Reading",
  "Trailer Tow Hitch",
];

const MainFilter = () => {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [selectedExColor, setSelectedExColor] = useState<string | null>(null);
  const [selectedInColor, setSelectediNColor] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [selectedYear, setSelectedYear] = useState([1929, 2025]);
  const [selectedMileage, setSelectedMileage] = useState([0, 1000000]);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000000])

  const navigate = useNavigate();

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
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
          <div className={s.filterRangeHeader}>
            <span className={s.titleCard}>Year</span>
            <div className={s.labelRange}>
              <span>From: {selectedYear[0]}</span>
              <span>To: {selectedYear[1]}</span>
            </div>
          </div>
          <Card className={s.rangeInput}>
            <Slider
              min={1929}
              max={2025}
              range
              defaultValue={[1929, 2025]}
              className={s.slider}
              onChange={(e) => setSelectedYear(e)}
            />
          </Card>
        </div>

        <div className={s.filterCard}>
          <div className={s.filterRangeHeader}>
            <span className={s.titleCard}>Mileage</span>
            <div className={s.labelRange}>
              <span>{`From: ${selectedMileage[0]} mi`}</span>
              <span>{`To: ${selectedMileage[1]} mi`}</span>
            </div>
          </div>

          <Card className={s.rangeInput}>
            <Slider
              max={1000000}
              range
              defaultValue={[0, 1000000]}
              className={s.slider}
              onChange={(e)=>setSelectedMileage(e)}
            />
          </Card>
        </div>

        <div className={s.filterCard}>
          <div className={s.brandCarHeader}>
            <span className={s.titleCard}>Car models</span>
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
          <span className={s.titleCard}>Exterior Color</span>
          <div className={s.colorsList}>
            {colorsMock.map((item, index) => (
              <div
                style={{ backgroundColor: item }}
                key={index}
                className={s.colorItem}
                onClick={() =>
                  setSelectedExColor((prev) => (prev === item ? null : item))
                }
              >
                {selectedExColor === item && (
                  <CheckOutlined className={s.checkArrow} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Interior Color</span>
          <div className={s.colorsList}>
            {colorsMock.map((item, index) => (
              <div
                style={{ backgroundColor: item }}
                key={index}
                className={s.colorItem}
                onClick={() =>
                  setSelectediNColor((prev) => (prev === item ? null : item))
                }
              >
                {selectedInColor === item && (
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
              <div
                key={index}
                className={`${s.featuresItem} ${
                  selectedFeatures.includes(item) && s.selectedF
                }`}
                onClick={() => toggleFeature(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={s.filterCard}>
          <div className={s.filterRangeHeader}>
            <span className={s.titleCard}>Price range</span>
            <div className={s.labelRange}>
              <span>{`From: ${selectedPrice[0]} $`}</span>
              <span>{`To: ${selectedPrice[1]} $`}</span>
            </div>
          </div>
          <Card className={s.rangeInput}>
            <Slider
              max={1000000}
              range
              defaultValue={[0, 1000000]}
              className={s.slider}
              onChange={(e) => setSelectedPrice(e)}
            />
          </Card>
        </div>
        <div className={s.filterCard}>
          <span className={s.titleCard}>Complication Rating</span>
          <Radio.Group
            block
            buttonStyle="solid"
            style={{ width: "100%" }}
            className={s.ratingBtns}
          >
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
