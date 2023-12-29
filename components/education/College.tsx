import Link from "next/link";
import React from "react";

const College = () => {
  return (
    <div className="mt-4">
      <Link
        href="https://www.facebook.com/TolaramUniversity/"
        target="blank"
        className="font-semibold text-blue-400 text-2xl"
      >
        Govt. Tolaram College
      </Link>
      <p>Higher Secondary Certificate (HSC)</p>
      <p>Duration: 2018 - 2029</p>
      <p>
        CGPA: <span className="font-semibold">4.74/5.00</span> [Certificate]
      </p>
    </div>
  );
};

export default College;
