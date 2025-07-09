import { useNavigate } from "react-router-dom";
import s from "./CarsList.module.scss";
import { StarFilled } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { fetchCars } from "../../../../store/slice/carsSlice";
import { useCallback, useEffect, useRef } from "react";
import useInfiniteScroll from "../../../../hooks/useInfiniteScroll";
import { formatNumber } from "../../../../utils/helpers";

const CarsList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    data: cars,
    loading,
    loadingMore,
    hasMore,
    error,
    filters,
  } = useAppSelector((state) => state.cars);

  const loadMoreCars = useCallback(() => {
    console.log(
      `Load more conditions - hasMore: ${hasMore}, loadingMore: ${loadingMore}, loading: ${loading}`
    );

    if (hasMore && !loadingMore && !loading) {
      const nextPage = Math.floor(cars.length / 10) + 1;
      console.log(`Loading page ${nextPage}`);
      dispatch(
        fetchCars({ page: nextPage, per_page: 10, series: filters.series })
      );
    } else {
      console.log("Not loading more due to conditions");
    }
  }, [dispatch, hasMore, loadingMore, loading, cars.length, filters.series]);

  useInfiniteScroll(containerRef, loadMoreCars);

  return (
    <div ref={containerRef} className={s.carsListContainer}>
      {cars.map((item) => (
        <div
          key={item.id}
          className={s.carItem}
          onClick={() => navigate(`/details/${item.id}`)}
        >
          <div className={s.photoContainer}>
            {item.photos.length > 0 ? (
              <img
                loading="lazy"
                className={s.carPhoto}
                src={item.photos?.[0]?.url}
                alt={item.series}
              />
            ) : (
              <div className={s.noPhoto}>No photo</div>
            )}
          </div>
          <div className={s.infoCar}>
            <div className={s.infoCarTitle}>
              <span className={s.carName}>
                {item.bimmer_work_check?.series_name || "BMW"}
              </span>
              <span className={s.carPrice}>${formatNumber(item.price)}</span>
            </div>
            <div className={s.carColors}>
              <div className={s.colorItem}>
                <span
                  style={{
                    backgroundColor:
                      item.bimmer_work_check?.hex_upholstery || "#ccc",
                  }}
                  className={s.interiorColor}
                ></span>
                <span>Interior Color</span>
              </div>
              <div className={s.colorItem}>
                <span
                  style={{
                    backgroundColor: item.bimmer_work_check?.hex_body || "#ccc",
                  }}
                  className={s.exteriorColor}
                ></span>
                <span>Exterior Color</span>
              </div>
            </div>
            <div className={s.ratingCar}>
              <span>
                5.0 <StarFilled size={17} /> (ratings)
              </span>
              <span className={s.mileage}>
                Mileage:{" "}
                <span className={s.mileageValue}>
                  {formatNumber(item.odometer)} mi
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarsList;
