import { useEffect, useState } from "react";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setVisas(data));
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
