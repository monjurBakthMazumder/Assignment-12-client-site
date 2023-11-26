import Container from "../../../../Component/Ui/Container";
import useGetContactRequest from "../../../../Hock/useGetContactRequest";
import ApprovedContactRequestRow from "./ApprovedContactRequestRow";

const ApprovedContactRequest = () => {
    const allContactRequest = useGetContactRequest()
    return (
        <Container>
          <div className="max-w-6xl mx-auto border-2 rounded border-pink-400 px-5 sm:px-10 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Contact request {allContactRequest?.length}
            </h1>
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
                            className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                          >
                            Biodata id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-sm font-semibold text-pink-600 uppercase"
                          >
                            Approved contact request
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-pink-200 ">
                        {allContactRequest?.map((item) => (
                          <ApprovedContactRequestRow key={item._id} item={item} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
    );
};

export default ApprovedContactRequest;