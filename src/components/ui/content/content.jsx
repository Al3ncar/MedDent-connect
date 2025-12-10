import { Card } from "../../ui/card/card";
import S from "../../../styles/components/ui/content.module.scss";

export const ContentSection = ({
  type,
  title,
  content,
  dataContent,
  cardType,
}) => {
  return (
    <section className={S[`content__${type}`]}>
      <div className={`${S.title}`}>
        <h2>{title}</h2>
        <p> {content}</p>
      </div>
      <div className={`${S.cards}`}>
        {dataContent.map((card, index) => (
          <Card
            key={index}
            type={cardType}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};
