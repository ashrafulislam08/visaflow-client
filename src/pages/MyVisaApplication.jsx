import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuthContext from "../hooks/useAuthContext";

const MyVisaApplication = () => {
  const [data, setData] = useState([]);
  const { user } = useAuthContext();
  const axios = useAxios();
  useEffect(() => {
    axios.get(`/apply/${user.email}`).then((result) => setData(result.data));
  }, []);
  console.log(data);
  return <div>MyVisaApplication</div>;
};

export default MyVisaApplication;
