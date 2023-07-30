/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/RootLayout";
import React from "react";
import { FaStar } from "react-icons/fa";

const ChosePage = ({ category }) => {
  return (
    <div className="mt-10 p-6 text-white">
      <div className="">
        {category?.map((cat) => (
          <div
            key={cat?._id}
            className="mb-5 rounded-2xl bg-base-100 shadow-xl border transition duration-300 transform hover:scale-105 hover:shadow-black"
          >
            <div className="flex items-center justify-between bg-black rounded-2xl">
              <div className="flex">
                <img className="h-36 rounded-2xl" src={cat?.image} />
                <div className="ml-2 mt-2">
                  <h1 className="text-2xl">{cat?.productName}</h1>
                  <p>category- {cat?.category}</p>
                  <p>Price- {cat?.price} ৳-BDT</p>
                  <p>Status- {cat?.status}</p>
                  <p className="flex items-center">
                    Average Rating- {cat?.averageRating}{" "}
                    <FaStar className="ml-2 text-yellow-200"></FaStar>
                  </p>
                </div>
              </div>
              <button className="btn btn-info mr-10 hover:bg-slate-500">
                Add to build
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChosePage;

ChosePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/category`);
  const categories = await res.json();

  if (!Array.isArray(categories)) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = categories.map((category) => ({
    params: { choseCategoryId: category.category_id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/category/${params?.choseCategoryId}`
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
