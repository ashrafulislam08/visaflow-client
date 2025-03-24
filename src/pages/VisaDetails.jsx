import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";

const VisaDetails = () => {
  const [visa, setVisa] = useState({});
  const { register } = useForm();
  const { user } = useAuthContext();
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
        <button
          className="btn btn-neutral"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Apply for Visa
        </button>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="space-y-2">
            <div>
              <input
                type="text"
                {...register("applicant_email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={user?.email}
                disabled
                required=""
              />
            </div>
            <div>
              <input
                type="text"
                {...register("first_name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required=""
              />
            </div>
            <div>
              <input
                type="text"
                {...register("last_name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                required=""
              />
            </div>
            <div>
              <input
                type="text"
                {...register("fee")}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`$${visa.fee}`}
                disabled
                required=""
              />
            </div>
            <button className="btn btn-neutral">Apply</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
