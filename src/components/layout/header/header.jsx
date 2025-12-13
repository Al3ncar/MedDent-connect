import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button/button";
import { TitleNav } from "../../ui/title-nav/title";
import { MenuBurger } from "../../ui/menu-burger/menu-burger";

import S from "../../../styles/components/header.module.scss";
import IBurger from "../../../assets/imgs/icons/menu-burger.png";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const handleOpenMenuBurger = () => setOpenMenu(!isOpenMenu);

  const handleCloseMenuBurger = (id, e) => {
    const { id: idTarget } = e.target;
    if (idTarget === id) setOpenMenu(false);
  };

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

      {isOpenMenu && (
        <MenuBurger onClose={(id, e) => handleCloseMenuBurger(id, e)} />
      )}
    </header>
  );
};
export default Header;
