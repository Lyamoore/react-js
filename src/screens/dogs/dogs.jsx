import { Dogs } from "../../components/dogs/dogs";

import "./dogs.css";

export const DogsContainer = () => {
  return (
    <div className="counter">
      <div className="dogs__screen">
        <Dogs />
      </div>
    </div>
  );
};
