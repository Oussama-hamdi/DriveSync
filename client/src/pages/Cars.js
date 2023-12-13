import { useState, useEffect } from "react";
import Car from "../components/Car";
import "../styles/Cars.css";

import carsData from "../cars.json";

function Cars() {
  // const API_URL = "../cars.json";
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carsData);
  }, []);
  return (
    <section className="cars">
      <div className="container">
        <div className="cars-list">
          {cars.map((car) => (
            <Car key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cars;
