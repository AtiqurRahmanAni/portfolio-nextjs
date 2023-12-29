import AwardItem from "@/components/education/AwardItem";
import College from "@/components/education/College";
import HighSchool from "@/components/education/HighSchool";
import University from "@/components/education/University";
import React from "react";
import { awards } from "@/constans";

const page = () => {
  return (
    <div className="text-xl font-normal px-4 md:text-2xl text-gray-700">
      <h1 className="text-4xl font-semibold text-gray-600">Education</h1>
      <University />
      <College />
      <HighSchool />
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-600">Awards</h2>
        <ul className="text-xl mt-2">
          {awards.map((award, key) => (
            <AwardItem
              key={key}
              highlightText={award.highlight}
              text={award.text}
              link={award.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
