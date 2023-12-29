import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl font-normal text-gray-700 px-4 md:text-2xl">
      <p className="mb-4">Greeting!</p>
      <p className="text-justify">
        I am currently employed as a junior software engineer at
        <Link
          href="https://pioneeralpha.com/"
          target="blank"
          className="font-medium text-blue-400"
        >
          {" "}
          Pioneer Alpha Ltd.{" "}
        </Link>
        I obtained my bachelor's degree in computer science and engineering from
        the{" "}
        <Link
          href="https://aust.edu/"
          target="blank"
          className="text-blue-400 font-medium"
        >
          Ahsanullah University of Science and Technology
        </Link>
        . I am keen to pursue a career as a professional programmer and
        researcher.
      </p>
      <p className="mt-6 text-justify">
        My research interests are human-computer interaction and artificial
        intelligence, which cover areas like robotics, computer vision (CV), and
        natural language processing (NLP). Previously, I researched those
        topics. I applied natural language processing techniques along with a
        large language model (LLM) for developing consumer applications.{" "}
        <span className="text-red-400 font-medium">
          I am always happy to collaborate with other researchers.
        </span>
      </p>
      <p className="mt-6 text-justify">
        In my research journey, I have collaborated with other researchers. My
        notable collaborations include{" "}
        <Link
          href="https://scholar.google.com/citations?user=7chm1qwAAAAJ&hl=en"
          target="blank"
          className="font-medium text-orange-400"
        >
          {" "}
          Khan Md. Hasib Sir{" "}
        </Link>
        (BUBT) accepting two papers at two foreign conferences,{" "}
        <Link
          href="https://www.tencon2022.org/"
          target="blank"
          className="font-medium text-blue-400"
        >
          TENCON 2022
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.dictaconference.org/"
          target="blank"
          className="font-medium text-blue-400"
        >
          DICTA 2023.{" "}
        </Link>
        I also had the privilege of working with{" "}
        <Link
          href="https://scholar.google.com/citations?user=GBaSF7MAAAAJ&hl=en"
          target="blank"
          className="font-medium text-orange-400"
        >
          G. M. Shahariar Shibli Sir{" "}
        </Link>
        (AUST) on a research paper evaluating the explainability of the CNN
        model in classifying traffic and road signs which is accepted in{" "}
        <Link
          href="https://confbim.com/"
          target="blank"
          className="font-medium text-blue-400"
        >
          BIM 2023.{" "}
        </Link>
      </p>
    </div>
  );
}
