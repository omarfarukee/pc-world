import FeaturedProducts from "@/components/FeaturedProduct/FeaturedProducts";
import RootLayout from "@/components/RootLayout";
import { useGetFeaturedProductsQuery } from "@/redux/api/api";
import Link from "next/link";

const HomePage = ({ allProducts }) => {
  const { data, isError, isLoading, error } = useGetFeaturedProductsQuery();
  console.log(data);
  return (
    <div className="text-white">
      <div
        className="hero min-h-screen rounded-lg mb-10"
        style={{
          backgroundImage:
            "url(https://www.geekawhat.com/wp-content/uploads/2022/09/Feature-2-1250x700.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5 text-white">
              Build your dream PC with our expert guidance and top-quality
              components, tailored to suit your needs and preferences.
              Experience peak performance and stunning aesthetics, all crafted
              to perfection at our PC_WORLD!
            </p>
            <Link href="/pcBuilder">
              <button className="btn btn-outline btn-info">
                GET_YOUR_DREAM_PC
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FeaturedProducts allProducts={allProducts} />

      <footer className="footer p-10 bg-neutral  text-white">
        <div>
          <h1 className="text-3xl text-white">PC_WORLD</h1>
          <p>
            PC-WORLD Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-world-server.vercel.app/featuredProducts"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data.data,
    },
    // revalidate: 30,
  };
};
