import React, { useState } from 'react';

const ShowcaseMembersEdit = () => {
  const rawData = [
    { role: 'Hustler', fullName: 'Lintang Luthfiantoni' },
    { role: 'Scrum Master', fullName: 'Asfia Apriani' },
    { role: 'Scrum Master', fullName: 'Mutia Nandika' },
    { role: 'Hipster', fullName: 'Adelia Sofia Anjani' },
    { role: 'Hipster', fullName: 'Aditya Mufid Musyaffa' },
    { role: 'Hipster', fullName: 'Lustiara Mega Puspita Arlana' },
    { role: 'Hipster', fullName: 'Ali Askari' },
    { role: 'Hipster', fullName: 'Vika Dwi Nur Romadhoni' },
    { role: 'Hacker', fullName: 'Asfia Apriani' },
    { role: 'Hacker', fullName: 'Mutia Nandika' },
    { role: 'Hacker', fullName: 'Sapitri' },
    { role: 'Hacker', fullName: 'Khaeril Maswal Zaid' },
  ];

  // Inisialisasi state editedNames sebagai objek
  const [editedNames, setEditedNames] = useState(
    rawData.reduce((acc, item) => {
      if (!acc[item.role]) {
        acc[item.role] = [];
      }
      acc[item.role].push({ ...item }); // Salin data dari rawData
      return acc;
    }, {})
  );

  const handleNameChange = (role, index, newName) => {
    // Salin data sebelumnya untuk role tertentu
    const newEditedNames = { ...editedNames };
    // Perbarui nama sesuai indeks
    newEditedNames[role][index].fullName = newName;
    // Set state baru
    setEditedNames(newEditedNames);
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
          {Object.entries(editedNames).map(([role, items], index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-3 border">{role}</td>
              <td className="px-4 py-3 border">
                {items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <input
                      type="text"
                      value={item.fullName}
                      onChange={(e) =>
                        handleNameChange(role, itemIndex, e.target.value)
                      }
                      className="border border-gray-400 px-2 py-1 rounded-md mr-2 bg-gray mb-4 focus:border-primary focus-visible:outline-none"
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

export default ShowcaseMembersEdit;
