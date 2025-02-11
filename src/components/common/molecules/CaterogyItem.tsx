import { Category as Props } from "@articles/types/Category";

export const CaterogyItem = ({ name, icon }: Props) => {
  return (
    <div className="flex items-center gap-1 bg-ternary-200 w-fit px-2 py-1 rounded-lg">
      <img src={icon} height={20} width={20} />
      <p className="font-inter-semi text-details-100">{name}</p>
    </div>
  );
};