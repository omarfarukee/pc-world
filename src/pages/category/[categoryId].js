/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/RootLayout";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { global } from "styled-jsx/css";

const CategoryPage = ({ category }) => {
  return (
    <div className="mt-10 text-white">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
        {category?.map((cat) => (
          <div
            key={cat?._id}
            className="card lg:ml-0 lg:w-96 mb-10 f-card bg-base-100 shadow-xl border transition duration-300 transform hover:scale-105 hover:shadow-black"
          >
            <figure>
              <img className="h-60 w-full" src={cat?.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{cat?.productName}</h2>
              <p>Category - {cat?.category}</p>
              <p>Price - {cat?.price} ৳-BDT</p>
              <p>Status - {cat?.status}</p>
              <p className="flex items-center font-bold">
                Rating - {cat?.rating}{" "}
                <FaStar className="ml-2 text-yellow-200" />
              </p>
              <div className="card-actions justify-end">
                <Link href={`/productDetail/${cat?._id}`}>
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

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-world-server.vercel.app/category`);
  const categories = await res.json();

  if (!Array.isArray(categories)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = categories.map((category) => ({
    params: { categoryId: category.category_id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-world-server.vercel.app/category/${params?.categoryId}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      category: data,
    },
    // revalidate: 30,
  };
};
