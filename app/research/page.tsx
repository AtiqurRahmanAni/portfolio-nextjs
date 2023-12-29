import React from "react";
import ResearchInterests from "@/components/research/ResearchInterests";
import Link from "next/link";
import AcceptedPapers from "@/components/research/AcceptedPapers";

const page = () => {
  return (
    <div className="text-xl font-normal px-4 text-gray-700">
      <h1 className="text-4xl font-semibold text-gray-600">Research</h1>
      <div className="mt-4">
        <p>
          I am passionate about exploring the applications of{" "}
          <span className="text-gray-700 font-semibold">
            Artificial Intelligence
          </span>{" "}
          and <span className="text-gray-700 font-semibold">Robotics in</span>:
        </p>
        <ResearchInterests />
      </div>
      <AcceptedPapers />
      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-gray-600">Under Review</h2>
        <ul className="my-2">
          <li className="leading-8">
            <span className="text-red-800">
              📢 GliomaCNN: An Effective Lightweight CNN Model in Assessment of
              Classifying Brain Tumor from Magnetic Resonance Images Using
              Explainable AI{" "}
            </span>
            <Link
              href="https://www.sciencedirect.com/journal/heliyon"
              target="blank"
              className="text-blue-400 font-medium"
            >
              [Heliyon]
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
