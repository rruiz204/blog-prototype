import { Article } from "../types/Article";
import { LanguageCategory } from "./CategoryData";
import LanguageVicesCover from "@assets/imgs/cover.jpg";
import { RoneyAuthor, WilhemAuthor } from "./AuthorData";

export const LanguageVicesData: Article = {
  name: "Vicios del Lenguaje",
  cover: LanguageVicesCover,
  route: "/articles/language-vices",
  posted: "Feb 12, 2025",
  authors: [RoneyAuthor, WilhemAuthor],
  description: "Los vicios del lenguaje representan uno de los mayores desafíos en la comunicación efectiva de nuestros tiempos. En este artículo, abordaremos los principales vicios del lenguaje que afectan la claridad y precisión de nuestro idioma, desde los más tradicionales como el pleonasmo y la cacofonía, hasta aquellos que han surgido en la era digital. ",
  categories: [LanguageCategory],
};