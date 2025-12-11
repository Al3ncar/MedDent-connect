import { Link } from "react-router-dom";
import ILogo from "../../../assets/imgs/logo/logo-med-dent.png";
import S from "../../../styles/components/ui/title-header.module.scss";

export const TitleNav = ({ color }) => {
  return (
    <Link to="/">
      <div className={S.title_page}>
        <img
          src={ILogo}
          alt="Logo de um coração branco, com um fundo verde quadrado"
        />
        <h2 style={{ color: color }}>Médicos & Dentista</h2>
      </div>
    </Link>
  );
};
