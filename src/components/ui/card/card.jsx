import S from "../../../styles/components/ui/card.module.scss";

export const Card = ({ key, type, title, description }) => {
  console.log(S[type]);
  return (
    <article key={key} className={S[type]}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
