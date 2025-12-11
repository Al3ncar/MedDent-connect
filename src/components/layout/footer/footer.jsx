import S from "../../../styles/components/footer.module.scss";
import { TitleNav } from "../../ui/title-nav/title";
import {
  footerContact,
  footerSocialMedia,
} from "../../../utils/data/footer-nav";

const Footer = () => {
  return (
    <footer>
      <section className={S.nav_footer}>
        <div className={S.nav_footer__title} >
          <TitleNav color="white" />
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>
        <div className={S.nav_footer__contact}>
          <h3>Contato</h3>
          <ul>
            {footerContact.map((item, index) => (
              <li key={index}>
                <img src={item.img} alt="" />
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={S.nav_footer__social}>
          <h3>Redes Sociais</h3>
          <ul>
            {footerSocialMedia.map((item, index) => (
              <li key={index}>
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={S.nav_copyright}>
        <p>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
