import { useForm } from "react-hook-form";

const AddVisa = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="my-8">
      <div>
        <section>
          <section class=" dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Add Visa
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="flex gap-3 flex-col md:flex-row">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Country Image
                        </label>
                        <input
                          type="text"
                          name="country_image"
                          {...register("country_image")}
                          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Country Image"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for=""
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Country Name
                        </label>
                        <input
                          type="text"
                          name="country_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Country Name"
                          {...register("country_name")}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                      <div>
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Visa Type
                        </label>
                        <input
                          type="text"
                          name="country_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Visa Type"
                          {...register("visa_type")}
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Processing Time
                        </label>
                        <input
                          type="text"
                          name="processing_time"
                          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Processing Time"
                          {...register("processing_time")}
                          required=""
                        />
                      </div>
                    </div>

                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Description"
                        {...register("description")}
                        required=""
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Age Restriction
                        </label>
                        <input
                          type="text"
                          name="age_restriction"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Age Restriction"
                          {...register("age_restriction")}
                          required=""
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Fee
                        </label>
                        <input
                          type="number"
                          name="fee"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Fee"
                          {...register("fee")}
                          required=""
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Validity
                        </label>
                        <input
                          type="text"
                          name="validity"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Validity"
                          {...register("validity")}
                          required=""
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Application Method
                        </label>
                        <input
                          type="text"
                          name="application_method"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Application Method"
                          {...register("application_method")}
                          required=""
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn btn-neutral text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Add Visa
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default AddVisa;
