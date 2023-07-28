/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const FeaturedProducts = ({ allProducts }) => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
    const randomSixProducts = shuffledProducts.slice(0, 6);
    setRandomProducts(randomSixProducts);
  }, [allProducts]);

  return (
    <div>
      <div className="flex justify-center">
        <h1
          className="text-3xl mb-8
border-b-4"
        >
          Featured product
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {randomProducts?.map((product) => (
          <div
            key={product.productName}
            className="card w-96 h-96 bg-base-100 shadow-xl border transition duration-300 transform hover:scale-105 hover:shadow-black"
          >
            <figure>
              <img src={product.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.productName}</h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
