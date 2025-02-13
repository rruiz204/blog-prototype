import { JSX } from "react";
import CodingImg from "@assets/imgs/hand-coding.png";
import { AuthorList } from "@components/common/organisms/AuthorList";
import { ArticleList } from "@components/common/organisms/ArticleList";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 flex flex-col items-center gap-6 min-h-screen pt-28">
        <div className="text-center h-fit px-2">
          <h1 className="text-4xl md:text-7xl font-inter-bold mb-2.5">Welcome to Nexuz!</h1>

          <p className="text-lg text-details-100 font-inter-light">
            Explore the world of technology and development.
            Discover trends, learn new tools and take your skills to the next level.
          </p>
        </div>

        <div className="">
          <img src={CodingImg} className="w-[400px] h-[400px]" />
        </div>
      </div>

      <div className="flex min-h-screen bg-ternary-200">
        <div className="flex-1 flex flex-col md:flex-row justify-center gap-10 md:gap-14 py-10 md:py-20 px-8">
          <ArticleList />
          <AuthorList />
        </div>
      </div>

      <div className="bg-black text-white py-24">
        <p className="font-inter-semi text-center text-5xl">Thanks for visiting</p>
      </div>
    </div>
  );
};