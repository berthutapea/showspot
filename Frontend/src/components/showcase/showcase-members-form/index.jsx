import React, { useState, useEffect } from 'react';

const ShowcaseMembersForm = () => {
  const initialRawData = [
    { role: 'Hustler', student_name: [] },
    { role: 'Scrum Master', student_name: [] },
    { role: 'Hipster', student_name: [] },
    { role: 'Hacker', student_name: [] },
  ];

  const [rawData, setRawData] = useState(initialRawData);

  const [editedNames, setEditedNames] = useState(
    initialRawData.reduce((acc, item) => {
      acc[item.role] = [''];
      return acc;
    }, {})
  );

  useEffect(() => {
    const updatedRawData = initialRawData.map((item) => ({
      ...item,
      student_name: editedNames[item.role].filter((name) => name !== ''),
    }));
    setRawData(updatedRawData);
  }, [editedNames]);

  console.log(rawData);
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
          {rawData.map(({ role, student_name }, rowIndex) => (
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
