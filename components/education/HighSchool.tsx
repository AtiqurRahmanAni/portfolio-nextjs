import Link from "next/link";
import React from "react";

const HighSchool = () => {
  return (
    <div className="mt-4">
      <Link
        href="https://www.facebook.com/TolaramUniversity/"
        target="blank"
        className="font-semibold text-blue-400 text-2xl"
      >
        Bangladesh Tea Research Institute High School
      </Link>
      <p>Secondary School Certificate (SSC)</p>
      <p>Duration: 2013 - 2017</p>
      <p>
        CGPA: <span className="font-semibold">5.00/5.00</span> [Certificate]
      </p>
    </div>
  );
};

export default HighSchool;
