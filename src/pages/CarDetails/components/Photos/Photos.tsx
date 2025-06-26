import { toAbsoluteUrl } from "../../../../utils/helpers";
import s from "./Photos.module.scss"

const Photos = () => {
    return (
        <div className={s.photosContainer}>
            <img className={s.photosCar} src={toAbsoluteUrl("/cars/Genesis-GV60.jpg")} alt="carPhoto" />
            <img className={s.photosCar} src={toAbsoluteUrl("/cars/Genesis-GV60.jpg")} alt="carPhoto" />
            <img className={s.photosCar} src={toAbsoluteUrl("/cars/Genesis-GV60.jpg")} alt="carPhoto" />
            <img className={s.photosCar} src={toAbsoluteUrl("/cars/Genesis-GV60.jpg")} alt="carPhoto" />
        </div>
    )
}

export default Photos;