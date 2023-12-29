import { researchInterest } from "@/constans";
import React from "react";

const ResearchInterests = () => {
  return (
    <ul className="text-xl my-2 list-disc list-inside">
      {researchInterest.map((interest, key) => (
        <li key={key} className="leading-10">
          {interest}
        </li>
      ))}
    </ul>
  );
};

export default ResearchInterests;
