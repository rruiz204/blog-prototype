import { Author } from "./Author";
import { Category } from "./Category";

export interface Article {
  name: string
  cover: string;
  route: string;
  posted: string;
  authors: Author[];
  description: string;
  categories: Category[];
};