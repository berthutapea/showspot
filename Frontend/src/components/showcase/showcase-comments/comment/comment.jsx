import React from 'react';
import Owner from '../../../owner';
// import Parser from 'html-react-parser';

export default function Comment() {
  return (
    <div className="mt-2 rounded-lg border border-primary">
        <div className="p-4">
          <Owner />
          <div className="text-accent mt-5">
            Halo Guys,
            <br />
            Apa Kabar Semuanya!
          </div>
        </div>
    </div>
  );
}
