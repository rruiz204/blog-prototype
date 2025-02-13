import { JSX } from "react";
import { LanguageVicesData } from "./data/ArticleData";
import { ArticleLayout } from "@components/layouts/ArticleLayout";
import { LnaguageViceItem } from "@components/common/organisms/LanguageViceItem";

export const LanguageVices = (): JSX.Element => {
  return (
    <ArticleLayout
      title={LanguageVicesData.name}
      cover={LanguageVicesData.cover}
      posted={LanguageVicesData.posted}>

      <div className="px-10 font-inter-light text-details-100 mt-6 pb-16">
        <p>
          Los vicios de lenguaje son errores o formas incorrectas de usar el idioma que afectan la claridad,
          precisión o efectividad de la comunicación. Estos vicios pueden hacer que un mensaje sea confuso,
          impreciso o incluso incomprensible.
        </p>

        <div className="mt-6 flex flex-col gap-6">
          <LnaguageViceItem
            name="Dequeísmo"
            description='El dequeísmo es un vicio de lenguaje que consiste en agregar la preposición
            "de" antes de la conjunción "que" cuando no es necesario. Es decir, ocurre cuando se
            dice "de que" en situaciones en las que solo debería usarse "que".'/>

          <LnaguageViceItem
            name="Anfibología"
            description='La anfibología es una ambigüedad en la construcción de una oración,
            lo que puede dar lugar a múltiples interpretaciones. Ocurre cuando una frase no es
            clara y puede entenderse de más de una manera.'/>

          {/* <LnaguageViceItem
            name="Anacolutos"
            description='La anfibología es una ambigüedad en la construcción de una oración,
            lo que puede dar lugar a múltiples interpretaciones. Ocurre cuando una frase no es
            clara y puede entenderse de más de una manera.'/> */}
        </div>
      </div>
    </ArticleLayout>
  );
};