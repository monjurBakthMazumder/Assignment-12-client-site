import Container from "../../../../Component/Ui/Container";
import UseAuth from "../../../../Hock/UseAuth";
import useGetAllData from "../../../../Hock/useGetAllData";

const AdminDashboard = () => {
  const { user } = UseAuth();
  const data = useGetAllData();
  const {
    totalBiodata,
    totalMaleBiodata,
    totalFemaleBiodata,
    totalPremiumBiodata,
    totalRevenue,
    totalUser,
  } = data;
  return (
    <Container>
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Welcome to dashboard {user?.displayName && user?.displayName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="border border-pink-500 rounded text-center p-5 md:p-10">
          <h1 className="text-xl font-bold">Total biodatas</h1>
          <h1 className="text-6xl font-bold text-pink-500">{totalBiodata}</h1>
        </div>
        <div className="border border-pink-500 rounded text-center p-5 md:p-10">
          <h1 className="text-xl font-bold">Total male biodatas</h1>
          <h1 className="text-6xl font-bold text-pink-500">
            {" "}
            {totalMaleBiodata}
          </h1>
        </div>
        <div className="border border-pink-500 rounded text-center p-5 md:p-10">
          <h1 className="text-xl font-bold">Total female biodatas</h1>
          <h1 className="text-6xl font-bold text-pink-500">
            {" "}
            {totalFemaleBiodata}
          </h1>
        </div>
        <div className="border border-pink-500 rounded text-center p-5 md:p-10">
          <h1 className="text-xl font-bold">Total premium biodatas</h1>
          <h1 className="text-6xl font-bold text-pink-500">
            {totalPremiumBiodata}
          </h1>
        </div>
        <div className="border border-pink-500 rounded text-center p-5 md:p-10">
          <h1 className="text-xl font-bold">Total revenue</h1>
          <h1 className="text-6xl font-bold text-pink-500">
            {totalRevenue}
            <span className="text-5xl">&#2547;</span>
          </h1>
        </div>
        <div className="border border-pink-500 rounded text-center p-5 md:p-10">
          <h1 className="text-xl font-bold">Total User</h1>
          <h1 className="text-6xl font-bold text-pink-500">{totalUser}</h1>
        </div>
      </div>
    </Container>
  );
};

export default AdminDashboard;
