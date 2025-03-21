import { useEffect, useState } from "react";
import VisaCard from "./VisaCard";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center">Latest News</h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 mt-3">
        {visas.map((visa) => (
          <VisaCard visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default LatestVisas;
