import { Link } from "react-router-dom";
import S from "../../../styles/components/ui/menu-burger.module.scss";
import { TitleNav } from "../title-nav/title";
import ILogo from "../../../assets/imgs/logo/logo-med-dent.png";
import { IoClose } from "react-icons/io5";

export const MenuBurger = ({ onClose = () => {} }) => {
  return (
    <section
      id="close"
      className={S.menu_burger}
      onClick={(e) => onClose("close", e)}
    >
      <div className={S.menu_burger__content}>
        <div className={S.menu_burger__content__header}>
          <TitleNav label="Olá, Doutor(a)" color="white" />

          <button id="close" onClick={(e) => onClose("close", e)}>
            <IoClose />
          </button>
        </div>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Seja Voluntário</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
