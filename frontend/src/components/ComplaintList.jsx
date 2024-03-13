import React from 'react'

const ComplaintList = () => {
  return (
    <div>
        <div className="grid md:grid-cols-4 gap-3 my-3 ">
        <Card className="col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Complaint List
            </h3>
          </div>
          <table role="list" className="w-full divide-y divide-gray-200">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="max-w-6 md:px-6 md:flex hidden px-2 py-3"
                >
                  User
                </th>
                <th scope="col" className="md:px-6 px-2 py-3">
                  Complaint
                </th>
                <th
                  scope="col"
                  className="text-start md:block hidden px-6 py-3"
                >
                  Count
                </th>
                <th
                  scope="col"
                  className="md:text-start text-end md:px-6 px-2 py-3"
                >
                  Location
                </th>
              </tr>
            </thead>
            {complaintlist.map((values, i) => {
              return (
                <tr key={i} className="w-full bg-white border-b">
                  <td
                    scope="row"
                    className="max-w-4 md:px-6 px-2 py-4 md:flex hidden font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={values.pic}
                        alt={values.user}
                      />
                    </div>
                  </td>
                  <th className="md:px-6 px-0 py-4">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {values.complaint}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {values.user}
                      </p>
                    </div>
                  </th>
                  <td className="w-10 text-start md:block hidden px-6 py-4">
                    <div className="md:inline-flex items-center text-base font-semibold text-gray-900">
                      {values.count}
                    </div>
                  </td>
                  <td className="w-10 md:px-6 px-0 py-4 md:text-start text-end">
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      {values.loc}
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </Card>
        <Card className="relative">
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Sorting Categories
          </h3>

          <form className="max-w-sm mx-auto">
            <label
              for="countries"
              className="block mt-3 mb-1 text-sm font-medium text-gray-900"
            >
              Select a Location
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Choose a Location</option>
              <option value="US">C</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <label
              for="countries"
              className="block mt-3 mb-1 text-sm font-medium text-gray-900"
            >
              Select a Complaint Category
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Choose a Category</option>
              <option value="US">C</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <button
              type="button"
              className="flex my-3 gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <Sliders size={20}/>
              Sort by Count
            </button>
          </form>

          <div className="absolute bottom-5 right-5 rounded-full p-3 bg-gray-200">
            <Filter />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ComplaintList