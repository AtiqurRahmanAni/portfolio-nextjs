import Link from "next/link";
import React from "react";
import { acceptedPapers } from "@/constans";

function AcceptedPapers() {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-semibold text-gray-600">Accepted</h2>
      <ul className="my-2">
        {acceptedPapers.map((item, key) => (
          <li key={key} className="leading-9">
            <span className="text-red-800">{"📢" + item.name} </span>
            <Link
              href={item.link}
              target="blank"
              className="text-blue-400 font-medium"
            >
              {item.linkText}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AcceptedPapers;
