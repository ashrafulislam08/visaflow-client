import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | VisaFlow</title>
      </Helmet>

      <section>
        <Banner />
      </section>
    </>
  );
};

export default Home;
