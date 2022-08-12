// import React, { useEffect } from "react";
// import CardItem from "../CardItem";
// import "./style.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductsList } from "../../store/producstListReducer";

// const ProductsOverview = ({ addItemToCart }) => {
//   const dispatch = useDispatch();
//   const productsList = useSelector((state) => state);
//   const products = JSON.parse(localStorage.getItem("productsData"));

//   // useEffect(() => {
//   //   dispatch(getProductsList());
//   // }, []);

//   const productsListJson = JSON.stringify(productsList);
//   console.log("fraaa", productsListJson);

//   const mostRated = products
//     ?.sort((a, b) => b.rating.rate - a.rating.rate)
//     .splice(0, 4);

//   return (
//     <div className="products-overview">
//       <div className="title-container">
//         <h2 className="products-title"> Solutions for all skin</h2>
//         <p className="title-text">Explore our innovative skincare products</p>
//       </div>
//       <div className="category-products">
//         <span className="popular-product">Most popular</span>
//         <span className="all-products">Shop all products</span>
//       </div>
//       <div className="products-container">
//         {mostRated?.map((item) => {
//           return (
//             <CardItem
//               category={item.category}
//               name={item.title}
//               image={item.image}
//               description={item.description}
//               price={item.price}
//               key={item.id}
//               id={item.id}
//               addItemToCart={addItemToCart}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductsOverview;

import React, { useEffect } from "react";
import CardItem from "../CardItem";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMostRated } from "../../store/producstListReducer";

const ProductsOverview = ({ addItemToCart }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostRated());
  }, [dispatch]);

  const { productsList } = useSelector((store) => store.producstListReducer);

  return (
    <div className="products-overview">
      <div className="title-container">
        <h2 className="products-title"> Solutions for all skin</h2>
        <p className="title-text">Explore our innovative skincare products</p>
      </div>
      <div className="category-products">
        <span className="popular-product">Most popular</span>
        <span className="all-products">Shop all products</span>
      </div>
      <div className="products-container">
        {productsList?.map((item) => {
          return (
            <CardItem
              category={item.category}
              name={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              key={item.id}
              id={item.id}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsOverview;
