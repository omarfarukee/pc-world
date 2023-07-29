import RootLayout from "@/components/RootLayout";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = ({ product }) => {
  return (
    <div className="mt-20">
      <div className="card lg:card-side bg-base-100 shadow-xl border">
        <figure>
          <img className="w-96 h-full" src={product?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.productName}</h2>
          <p>Category- {product?.category}</p>
          <p>Price- {product?.price} ৳-BDT</p>
          <p>Status- {product?.status}</p>
          <p>Category- {product?.category}</p>
          <p className="flex items-center">
            Rating- {product?.rating}{" "}
            <FaStar className="ml-2 text-yellow-200"></FaStar>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
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
  console.log(data);
  return {
    props: {
      product: data,
    },
    // revalidate: 30,
  };
};
