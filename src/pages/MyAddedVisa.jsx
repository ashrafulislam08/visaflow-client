import useAuthContext from "../hooks/useAuthContext";
import useAxios from "../hooks/useAxios";

const MyAddedVisa = () => {
  const { user } = useAuthContext();
  const axios = useAxios();
  const data = axios.get(`/apply/${user.email}`);
  console.log(data);
  return <div>MyAddedVisa</div>;
};

export default MyAddedVisa;
