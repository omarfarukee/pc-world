/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/RootLayout";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import React from "react";

import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { global } from "styled-jsx/css";

const ChosePage = ({ category }) => {
  const { data: session } = useSession();
  // console.log(session?.user?.email);
  const router = useRouter();
  const handleAddToBuild = (selectedProduct) => {
    selectedProduct.userEmail = session?.user?.email;
    fetch("https://pc-world-server.vercel.app/builderProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          toast.success("added");
          router.push("/pcBuilder");
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <div className="mt-10 p-6 text-white">
      <div className="">
        {category?.map((cat) => (
          <div
            key={cat?._id}
            className="mb-5 rounded-2xl bg-base-100 shadow-xl border transition duration-300 transform hover:scale-105 hover:shadow-black"
          >
            <div className="lg:flex  items-center justify-between bg-black rounded-2xl">
              <div className="lg:flex lg:chose-card w-full">
                <img
                  className="h-48 lg:h-52 rounded-2xl w-96"
                  src={cat?.image}
                />
                <div className="ml-2 mt-2 lg:p-0 p-3">
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
              <button
                className="btn btn-info lg:mr-10 hover:bg-slate-500 m-2"
                onClick={() => handleAddToBuild(cat)}
              >
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
  const res = await fetch(`https://pc-world-server.vercel.app/category`);
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
    `https://pc-world-server.vercel.app/category/${params?.choseCategoryId}`
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
