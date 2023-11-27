import BorderContainer from "../../../../Component/Ui/BorderContainer";
import Container from "../../../../Component/Ui/Container";
import Heading from "../../../../Component/Ui/Heading";
import useGetAllPremiumRequest from "../../../../Hock/useGetAllPremiumRequest";
import ApprovedPremiumRow from "./ApprovedPremiumRow";

const ApprovedPremium = () => {
    const allPremiumRequests = useGetAllPremiumRequest()
    return (
        <Container>
          <BorderContainer>
            <Heading>
              Premium request {allPremiumRequests?.length}
            </Heading>
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
                            Make Premium
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-pink-200 ">
                        {allPremiumRequests?.map((item) => (
                          <ApprovedPremiumRow key={item._id} item={item} />
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

export default ApprovedPremium;