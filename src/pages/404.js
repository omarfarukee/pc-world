/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const PageNotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div>
      <img
        src="https://la-taniere-du-goupil.fr/wp-content/uploads/2021/08/error-404.jpg"
        alt="error page"
        width="100%"
      />
    </div>
  );
};

export default PageNotFound;
