import { AuthorItem } from "../molecules/AuthorItem";
import { RoneyAuthor } from "@articles/data/AuthorData";
import { WilhemAuthor } from "@articles/data/AuthorData";

const authors = [RoneyAuthor, WilhemAuthor];

export const AuthorList = () => {
  return (
    <div className="bg-primary p-8 flex-1 max-w-lg shadow-xl">
      <p className="text-2xl font-inter-semi underline">Active Authors</p>

      <div className="flex flex-col gap-3 mt-6">
        {authors.map((author) => (
          <AuthorItem key={author.name} {...author} />
        ))}
      </div>
    </div>
  );
};