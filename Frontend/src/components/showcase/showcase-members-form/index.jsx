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