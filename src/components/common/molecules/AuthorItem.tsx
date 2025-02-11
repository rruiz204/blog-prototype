import ProfileIcon from "@assets/icons/profile-icon.svg";
import { Author as Props } from "@articles/types/Author";

export const AuthorItem = ({ name, profile, contact }: Props) => {
  return (
    <div className="rounded-lg bg-ternary-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={profile} height={40} width={40} className="rounded-full" />
        <p className="font-inter-semi text-details-100">{name}</p>
      </div>

      <div className="hidden md:block">
        <a href={contact} target="_blank">
          <img src={ProfileIcon} height={30} width={30} />
        </a>
      </div>
    </div>
  );
};