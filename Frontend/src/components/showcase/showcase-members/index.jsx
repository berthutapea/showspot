import React from 'react';

const ShowcaseMembers = () => {
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

  const groupedData = rawData.reduce((acc, item) => {
    if (!acc[item.role]) {
      acc[item.role] = [];
    }
    acc[item.role].push(item.fullName);
    return acc;
  }, {});

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
          {Object.entries(groupedData).map(([role, fullNames], index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-3 border">{role}</td>
              <td className="px-4 py-3 border">{fullNames.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowcaseMembers;
