import Link from "next/link";
import React from "react";

interface AwardItemProps {
  highlightText: string;
  text: string;
  link?: string;
}

const AwardItem = (awardItemProps: AwardItemProps) => {
  return (
    <li className="flex gap-x-2">
      🏆
      <p>
        <span className="text-red-700">Best Paper Award</span>, 2023 IEEE Annual
        Computing and Communication Workshop and Conference (CCWC){" "}
        {awardItemProps.link && (
          <Link
            href="https://drive.google.com/file/d/19b9uqVvAvdnwi8eUv9zyhedf3MNtcTZz/view?usp=drive_link"
            target="blank"
          >
            [<span className="text-blue-400">Certificate</span>]
          </Link>
        )}
      </p>
    </li>
  );
};

export default AwardItem;
