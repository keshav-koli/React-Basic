import ResturantContainer from "./ResturantContainer";
import { resList } from "../utils/MockData";
const Body = () => {
    return (
      <div className="Card">
        <div className="Search">
          <h3>Search</h3>
        </div>
        <div className="res-container">
          {resList.map((resturant) => (
            <ResturantContainer resObj={resturant} key={resturant.info.id}  />
          ))}
        </div>
      </div>
    );
  };
export default Body;