import FeaturedProducts from "@/components/FeaturedProduct/FeaturedProducts";
import RootLayout from "@/components/RootLayout";
import { useGetFeaturedProductsQuery } from "@/redux/api/api";

const HomePage = ({ allProducts }) => {
  const { data, isError, isLoading, error } = useGetFeaturedProductsQuery();
  console.log(data);
  return (
    <div className="text-white">
      <h1>this is pc home page</h1>
      <FeaturedProducts allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/featuredProducts");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data.data,
    },
    // revalidate: 30,
  };
};
