import React from "react";
import classnames from "classnames";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs";
import path from "path";

import Code from "../components/Code";

interface SlideProps {
  children: React.ReactNode;
}

interface MDX {
  source: MDXRemoteSerializeResult;
}

interface Props {
  notes: MDX[];
  slides: MDX[];
}

const Slide = ({ children }: SlideProps) => {
  const classes = classnames(
    "absolute",
    "bg-white",
    "flex",
    "items-center",
    "px-24",
    "w-full",
    "h-full"
  );
  return <div className={classes}>{children}</div>;
};

const components = {
  code: Code,
};

export default function Index({ notes, slides }: Props) {
  const totalSlides = slides.length;
  const [activeSlide, setActiveSlide] = React.useState(0);

  const advanceSlide = () => {
    if (activeSlide == totalSlides - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const unadvanceSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(totalSlides - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-9">
        <Slide>
          <div className="prose prose-2xl overflow-hidden">
            <MDXRemote
              components={components}
              {...slides[activeSlide].source}
            />
          </div>
        </Slide>
      </div>
      <div className="col-span-3 bg-gray-100 isolate overflow-auto">
        <div className="flex flex-col">
          <div className="flex justify-between p-3 sticky top-0 z-10 bg-gray-100 shadow-2xl">
            <button
              className="bg-indigo-700 text-white px-4 py-1 rounded-md"
              onClick={advanceSlide}
            >
              Advance
            </button>
            <div className="text-gray-500 justify-self-center self-center">
              {activeSlide + 1}
            </div>
            <button
              className="bg-red-700 text-white px-4 py-1 rounded-md"
              onClick={unadvanceSlide}
            >
              Unadvance
            </button>
          </div>
          <div className="prose prose-2xl px-3">
            <MDXRemote components={components} {...notes[activeSlide].source} />
          </div>
        </div>
      </div>
    </div>
  );
}

async function getFilesAsMDX(contentDirectory: string) {
  const filetype = [".mdx"];
  const filesPath = path.join(process.cwd(), contentDirectory);
  const allFiles = fs
    .readdirSync(filesPath)
    .filter((file) => filetype.includes(path.extname(file)));
  const content = await Promise.all(
    allFiles.map(async (fileName) => {
      const filePath = path.join(filesPath, fileName);
      const file = fs.readFileSync(filePath, { encoding: "utf-8" });
      const source = await serialize(file);

      return {
        source,
      };
    })
  );

  return content;
}

export async function getStaticProps() {
  const slides = await getFilesAsMDX("slides");
  const notes = await getFilesAsMDX("notes");

  return {
    props: {
      notes,
      slides,
    },
  };
}
