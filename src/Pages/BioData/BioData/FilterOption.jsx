import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../Hock/useAxiosPublic";

const FilterOption = () => {
  // const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      gender: "",
      ageTo: "",
      ageFrom: "",
      presentDivision: "",
      permanentDivision: "",
    },
  });
  const onSubmit = async (data) => {
    const gender = data.gender;
    const ageTo = data.ageTo;
    const ageFrom = data.ageFrom;
    const presentDivision = data.presentDivision;
    const permanentDivision = data.permanentDivision;
    const filterOption = {
      gender,
      ageTo,
      ageFrom,
      presentDivision,
      permanentDivision,
    };
    console.log(filterOption);
    // await axiosPublic.get("/all-bioData", filterOption).then((res) => {
    //   console.log("fetch", res);
    // });
  };
  const handleReset = () => {
    reset();
  };
  return (
    <>
      <div className=" px-5 border-b-2 sm:border-b-0 sm:border-e-2 border-pink-600 pb-10">
        <h1 className="text-xl font-semibold text-center mb-5">
          Filter Biodatas
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center gap-5 mb-5">
            <div className="flex justify-center items-center gap-1 flex-1 w-full">
              <div className="flex-1 w-full">
                <label htmlFor="ageTo">
                  Age to
                  <input
                    type="number"
                    {...register("ageTo")}
                    placeholder="Age to"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
              </div>
              <div className="flex-1 w-full">
                <label htmlFor="ageFrom">
                  Age from
                  <input
                    type="number"
                    {...register("ageFrom")}
                    placeholder="Age from"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
              </div>
            </div>
            <div className="flex-1 w-full">
              <label htmlFor="gender">
                Gender
                <select
                  {...register("gender")}
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </label>
            </div>

            <div className="flex-1 w-full">
              <label htmlFor="permanentDivision">
                Permanent division
                <select
                  {...register("permanentDivision")}
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                >
                  <option value="Dhaka Division">Dhaka Division</option>
                  <option value="Chittagong Division">
                    Chittagong Division
                  </option>
                  <option value="Rajshahi Division">Rajshahi Division</option>
                  <option value="Khulna Division">Khulna Division</option>
                  <option value="Barisal Division">Barisal Division</option>
                  <option value="Sylhet Division">Sylhet Division</option>
                  <option value="Rangpur Division">Rangpur Division</option>
                  <option value="Mymensingh Division">
                    Mymensingh Division
                  </option>
                </select>
              </label>
            </div>
            <div className="flex-1 w-full">
              <label htmlFor="presentDivision">
                Present division
                <select
                  {...register("presentDivision")}
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                >
                  <option value="Dhaka Division">Dhaka Division</option>
                  <option value="Chittagong Division">
                    Chittagong Division
                  </option>
                  <option value="Rajshahi Division">Rajshahi Division</option>
                  <option value="Khulna Division">Khulna Division</option>
                  <option value="Barisal Division">Barisal Division</option>
                  <option value="Sylhet Division">Sylhet Division</option>
                  <option value="Rangpur Division">Rangpur Division</option>
                  <option value="Mymensingh Division">
                    Mymensingh Division
                  </option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button
              type="submit"
              className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold bg-pink-600 text-white border border-pink-600 hover:bg-transparent hover:text-pink-600"
            >
              Filter
            </button>
            <button
              type="submit"
              onClick={handleReset}
              className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterOption;
