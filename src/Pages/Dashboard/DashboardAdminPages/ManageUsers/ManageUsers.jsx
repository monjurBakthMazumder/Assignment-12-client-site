import { useEffect, useState } from "react";
import Container from "../../../../Component/Ui/Container";
// import useGetAllUser from "../../../../Hock/useGetAllUser";
import ManageUserRow from "./ManageUserRow";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import BorderContainer from "../../../../Component/Ui/BorderContainer";

const ManageUsers = () => {
  // const allUsers = useGetAllUser();

  const [allUsers, setAllUsers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/users`).then((res) => {
      setAllUsers(res.data);
    });
  }, [axiosSecure]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    axiosSecure.get(`/users?name=${name}`).then((res) => {
      setAllUsers(res.data);
    });
  };
  return (
    <Container>
      <BorderContainer>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Total user {allUsers?.length}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-center items-center mb-5">
            <input
              name="search"
              placeholder="Search by name..."
              className="py-3 px-4 block max-w-sm border border-pink-300 rounded-md rounded-r-none text-sm focus:border-pink-500 focus:ring-pink-500 outline-none"
            />
            <button
              type="submit"
              className="py-3 px-2 rounded-md rounded-l-none font-semibold bg-pink-500 text-white hover:bg-pink-600"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-pink-200 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-sm font-semibold text-pink-600 uppercase"
                      >
                        Make Admin
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-sm font-semibold text-pink-600 uppercase"
                      >
                        Make Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pink-200 ">
                    {allUsers?.map((item) => (
                      <ManageUserRow key={item._id} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </BorderContainer>
    </Container>
  );
};

export default ManageUsers;
