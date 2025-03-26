import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const MyAddedVisa = () => {
  const [data, setData] = useState([]);
  const { user } = useAuthContext();
  const axios = useAxios();
  useEffect(() => {
    axios
      .get(`/visas/my-added/${user.email}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);
  console.log(data);
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <>
      <div>
        {data.length > 0 && (
          <h2 className="text-3xl font-semibold text-center my-8">
            My Visa Application
          </h2>
        )}
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        {data?.length > 0 ? (
          <>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Country Name</th>
                  <th>Country Image</th>
                  <th>Visa Type</th>
                  <th>Processing Time</th>
                  <th>Fee</th>
                  <th>Validity</th>
                  <th>Application Method</th>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map((visa, idx) => (
                  <>
                    <tr key={visa._id}>
                      <th>{idx + 1}</th>
                      <td>{visa.country_name}</td>
                      <td>
                        <img src={visa.country_image} alt="" />
                      </td>
                      <td>{visa.visa_type}</td>
                      <td>{visa.processing_time}</td>
                      <td>{visa.fee}</td>
                      <td>{visa.validity}</td>
                      <td>{visa.application_method}</td>
                      <td className="flex gap-4">
                        <button
                          onClick={() => handleDelete(visa._id)}
                          className="btn btn-error text-white"
                        >
                          Delete
                        </button>
                        <button className="btn btn-accent text-white">
                          Update
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="text-center my-12">
            <h2 className="text-3xl font-semibold">You don't add any visa</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default MyAddedVisa;
