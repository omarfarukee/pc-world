/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

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
            key={product?.productName}
            className="card w-96 bg-base-100 shadow-xl border transition duration-300 transform hover:scale-105 hover:shadow-black"
          >
            <figure>
              <img className="h-60 w-full" src={product?.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{product?.productName}</h2>
              <p>Category- {product?.category}</p>
              <p>Price- {product?.price} ৳-BDT</p>
              <p>Status- {product?.status}</p>
              <p className="flex items-center font-bold">
                Rating- {product?.rating}{" "}
                <FaStar className="ml-2 text-yellow-200"></FaStar>
              </p>
              <div className="card-actions justify-end">
                <Link href={`/productDetail/${product?._id}`}>
                  <button className="btn btn-info">Enter Card</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
