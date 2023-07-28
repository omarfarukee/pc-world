import RootLayout from "@/components/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1>this is pc home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
//
