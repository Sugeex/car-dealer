import s from "./Details.module.scss";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
const carSpecs = {
    country: 'Canada',
    drive: 'AWD',
    model: 'GV60',
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
