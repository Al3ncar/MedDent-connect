import S from "../../../../styles/components/layout/health.module.scss";

import Doctor from "../../../../assets/imgs/volunter/doctor.png";
import IconEst from "../../../../assets/imgs/icons/icon-med.png";

import { altDoctor, AltEst } from "../../../../utils/altPictures";
import { Button } from "../../../ui/button/button";

export const Health = () => {
  return (
    <section className={S.health}>
      <div className={S.health__content}>
        <span className={S.health__content__badge}>
          <img src={IconEst} alt={AltEst} />
          <p>Saúde para todos</p>
        </span>
        <h1>Saúde e cuidado sem barreiras</h1>
        <p className={S.health__content__description}>
          Um projeto dedicado a oferecer atendimento médico e odontológico
          gratuito para pessoas que mais precisam na nossa comunidade.
        </p>
        <div className={S.health__content__btns}>
          <Button type="default" label="Seja Voluntário" />
          <Button type="outline" label="Como Ajudar" />
        </div>
      </div>
      <div className={S.health__picture}>
        <img src={Doctor} alt={altDoctor} />
      </div>
    </section>
  );
};
