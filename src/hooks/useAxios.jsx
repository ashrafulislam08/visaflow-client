import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://visaflow-server.vercel.app",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
