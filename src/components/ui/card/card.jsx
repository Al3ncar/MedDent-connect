import S from "../../../styles/components/ui/card.module.scss";

export const Card = ({ keyCard, type, title, description }) => {
  return (
    <article key={keyCard} className={S[type]}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
