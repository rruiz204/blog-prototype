import { JSX } from "react";
import { Link } from "../atoms/Link";
import { CaterogyList } from "../organisms/CaterogyList";
import { Article as Props } from "@articles/types/Article";

export const ArticleItem = ({ name, description, categories, route }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 px-6 md:px-8 pt-8">
      <div>
        <p className="text-2xl font-inter-semi mb-2 underline">{name}</p>
        <p className="text-details-100 font-inter-light line-clamp-3">{description}</p>
      </div>

      <div className="flex justify-between">
        <CaterogyList categories={categories} />
        <Link text="Read more" route={route} />
      </div>
    </div>
  );
};