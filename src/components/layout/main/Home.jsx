import React from "react";
import { Button } from "../../ui/button/button";
import { Health } from "./layout/home/health";
import { ContentSection } from "../../ui/content/content";
import { dataImpact, dataMission } from "../../../utils/data/cards";

const Home = () => {
  return (
    <>
      <Health />
      <ContentSection
        type="mission"
        title="Nossa Missão"
        cardType="default"
        content="Transformar vidas através do acesso universal a saúde de qualidade"
        dataContent={dataMission}
      />
      <ContentSection
        type="impact"
        title="Nosso Impacto"
        cardType="outline"
        content="Transformando a saúde de nossa comunidade, um paciente de cada vez"
        dataContent={dataImpact}
      />
    </>
  );
};

export default Home;
