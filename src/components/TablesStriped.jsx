import React from 'react';

export default function TablesStriped({children}) {
  return (
    <>
      {/* Responsive Table Container */}
      <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
        {/* Striped Table */}
        <table className="min-w-full text-sm align-middle whitespace-nowrap">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                Web
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
                Profile
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Status
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Result
              </th>
              <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
                Actions
              </th>
            </tr>
          </thead>
          {/* END Table Header */}

          {/* Table Body */}
          <tbody>
            {children}
          </tbody>
          {/* END Table Body */}
        </table>
        {/* END Striped Table */}
      </div>
      {/* END Responsive Table Container */}
    </>
  )
}