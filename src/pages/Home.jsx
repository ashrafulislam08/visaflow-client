import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | VisaFlow</title>
      </Helmet>

      <section>
        <Banner />
        <LatestVisas />
      </section>
    </>
  );
};

export default Home;
