import s from "./Details.module.scss";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
const carSpecs = {
    productionDate: '13-12-2021',
    mileage: "60 000 mi",
    drive: 'AWD',
    exteriorColor: 'Black',
    interiorColor: 'Brown',
    body: 'SUV',
    seats: 4,
    vin: '3842H4395M30'
  };


const Details = () => {
  return (
    <div className={s.detailsContainer}>
        <VehicleDetails specs={carSpecs}/>
    </div>
  );
};

export default Details;
