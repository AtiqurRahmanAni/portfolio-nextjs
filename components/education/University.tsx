import Link from "next/link";
import React from "react";

const University = () => {
  return (
    <div className="mt-4">
      <Link
        href="https://aust.edu/"
        target="blank"
        className="font-semibold text-blue-400 text-2xl"
      >
        Ahsanullah University of Science and Technology
      </Link>
      <p>Bachelor of Science (B.Sc.) in Computer Science and Engineering</p>
      <p>Duration: 2019 - 2023</p>
      <p>
        CGPA: <span className="font-semibold">3.841/4.00</span> scale (Ranked
        <span className="font-semibold"> 4th</span>) [Transcript]
      </p>
      <Link
        href="https://aust.edu/cse/faculty_member/ms_tahsin_aziz"
        target="blank"
      >
        Supervisor: <span className="text-red-700">Ms. Tahsin Aziz</span>
      </Link>
    </div>
  );
};

export default University;
