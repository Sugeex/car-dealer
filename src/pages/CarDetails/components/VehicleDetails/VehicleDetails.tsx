import s from "./VehicleDetails.module.scss"

interface VehicleDetailsProps {
  specs: {
    country: string;
    drive: string;
    model: string;
    exteriorColor: string;
    interiorColor: string;
    body: string;
    seats: number;
    vin: string;
  };
}

const VehicleDetails = ({specs}:VehicleDetailsProps) => {
    return(
    <div className={s.specsContainer}>
      <div className={s.specsGrid}> 

        <div className={s.specRow}>
          <div className={s.specLabel}>Country</div>
          <div className={s.specValue}>{specs.country}</div>
        </div>

        <div className={s.specRow}>
          <div className={s.specLabel}>Drive</div>
          <div className={s.specValue}>{specs.drive}</div>
        </div>
        
        <div className={s.specRow}>
          <div className={s.specLabel}>Model</div>
          <div className={s.specValue}>{specs.model}</div>
        </div>
        
        <div className={s.specRow}>
          <div className={s.specLabel}>Exterior Color</div>
          <div className={s.specValue}>{specs.exteriorColor}</div>
        </div>
        
        <div className={s.specRow}>
          <div className={s.specLabel}>Interior Color</div>
          <div className={s.specValue}>{specs.interiorColor}</div>
        </div>
        
        <div className={s.specRow}>
          <div className={s.specLabel}>Body style</div>
          <div className={s.specValue}>{specs.body}</div>
        </div>
        

        <div className={s.specRow}>
          <div className={s.specLabel}>VIN</div>
          <div className={s.specValue}>{specs.vin}</div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;