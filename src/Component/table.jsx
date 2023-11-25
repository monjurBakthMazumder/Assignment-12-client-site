import React from 'react';
import Container from './Ui/Container';

const table = () => {
    return (
        <Container>
        <div className="max-w-6xl mx-auto border-2 rounded border-pink-400 px-5 sm:px-10 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Menage user
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
                          Make Admin
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                        >
                          Make Premium
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-pink-200 ">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          John Brown
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          45
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          New York No. 1 Lake Park
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none "
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
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

export default table;