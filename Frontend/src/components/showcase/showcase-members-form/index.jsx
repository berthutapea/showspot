import React, { useState } from 'react';

const ShowcaseMembersForm = () => {
  const rawData = [
    { role: 'Hustler', fullName: [] },
    { role: 'Scrum Master', fullName: [] },
    { role: 'Hipster', fullName: [] },
    { role: 'Hacker', fullName: [] },
  ];

  const [editedNames, setEditedNames] = useState(
    rawData.reduce((acc, item) => {
      acc[item.role] = [''];
      return acc;
    }, {})
  );

  const handleNameChange = (role, index, newName) => {
    setEditedNames((prevState) => {
      const newState = { ...prevState };
      newState[role][index] = newName;
      if (index === newState[role].length - 1 && newName !== '') {
        newState[role].push('');
      }
      return newState;
    });
  };

  return (
    <div className="container mx-auto my-4 text-accent">
      <table className="w-full border-collapse rounded-lg">
        <thead>
          <tr className="bg-neutral text-gray-600">
            <th className="px-4 py-3 text-center border">Role</th>
            <th className="px-4 py-3 text-center border">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {rawData.map(({ role, fullName }, rowIndex) => (
            <tr key={role} className="border-t">
              <td className="px-4 py-3 border">{role}</td>
              <td className="px-4 py-3 border">
                {editedNames[role].map((name, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        handleNameChange(role, index, e.target.value)
                      }
                      className="border border-gray-100 px-2 py-1 rounded-md mr-2 mb-4 focus:border-primary focus-visible:outline-none"
                    />
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowcaseMembersForm;

// import React, { useState } from 'react';

// const ShowcaseMembersForm = () => {
//   const [formData, setFormData] = useState({ role: 'Hustler', fullName: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <div className="flex flex-col gap-6 xl:flex-row">
//       <form className="flex flex-col gap-6 xl:flex-row">
//         <div className="mb-2 w-full xl:w-1/2">
//           <label className="block text-sm font-medium text-gray-700">
//             Role
//           </label>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//           >
//             <option value="Hustler">Hustler</option>
//             <option value="Scrum Master">Scrum Master</option>
//             <option value="Hipster">Hipster</option>
//             <option value="Hacker">Hacker</option>
//           </select>
//         </div>
//         <div className="mb-2  w-full xl:w-1/">
//           <label className="block text-sm font-medium text-gray-700">
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Add Member
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ShowcaseMembersForm;
