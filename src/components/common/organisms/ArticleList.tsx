import FaceIcon from "@assets/icons/face-icon.svg";
import { ArticleItem } from "../molecules/ArticleItem";
import { LanguageVicesData } from "@articles/data/ArticleData";

export const ArticleList = () => {
  return (
    <div className="bg-primary flex-1 flex flex-col gap-4 max-w-2xl shadow-xl">
      <ArticleItem {...LanguageVicesData} />

      <div className="flex flex-col items-center justify-start m-8 flex-1">
        <img src={FaceIcon} width={200} height={200} />
        <p className="font-inter-semi text-details-100 mt-4">New articles coming soon</p>
      </div>
    </div>
  );
};