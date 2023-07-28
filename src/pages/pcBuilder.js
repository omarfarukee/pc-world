import RootLayout from "@/components/RootLayout";
import React from "react";

const PcBuilder = () => {
  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-3xl">the page is under developing.....</h1>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
