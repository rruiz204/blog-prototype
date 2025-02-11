import { Category } from "@articles/types/Category";
import { CaterogyItem } from "../molecules/CaterogyItem";

interface Props {
  categories: Category[];
};

export const CaterogyList = ({ categories }: Props) => {
  return (
    <div className="">
      <div className="hidden md:block">
        {categories.map((category) => (
          <CaterogyItem key={category.name} {...category} />
        ))}
      </div>

      <div className="block md:hidden">
        <CaterogyItem key={categories[0].name} {...categories[0]} />
      </div>
    </div>
  );
};