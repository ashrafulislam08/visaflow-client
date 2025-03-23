import { useEffect, useState } from "react";
import VisaCard from "../components/VisaCard";
import useAxios from "../hooks/useAxios";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);

  const axios = useAxios();
  useEffect(() => {
    axios
      .get("/visas")
      .then((data) => {
        setVisas(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-4xl my-5 font-semibold text-center">
          All Available Visas
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 mt-5">
        {visas.map((visa) => (
          <VisaCard visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
