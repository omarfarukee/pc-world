/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/RootLayout";
import { useGetCategoryQuery } from "@/redux/api/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PcBuilder = () => {
  // ----------------------------------------
  const { data, isError, isLoading } = useGetCategoryQuery();
  const id0 = data?.data?.[0]?._id;
  const id1 = data?.data?.[1]?._id;
  const id2 = data?.data?.[2]?._id;
  const id3 = data?.data?.[3]?._id;
  const id4 = data?.data?.[4]?._id;
  const id5 = data?.data?.[5]?._id;
  const id6 = data?.data?.[6]?._id;
  // -----------------------------------------------------
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/builderProduct")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  products?.data?.map((p) => {
    const category_id = p?.category_id;
    console.log(category_id);
  });

  // ------------------------------
  const foundPrice0 = products?.data?.some(
    (p) => p?.category_id === id0 && p?.price
  );
  const choseLink0 = `/choseId/${id0}`;

  const foundPrice1 = products?.data?.some(
    (p) => p?.category_id === id1 && p?.price
  );
  const choseLink1 = `/choseId/${id1}`;

  const foundPrice2 = products?.data?.some(
    (p) => p?.category_id === id2 && p?.price
  );
  const choseLink2 = `/choseId/${id2}`;

  const foundPrice3 = products?.data?.some(
    (p) => p?.category_id === id3 && p?.price
  );
  const choseLink3 = `/choseId/${id3}`;

  const foundPrice4 = products?.data?.some(
    (p) => p?.category_id === id4 && p?.price
  );
  const choseLink4 = `/choseId/${id4}`;

  const foundPrice5 = products?.data?.some(
    (p) => p?.category_id === id5 && p?.price
  );
  const choseLink5 = `/choseId/${id5}`;

  const foundPrice6 = products?.data?.some(
    (p) => p?.category_id === id6 && p?.price
  );
  const choseLink6 = `/choseId/${id6}`;
  // --------------------------------

  const handleDelete = (productId) => {
    fetch(`http://localhost:5000/builderProduct/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          location.reload();
        }
        console.log(data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className=" mt-10 mb-10">
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id0 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice0 ? "" : choseLink0}>
              <button className="btn btn-outline" disabled={foundPrice0}>
                Chose
              </button>
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id1 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice1 ? "" : choseLink1}>
              <button className="btn btn-outline" disabled={foundPrice1}>
                Chose
              </button>
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id2 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice2 ? "" : choseLink2}>
              <button className="btn btn-outline" disabled={foundPrice2}>
                Chose
              </button>
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id3 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice3 ? "" : choseLink3}>
              <button className="btn btn-outline" disabled={foundPrice3}>
                Chose
              </button>
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id4 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice4 ? "" : choseLink4}>
              <button className="btn btn-outline" disabled={foundPrice4}>
                Chose
              </button>
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id5 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice5 ? "" : choseLink5}>
              <button className="btn btn-outline" disabled={foundPrice5}>
                Chose
              </button>
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
            {products?.data?.map((p) => (
              <>
                {p?.category_id === id6 ? (
                  <div className="flex bg-gray-300  rounded-lg p-2">
                    <div className="flex items-center p-5">
                      <div>
                        <img className="w-28 rounded-2xl mr-5" src={p?.image} />
                      </div>
                      <div>
                        <p>{p?.productName}</p>
                        <p>Price- {p?.price} BDT</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(p?._id)}
                      className="btn btn-ghost bg-slate-500"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <div>
            <Link href={foundPrice6 ? "" : choseLink6}>
              <button className="btn btn-outline" disabled={foundPrice6}>
                Chose
              </button>
            </Link>
          </div>
        </div>
      </div>

      {foundPrice0 &&
      foundPrice1 &&
      foundPrice2 &&
      foundPrice3 &&
      foundPrice4 &&
      foundPrice5 ? (
        <div className="flex justify-center">
          <button className="btn btn-info lg:w-96">Complete Build</button>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <button className="btn btn-info lg:w-96 " disabled>
              Complete Build
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
