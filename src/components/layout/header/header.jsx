import { Link } from "react-router-dom";
import { Button } from "../../ui/button/button";

import ILogo from "../../../assets/imgs/logo/logo-med-dent.png";
import IBurger from "../../../assets/imgs/icons/menu-burger.png";
import S from "../../../styles/components/header.module.scss";
import { useState } from "react";
import { TitleNav } from "../../ui/title-nav/title";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleOpenMenuBurger = () => setOpenMenu(!isOpenMenu);

  return (
    <header>

      <TitleNav color="black" />

      <button className={S.burger_btn} onClick={() => handleOpenMenuBurger()}>
        <img
          src={IBurger}
          alt="Icone de Menu Burger(3 barras pretas com espaço entre elas), com o fundo transparente"
        />
      </button>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/seja-voluntario">
              <Button type="default" label="Seja Voluntário" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
