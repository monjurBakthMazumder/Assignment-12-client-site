import { useForm } from "react-hook-form";
import UseAuth from "../../../../Hock/UseAuth";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Container from "../../../../Component/Ui/Container";
import BorderContainer from "../../../../Component/Ui/BorderContainer";
import Heading from "../../../../Component/Ui/Heading";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const EditBioData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  // const {
  //   data: info = {},
  //   isPending,
  //   refetch
  // } = useQuery({
  //   queryKey: ["bioData", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/bioData/${user?.email}`);
  //     return res.data;
  //   },
  // });

  const [info, setInfo] = useState({});
  useEffect(() => {
    axiosSecure.get(`/bioData/${user?.email}`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure, user?.email]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: info?.name,
      gender: info?.gender,
      fatherName: info?.fatherName,
      motherName: info?.motherName,
      email: info?.email,
      mobile: info?.mobile,
      image: info?.image,
      age: info?.age,
      dateOfBirth: info?.dateOfBirth,
      hight: info?.hight,
      weight: info?.weight,
      occupation: info?.occupation,
      race: info?.race,
      permanentDivision: info?.permanentDivision,
      presentDivision: info?.presentDivision,
      expectedHight: info?.expectedHight,
      expectedWeight: info?.expectedWeight,
      expectedAge: info?.expectedAge,
    },
  });
  const onSubmit = async (data) => {
    const name = data.name;
    const gender = data.gender;
    const fatherName = data.fatherName;
    const motherName = data.motherName;
    const email = user?.email;
    const mobile = data?.mobile;
    const age = Number(data.age);
    const dateOfBirth = data.dateOfBirth;
    const hight = data?.hight;
    const weight = data?.weight;
    const occupation = data?.occupation;
    const race = data?.race;
    const permanentDivision = data?.permanentDivision;
    const presentDivision = data?.presentDivision;
    const expectedHight = data?.expectedHight;
    const expectedWeight = data?.expectedWeight;
    const expectedAge = Number(data.expectedAge);
    const premium = false;
    const premiumRequest = false;

    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    console.log("imageFile", imageFile);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    const image = res.data.data.display_url;
    const bioDataInfo = {
      name,
      gender,
      fatherName,
      motherName,
      email,
      mobile,
      image,
      age,
      dateOfBirth,
      hight,
      weight,
      occupation,
      race,
      permanentDivision,
      presentDivision,
      expectedAge,
      expectedHight,
      expectedWeight,
      premium,
      premiumRequest,
    };
    console.log(bioDataInfo);
    await axiosSecure.put("/bioData", bioDataInfo).then((res) => {
      console.log("fetch", res);
      if (res.status === 200) {
        Swal.fire({
          title: "Biodata added",
          text: "Your Biodata added successfully",
          icon: "success",
        });
      }
      if (res.status === 201) {
        Swal.fire({
          title: "Biodata Update",
          text: "Your Biodata update successfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>MingleHeart | Edit biodata</title>
      </Helmet>
      <Container>
        <BorderContainer>
          <Heading>Edit Biodata</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="name">
                  Name
                  <input
                    defaultValue={info?.name}
                    {...register("name", {
                      required: "Name is required",
                    })}
                    placeholder="Name"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.name?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="gender">
                  Gender
                  <select
                    defaultValue={info?.gender}
                    {...register("gender", { required: "Gender is required" })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.gender?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="fatherName">
                  Father name
                  <input
                    defaultValue={info?.fatherName}
                    {...register("fatherName", {
                      required: "Father name is required",
                    })}
                    placeholder=" Father name"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.fatherName?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="motherName">
                  Mother name
                  <input
                    defaultValue={info?.motherName}
                    {...register("motherName", {
                      required: "Mother name is required",
                    })}
                    placeholder=" Mother name"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.motherName?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="email">
                  Email
                  <input
                    value={user?.email}
                    {...register("email")}
                    placeholder=" Email"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="mobile">
                  Mobile Number
                  <input
                    type="number"
                    defaultValue={info?.mobile}
                    {...register("mobile", {
                      required: "Mobile Number is required",
                    })}
                    placeholder=" Mobile Number"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.mobile?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="image">
                  Image
                  <input
                    type="file"
                    defaultValue={info?.image}
                    {...register("image", {
                      required: "Image is required",
                    })}
                    placeholder="Image"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.image?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="age">
                  Age
                  <input
                    type="number"
                    defaultValue={info?.age}
                    {...register("age", {
                      required: "Age is required",
                    })}
                    placeholder="Age"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.age?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="dateOfBirth">
                  Date of Birth
                  <input
                    type="date"
                    defaultValue={info?.dateOfBirth}
                    {...register("dateOfBirth", {
                      required: "Date of Birth is required",
                    })}
                    placeholder="Date of Birth"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.dateOfBirth?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="hight">
                  Hight
                  <select
                    defaultValue={info?.hight}
                    {...register("hight", {
                      required: "Hight is required",
                    })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="3.6feet - 4.0feet">3.6feet - 4.0feet</option>
                    <option value="4.1feet - 4.5feet">4.1feet - 4.5feet</option>
                    <option value="4.6feet - 5.0feet">4.6feet - 5.0feet</option>
                    <option value="5.1feet - 5.5feet">5.1feet - 5.5feet</option>
                    <option value="5.6feet - 6.0feet">5.6feet - 6.0feet</option>
                    <option value="6.1feet - 6.5feet">6.1feet - 6.5feet</option>
                    <option value="6.6feet - 7.0feet">6.6feet - 7.0feet</option>
                    <option value="7.1feet - 7.5feet">7.1feet - 7.5feet</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.hight?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="weight">
                  Weight
                  <select
                    defaultValue={info?.weight}
                    {...register("weight", {
                      required: "Weight is required",
                    })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="31kg - 40kg">31kg - 40kg</option>
                    <option value="41kg - 50kg">41kg - 50kg</option>
                    <option value="51kg - 60kg">51kg - 60kg</option>
                    <option value="61kg - 70kg">61kg - 70kg</option>
                    <option value="71kg - 80kg">71kg - 80kg</option>
                    <option value="81kg - 90kg">81kg - 90kg</option>
                    <option value="91kg - 100kg">91kg - 100kg</option>
                    <option value="101kg - 110kg">101kg - 110kg</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.weight?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="occupation">
                  Occupation
                  <select
                    defaultValue={info?.occupation}
                    {...register("occupation", {
                      required: "Occupation is required",
                    })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="Government Job">Government Job</option>
                    <option value="Private Job">Private Job</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Foreign">Foreign</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Unemployed">Unemployed</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.occupation?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="race">
                  Race
                  <select
                    defaultValue={info?.race}
                    {...register("race", {
                      required: "Race is required",
                    })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="Fair">Fair</option>
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Olive">Olive</option>
                    <option value="Dark">Dark</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.race?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="permanentDivision">
                  Permanent division
                  <select
                    defaultValue={info?.permanentDivision}
                    {...register("permanentDivision", {
                      required: "Permanent division is required",
                    })}
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
                <p className="text-xs text-red-600 mt-1">
                  {errors.permanentDivision?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="presentDivision">
                  Present division
                  <select
                    defaultValue={info?.presentDivision}
                    {...register("presentDivision", {
                      required: "Present division is required",
                    })}
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
                <p className="text-xs text-red-600 mt-1">
                  {errors.presentDivision?.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
              <div className="w-full flex-1">
                <label htmlFor="expectedHight">
                  Expected hight
                  <select
                    defaultValue={info?.expectedHight}
                    {...register("expectedHight", {
                      required: "Expected hight is required",
                    })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="3.6feet - 4.0feet">3.6feet - 4.0feet</option>
                    <option value="4.1feet - 4.5feet">4.1feet - 4.5feet</option>
                    <option value="4.6feet - 5.0feet">4.6feet - 5.0feet</option>
                    <option value="5.1feet - 5.5feet">5.1feet - 5.5feet</option>
                    <option value="5.6feet - 6.0feet">5.6feet - 6.0feet</option>
                    <option value="6.1feet - 6.5feet">6.1feet - 6.5feet</option>
                    <option value="6.6feet - 7.0feet">6.6feet - 7.0feet</option>
                    <option value="7.1feet - 7.5feet">7.1feet - 7.5feet</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.expectedHight?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="expectedWeight">
                  Expected weight
                  <select
                    defaultValue={info?.expectedWeight}
                    {...register("expectedWeight", {
                      required: "Expected weight is required",
                    })}
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  >
                    <option value="31kg - 40kg">31kg - 40kg</option>
                    <option value="41kg - 50kg">41kg - 50kg</option>
                    <option value="51kg - 60kg">51kg - 60kg</option>
                    <option value="61kg - 70kg">61kg - 70kg</option>
                    <option value="71kg - 80kg">71kg - 80kg</option>
                    <option value="81kg - 90kg">81kg - 90kg</option>
                    <option value="91kg - 100kg">91kg - 100kg</option>
                    <option value="101kg - 110kg">101kg - 110kg</option>
                  </select>
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.expectedWeight?.message}
                </p>
              </div>
              <div className="w-full flex-1">
                <label htmlFor="expectedAge">
                  Expected age
                  <input
                    type="number"
                    defaultValue={info?.expectedAge}
                    {...register("expectedAge", {
                      required: "Expected age is required",
                    })}
                    placeholder="Expected age"
                    className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                  />
                </label>
                <p className="text-xs text-red-600 mt-1">
                  {errors.expectedAge?.message}
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Create / Edit
              </button>
            </div>
          </form>
        </BorderContainer>
      </Container>
    </>
  );
};

export default EditBioData;
