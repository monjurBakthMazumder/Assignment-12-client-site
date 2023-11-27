import { useForm } from "react-hook-form";
import UseAuth from "../../../../Hock/UseAuth";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import Container from "../../../../Component/Ui/Container";
import BorderContainer from "../../../../Component/Ui/BorderContainer";
import Heading from "../../../../Component/Ui/Heading";
import Swal from "sweetalert2";

const GotMarried = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      yourName: "",
      yourPartnerName: "",
      coupleImg: "",
      yourBiodataId: "",
      yourPartnerBiodataId: "",
      successStory: "",
    },
  });
  const onSubmit = async (data) => {
    const selfName = data?.yourName;
    const partnerName = data?.yourPartnerName;
    const coupleImg = data?.coupleImg;
    const selfBioId = data?.yourBiodataId;
    const partnerBioId = data?.yourPartnerBiodataId;
    const successStory = data?.successStory;
    const marriageDate = data?.marriageDate;
    const selfEmail = user?.email;
    const successInfo = {
      selfName,
      partnerName,
      coupleImg,
      selfBioId,
      partnerBioId,
      successStory,
      marriageDate,
      selfEmail,
    };
    console.log(successInfo);
    await axiosSecure.post("/success-story", successInfo).then((res) => {
      console.log("fetch", res);
      if (res.status === 200) {
        Swal.fire({
          title: "Success story added",
          text: "Your success story added successfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <Container>
      <BorderContainer>
        <Heading>Add success story</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="yourName">
                Your name
                <input
                  {...register("yourName", {
                    required: "Your name is required",
                  })}
                  placeholder="Your name"
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.yourName?.message}
              </p>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="yourPartnerName">
                Your partner name
                <input
                  {...register("yourPartnerName", {
                    required: "Your partner name is required",
                  })}
                  placeholder="Your partner name"
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.yourPartnerName?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="coupleImg">
                Couple image
                <input
                  // type="file"
                  {...register("coupleImg", {
                    required: "Couple image is required",
                  })}
                  placeholder="Couple image"
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.coupleImg?.message}
              </p>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="marriageDate">
                Marriage date
                <input
                  type="date"
                  {...register("marriageDate", {
                    required: "Marriage date is required",
                  })}
                  placeholder="Marriage date"
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.marriageDate?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="yourBiodataId">
                Your biodata id
                <input
                  type="number"
                  {...register("yourBiodataId", {
                    required: "Your biodata id is required",
                  })}
                  placeholder="Your biodata id"
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.yourBiodataId?.message}
              </p>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="yourPartnerBiodataId">
                Your partner biodata id
                <input
                  type="number"
                  {...register("yourPartnerBiodataId", {
                    required: "Your partner biodata id is required",
                  })}
                  placeholder="Your partner biodata id"
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.yourPartnerBiodataId?.message}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <div className="w-full">
              <label htmlFor="successStory">
                Success story
                <textarea
                  {...register("successStory", {
                    required: "Success story is required",
                  })}
                  className="py-3 px-4 block w-full border border-pink-200 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2 resize-none h-40"
                  rows="3"
                  placeholder="Success story"
                ></textarea>
              </label>
              <p className="text-xs text-red-600 mt-1">
                {errors.successStory?.message}
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Add
            </button>
          </div>
        </form>
      </BorderContainer>
    </Container>
  );
};

export default GotMarried;
