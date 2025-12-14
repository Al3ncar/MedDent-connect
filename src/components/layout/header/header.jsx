import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button/button";
import { TitleNav } from "../../ui/title-nav/title";

import S from "../../../styles/components/header.module.scss";
import IBurger from "../../../assets/imgs/icons/menu-burger.png";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isSelect, setSelect] = useState("Home");

  const handleOpenMenuBurger = () => setOpenMenu(!isOpenMenu);
  const handleClick = (name) => setSelect(name);

  useEffect(() => {
    const handleCloseModal = () => setOpenMenu(false);
    window.addEventListener("resize", handleCloseModal);
    return () => window.removeEventListener("resize", handleCloseModal);
  }, []);

  return (
    <header>
      <section>
        <TitleNav color="black" />

        <button
          className={isOpenMenu ? S.burger_btn__animating : S.burger_btn}
          onClick={() => handleOpenMenuBurger()}
        >
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
      </section>

      {isOpenMenu && (
        <nav className={S.menu_burger}>
          <ul>
            <li>
              <Link
                onClick={() => handleClick("Home")}
                className={isSelect === "Home" ? S.Click : ""}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("BeAVol")}
                className={isSelect === "BeAVol" ? S.Click : ""}
                to="/seja-voluntario"
              >
                Seja Voluntário
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
