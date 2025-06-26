import { useNavigate } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../utils/helpers";
import s from "./CarsList.module.scss";

interface CarsListProps {
  activeCategory: string;
}

const carsMock = [
  {
    id: 1,
    brand: "Genesis",
    model: "GV60",
    type: "hatch",
    price: "52 000 $",
    image: "/cars/Genesis-GV60.jpg",
  },
  {
    id: 2,
    brand: "Mercedes",
    model: "EQE 350",
    type: "hatch",
    price: "77 900 $",
    image: "/cars/eqe.jpg",
  },
  {
    id: 3,
    brand: "Jeep",
    model: "Wrangler 4xe",
    type: "convertible",
    price: "23 995 $",
    image: "/cars/4xe.jpeg",
  },
  {
    id: 4,
    brand: "Volkswagen",
    model: "Taos",
    type: "hatch",
    price: "45 995 $",
    image: "/cars/taos.jpg",
  },
  {
    id: 5,
    brand: "BMW",
    model: "M5",
    type: "sedan",
    price: "120 000 $",
    image: "/cars/bmw-m5.png",
  },
];

const CarsList = ({activeCategory}: CarsListProps) => {
  const navigate = useNavigate()

     const filteredCars =
       activeCategory === "all"
         ? carsMock
         : carsMock.filter((car) => car.type === activeCategory);

  return (
    <div className={s.carsListContainer}>
      {filteredCars.map((item) => (
        <div key={item.id} className={s.carItem} onClick={() => navigate(`/details/${item.id}`)}>
          <div className={s.infoCar}>
            <span className={s.carName}>{`${item.brand} ${item.model}`}</span>
            <span className={s.carPrice}>{item.price}</span>
          </div>
          <img className={s.carPhoto} src={toAbsoluteUrl(item.image)} alt={item.model} />
        </div>
      ))}
    </div>
  );
};

export default CarsList;
