import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";

const VisaDetails = () => {
  const [visa, setVisa] = useState({});
  const axios = useAxios();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/visas/${id}`).then((data) => {
      setVisa(data.data[0]);
    });
  }, [id]);

  console.log(visa);
  return (
    <div>
      <div>
        <img className="w-28" src={visa?.country_image} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-bold uppercase">{visa?.country_name}</h2>
        <p className="text-xl font-normal ">{visa?.description}</p>
        <p className="text-lg font-semibold">Visa Type: {visa.visa_type}</p>
        <p className="text-lg font-semibold">
          Processing Time: {visa.processing_time}
        </p>
        <p className="text-lg font-semibold">
          Age Restriction: {visa.age_restriction}
        </p>
        <p className="text-lg font-semibold">
          Application Method: {visa.application_method}
        </p>
        <p className="text-lg font-semibold">Fee: ${visa.fee}</p>
        <p className="text-lg font-semibold">Validity: {visa.validity}</p>
        <button className="btn btn-neutral">Apply for Visa</button>
      </div>
    </div>
  );
};

export default VisaDetails;
