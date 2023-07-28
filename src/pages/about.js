import RootLayout from "@/components/RootLayout";

const AboutPage = () => {
  return (
    <div className="mt-20">
      <h1 className="text-white">this is about</h1>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
