import { GlobalOutlined, LeftOutlined } from "@ant-design/icons";
import { toAbsoluteUrl } from "../../utils/helpers";
import s from "./CarDetails.module.scss";
import { Button, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Details from "./components/Details/Details";
import Features from "./components/Features/Features";
import Photos from "./components/Photos/Photos";
import ReactCountryFlag from "react-country-flag";

const CarDetails = () => {
  const [activeCategory, setActiveCategory] = useState("details");

  const navigate = useNavigate();

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
    "Seat Heating F Driver/front Passenger",
    "Park Distance Control (pdc)",
    "Speedometer With Kilometer Reading",
    "Trailer Tow Hitch",
  ];

  return (
    <div className={s.carDetailsContainer}>
      <div className={s.carPhoto}>
        <img
          className={s.photo}
          src={toAbsoluteUrl("/cars/Genesis-GV60.jpg")}
          alt="Genesis"
        />
      </div>
      <div className={s.headerDetails}>
        <LeftOutlined className={s.backDetails} onClick={() => navigate(-1)} />
      </div>
      <div className={s.detailsContent}>
        <div className={s.titleCar}>
          <span className={s.nameCountry}>
            Canada <ReactCountryFlag countryCode="CA" svg />
          </span>
          <h2>BMW X7 Xdrive40i g07</h2>
          <div className={s.mileageRatingContainer}>
            <Rate className={s.rating} disabled defaultValue={4} />
          </div>
        </div>
        <div className={s.priceContainer}>
          <span className={s.price}>$52,000</span>
          <span className={s.dealerPrice}>(Dealer Price)</span>
        </div>

        <div className={s.detailFilter}>
          <div
            className={`${s.filterItem} ${
              activeCategory === "details" && s.active
            }`}
            onClick={() => setActiveCategory("details")}
          >
            Details
          </div>
          <div
            className={`${s.filterItem} ${
              activeCategory === "features" && s.active
            }`}
            onClick={() => setActiveCategory("features")}
          >
            Features
          </div>
          <div
            className={`${s.filterItem} ${
              activeCategory === "photos" && s.active
            }`}
            onClick={() => setActiveCategory("photos")}
          >
            Photos
          </div>
        </div>
        {activeCategory === "details" && <Details />}
        {activeCategory === "features" && <Features features={featuresMock} />}
        {activeCategory === "photos" && <Photos />}
        <div className={s.footerDetailsContainer}>
          <div className={s.priceFooterCont}>
            <span className={s.priceNameF}>
              Price (in Poti{" "}
              <ReactCountryFlag
                style={{ marginLeft: "3px" }}
                countryCode="GE"
                svg
              />
              )
            </span>
            <span className={s.priceF}>$52,000</span>
          </div>
          <div className={s.footerBtns}>
            <Button className={s.linkBtnDetails} type="primary">
              <GlobalOutlined />
            </Button>
            <Button className={s.buyBtnDetails} type="primary">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
