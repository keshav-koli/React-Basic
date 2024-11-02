import  food_imageCDN  from "../utils/constant";
import star from "../../item/star.png";
const ResturantContainer = (props) => {
  // Destructuring of the object
  const { resObj } = props;
  const { cloudinaryImageId, name, avgRating, locality, cuisines, costForTwo } =
    resObj?.info;
  return (
    <div className="resCard">
      <img className="res-image" src={ food_imageCDN  + cloudinaryImageId} />
      <div className="res-details">
        <h3>{name}</h3>
        <p id="rating">
          <img src={star} alt="rating" className="star-image"></img>
          {avgRating} • {resObj.info.sla.deliveryTime}
          mins
        </p>
        <p>{locality}</p>
        <p className="cuisines">{cuisines.join(",")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
export default ResturantContainer;
