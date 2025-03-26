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
  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold text-center my-8">
          My Visa Application
        </h2>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        {data?.length > 0 ? (
          <>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Country</th>
                  <th>Country Name</th>
                  <th>Visa Type</th>
                  <th>Processing Time</th>
                  <th>Fee</th>
                  <th>Validity</th>
                  <th>Application Method</th>
                  <th>Applied Date</th>
                  <th>Applicant's Name</th>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map((visa, idx) => (
                  <>
                    <tr>
                      <th>{idx + 1}</th>
                      <td>{visa.country}</td>
                      <td>{visa.country_name}</td>
                      <td>{visa.visa_type}</td>
                      <td>{visa.processing_time}</td>
                      <td>{visa.fee}</td>
                      <td>{visa.validity}</td>
                      <td>{visa.application_method}</td>
                      <td>{visa.applied_data}</td>
                      <td>{visa.first_name + " " + visa.last_name}</td>
                      <td>
                        <button className="btn btn-error text-white">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-semibold">You don't apply for visa</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default MyVisaApplication;
