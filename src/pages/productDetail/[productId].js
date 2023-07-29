/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/RootLayout";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = ({ product }) => {
  return (
    <div className="mt-20 text-white p-5">
      <div className="card lg:card-side bg-base-100 shadow-xl border lg:w-full w-96 ml-3 lg:ml-0">
        <figure>
          <img className="w-96 h-full" src={product?.image} alt="Album" />
        </figure>
        <div className="card-body lg:w-96">
          <h2 className="card-title">{product?.productName}</h2>
          <p>Category- {product?.category}</p>
          <p>Description- {product?.description}</p>
          <p>Price- {product?.price} ৳-BDT</p>
          <p>Status- {product?.status}</p>
          <p>Category- {product?.category}</p>
          <p className="flex items-center">
            Individual Rating- {product?.individualRating}{" "}
            <FaStar className="ml-2 text-yellow-200"></FaStar>
          </p>
          <p className="flex items-center">
            Average Rating- {product?.averageRating}{" "}
            <FaStar className="ml-2 text-yellow-200"></FaStar>
          </p>
          <p>Reviews- {product?.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/featuredProducts`);
  const products = await res.json();

  if (!Array.isArray(products)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/featuredProducts/${params?.productId}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      product: data,
    },
    // revalidate: 30,
  };
};
