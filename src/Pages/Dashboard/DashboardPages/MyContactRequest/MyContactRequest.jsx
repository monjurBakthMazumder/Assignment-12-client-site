import { Helmet } from "react-helmet";
import Loading from "../../../../Component/Loading/Loading";
import BorderContainer from "../../../../Component/Ui/BorderContainer";
import Container from "../../../../Component/Ui/Container";
import Heading from "../../../../Component/Ui/Heading";
import useGetUserContactRequest from "../../../../Hock/useGetUserContactRequest";
import MyContactRequestRow from "./MyContactRequestRow";

const MyContactRequest = () => {
  const { contactRequest, isPendingContactRequest, refetchContactRequest } =
    useGetUserContactRequest();
  return (
    <>
      <Helmet>
        <title>MingleHeart | My contact request</title>
      </Helmet>
      {isPendingContactRequest ? (
        <Loading />
      ) : (
        <Container>
          <BorderContainer>
            <Heading>My Contact Request {contactRequest?.length}</Heading>
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
                            Diodata id
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
                            Phone number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-sm font-semibold text-pink-600 uppercase"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-pink-200 ">
                        {contactRequest?.map((item) => (
                          <MyContactRequestRow
                            key={item._id}
                            item={item}
                            refetchContactRequest={refetchContactRequest}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </BorderContainer>
        </Container>
      )}
    </>
  );
};

export default MyContactRequest;
