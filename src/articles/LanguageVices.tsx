import { JSX, useEffect } from "react";
import { LanguageVicesData } from "./data/ArticleData";
import { ArticleLayout } from "@components/layouts/ArticleLayout";
import { LanguageViceItem } from "@components/common/organisms/LanguageViceItem";

import HomonimiaImg from "@assets/imgs/homonimia.png";
import DequeismoImg from "@assets/imgs/dequeismos.png";
import AnacolutosImg from "@assets/imgs/anacolutos.png";
import VulgarismosImg from "@assets/imgs/vulgarismos.png";
import AnfibologiaImg from "@assets/imgs/anfibologia.png";
import ExtranjerismoImg from "@assets/imgs/extranjerismos.png";

export const LanguageVices = (): JSX.Element => {
  useEffect(() => window.scrollTo(0, 0), []);

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

        <div className="mt-6 flex flex-col gap-8">
          <LanguageViceItem
            name="Dequeísmo" example={DequeismoImg}
            description='El dequeísmo es un vicio de lenguaje que consiste en agregar la preposición
            "de" antes de la conjunción "que" cuando no es necesario. Es decir, ocurre cuando se
            dice "de que" en situaciones en las que solo debería usarse "que".'/>

          <LanguageViceItem
            name="Anfibología" example={AnfibologiaImg}
            description='La anfibología es una ambigüedad en la construcción de una oración,
            lo que puede dar lugar a múltiples interpretaciones. Ocurre cuando una frase no es
            clara y puede entenderse de más de una manera.'/>

          <LanguageViceItem
            name="Anacolutos" example={AnacolutosImg}
            description='El anacoluto es un vicio de lenguaje que ocurre cuando una oración
            comienza con una estructura gramatical, pero luego cambia de forma abrupta, rompiendo
            la concordancia y dejando una parte de la oración sin función clara.'/>

          <LanguageViceItem
            name="Coloquialismos y Vulgarismos" example={VulgarismosImg}
            description='Los coloquialismos son palabras o expresiones informales que se usan en el
            habla cotidiana, pero que no son adecuadas para contextos formales. No son errores gramaticales,
            pero pueden ser demasiado informales en ciertos textos.
            Los vulgarismos Son errores lingüísticos o palabras de mal gusto, generalmente usados en contextos
            informales o con poca educación. Pueden ser fallas gramaticales o palabras ofensivas.'/>

          <LanguageViceItem
            name="Extranjerismos" example={ExtranjerismoImg}
            description='Son palabras o expresiones tomadas de otro idioma que se usan en una lengua sin traducirlas o adaptarlas correctamente.' />

          <LanguageViceItem
            name="Homonimia y Paronimia" example={HomonimiaImg}
            description='La homonimia ocurre cuando dos palabras tienen la misma escritura (homógrafas)
            o la misma pronunciación (homófonas), pero significados diferentes. La paronimia ocurre cuando
            dos palabras tienen una escritura o pronunciación similar, pero no significan lo mismo.'/>

          <LanguageViceItem
            name="Cocofonía"
            description='La cacofonía es un vicio de lenguaje que ocurre cuando en una oración se repiten
            sonidos o sílabas de forma desagradable o poco armoniosa, haciendo que la frase suene mal o confusa.'/>

          <LanguageViceItem
            name="Barbarismos"
            description='El barbarismo es un error en el uso del idioma que ocurre cuando se pronuncia,
            escribe o usa mal una palabra. Puede deberse a faltas ortográficas, errores en la pronunciación
            o el uso incorrecto de extranjerismos.'/>

          <LanguageViceItem
            name="Metaplasmos"
            description='Un metaplasmo es una alteración en la forma de una palabra debido a cambios en su
            escritura, pronunciación o estructura. Puede ocurrir por razones estilísticas, por evolución del
            idioma o por errores.'/>

          <LanguageViceItem
            name="Muletillas"
            description='Las muletillas son palabras o expresiones que se usan de manera repetitiva, muchas
            veces sin un propósito concreto, y que no aportan un valor real a la comunicación. Se utilizan
            como pausas o para dar tiempo mientras se piensa qué decir a continuación. A menudo se emplean de
            forma automática, sin que la persona sea consciente de ello.'/>

          <LanguageViceItem
            name="Neologismos"
            description='Un neologismo es una palabra, expresión o giro lingüístico nuevo que se introduce
            en un idioma. Estos surgen por la necesidad de nombrar cosas, conceptos o fenómenos que antes
            no existían o que no tenían una palabra específica. Los neologismos son una parte natural de
            la evolución del lenguaje.'/>

          <LanguageViceItem
            name="Pleonasmo o Redundancia"
            description='El pleonasmo o redundancia es un vicio de lenguaje que consiste en usar palabras
            innecesarias que repiten o explican de manera innecesaria un concepto que ya está implícito
            en la frase. Aunque en algunos casos puede usarse de forma estilística, en general es
            considerado un error porque añade palabras que no aportan nuevo significado.'/>
        </div>
      </div>
    </ArticleLayout>
  );
};