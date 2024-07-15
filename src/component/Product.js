import React from "react";
import { Link } from "react-router-dom";
import FormatePrice from "./FormatePrice";

const Product = ({ pro }) => {
  return (
    <Link to={`/singleproduct/${pro.id}`}>
      <div className="card">
        <figure>
          <img src={pro.image} alt={pro.name} />
          <figcaption className="caption">{pro.category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{pro.name}</h3>
            <p className="card-data--price">
              <FormatePrice price={pro.price} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
