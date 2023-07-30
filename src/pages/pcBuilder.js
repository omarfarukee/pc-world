/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/RootLayout";
import { useGetCategoryQuery } from "@/redux/api/api";
import Link from "next/link";
import React from "react";

const PcBuilder = () => {
  const { data, isError, isLoading } = useGetCategoryQuery();
  const id0 = data?.data?.[0]?._id;
  const id1 = data?.data?.[1]?._id;
  const id2 = data?.data?.[2]?._id;
  const id3 = data?.data?.[3]?._id;
  const id4 = data?.data?.[4]?._id;
  const id5 = data?.data?.[5]?._id;
  const id6 = data?.data?.[6]?._id;

  return (
    <div className=" mt-10">
      <div className="flex justify-center mb-10 text-2xl">
        <h1>build your pc</h1>
      </div>
      <div className="text-black">
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between mb-5">
          <div>
            <p>CPU / Processor</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=FZIiyQbXf6Zd&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id0}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between mb-5">
          <div>
            <p>Motherboard</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=54735&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id1}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between  mb-5">
          <div>
            <p>RAM</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=30tjpfTNaUGY&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id2}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between  mb-5">
          <div>
            <p>Power Supply Unit</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=117207&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id3}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between  mb-5">
          <div>
            <p>Storage Device</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=FrHarGT07jMm&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id4}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between  mb-5">
          <div>
            <p>Monitor</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=37837&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id5}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
        <div className="border p-8 rounded-lg bg-white flex items-center justify-between  mb-5">
          <div>
            <p>Other</p>
            <img
              className="shadow-md rounded-md"
              src="https://img.icons8.com/?size=1x&id=48747&format=png"
            />
          </div>
          <div>
            <Link href={`/choseId/${id6}`}>
              <button className="btn btn-outline">Chose</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
