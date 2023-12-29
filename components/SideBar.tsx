import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa6";
import { FaOrcid } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sm:min-w-[210px]">
      <Image
        src="/mypic.jpg"
        width={200}
        height={200}
        alt="my pic"
        style={{ width: "200px", height: "auto" }}
        className="rounded-full mx-auto"
      />
      <div className="mt-3">
        <div>
          <h2 className="text-center font-semibold text-2xl text-gray-600">
            Atiqur Rahman
          </h2>
          <p className="text-gray-500 text-lg text-wrap text-center">
            Junior Software Engineer at{" "}
            <Link
              href="https://pioneeralpha.com/"
              target="blank"
              className="text-gray-600 font-medium"
            >
              Pioneer Alpha Ltd.
            </Link>
          </p>
        </div>
        <div className="mt-3">
          <ul className="text-gray-600 text-lg [&>*]:my-2">
            <li className="flex items-center gap-x-4 ">
              <IoLocation size={25} />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-x-4">
              <MdEmail size={25} />
              <Link href="mailto:ani.atikur99@gmail.com">Email</Link>
            </li>
            <li className="flex items-center gap-x-4">
              <FaGraduationCap size={25} />
              <Link
                href="https://scholar.google.com/citations?user=Z6zb-DMAAAAJ&hl=en"
                target="blank"
              >
                Google Scholars
              </Link>
            </li>
            <li className="flex items-center gap-x-4">
              <FaResearchgate size={22} />
              <Link
                href="https://www.researchgate.net/profile/Md-Atiqur-Rahman-14"
                target="blank"
              >
                Research Gate
              </Link>
            </li>
            <li className="flex items-center gap-x-4">
              <FaOrcid size={22} />
              <Link href="https://orcid.org/0009-0006-4054-3183" target="blank">
                Orchid
              </Link>
            </li>
            <li className="flex items-center gap-x-4">
              <CiLinkedin size={22} />
              <Link
                href="https://www.linkedin.com/in/atiqur-rahman-06b0a41bb/"
                target="blank"
              >
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center gap-x-4">
              <FaGithub size={22} />
              <Link href="https://github.com/AtiqurRahmanAni" target="blank">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
