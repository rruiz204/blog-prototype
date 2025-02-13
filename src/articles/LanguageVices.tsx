import { JSX } from "react";
import { LanguageVicesData } from "./data/ArticleData";
import { ArticleLayout } from "@components/layouts/ArticleLayout";
import { LanguageViceItem } from "@components/common/organisms/LanguageViceItem";

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
          <LanguageViceItem
            name="Dequeísmo"
            description='El dequeísmo es un vicio de lenguaje que consiste en agregar la preposición
            "de" antes de la conjunción "que" cuando no es necesario. Es decir, ocurre cuando se
            dice "de que" en situaciones en las que solo debería usarse "que".'/>

          <LanguageViceItem
            name="Anfibología"
            description='La anfibología es una ambigüedad en la construcción de una oración,
            lo que puede dar lugar a múltiples interpretaciones. Ocurre cuando una frase no es
            clara y puede entenderse de más de una manera.'/>

          <LanguageViceItem
            name="Anacolutos"
            description='El anacoluto es un vicio de lenguaje que ocurre cuando una oración
            comienza con una estructura gramatical, pero luego cambia de forma abrupta, rompiendo
            la concordancia y dejando una parte de la oración sin función clara.'/>

          <LanguageViceItem
            name="Coloquialismos y Vulgarismos"
            description='Los coloquialismos son palabras o expresiones informales que se usan en el
            habla cotidiana, pero que no son adecuadas para contextos formales. No son errores gramaticales,
            pero pueden ser demasiado informales en ciertos textos.
            Los vulgarismos Son errores lingüísticos o palabras de mal gusto, generalmente usados en contextos
            informales o con poca educación. Pueden ser fallas gramaticales o palabras ofensivas.'/>

          <LanguageViceItem
            name="Extranjerismos"
            description='Son palabras o expresiones tomadas de otro idioma que se usan en una lengua sin traducirlas o adaptarlas correctamente.'/>

          <LanguageViceItem
            name="Homonimia y Paronimia"
            description='La homonimia ocurre cuando dos palabras tienen la misma escritura (homógrafas)
            o la misma pronunciación (homófonas), pero significados diferentes. La paronimia ocurre cuando
            dos palabras tienen una escritura o pronunciación similar, pero no significan lo mismo.'/>
        </div>
      </div>
    </ArticleLayout>
  );
};