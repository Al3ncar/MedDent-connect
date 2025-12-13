import S from "../../../../styles/components/layout/form-volunteer.module.scss";
export const FormVolunteer = () => {
  return (
    <section className={S.form_volunteer}>
      <form action="/" method="POST">
        <h2>Inscrição para Voluntários</h2>
        <div className={S.form_volunteer__person}>
          <h3>Dados Pessoais</h3>
          <input type="text" name="nome" placeholder="Seu Nome *" />
          <input type="email" name="email" placeholder="Seu Email *" />
          <input type="tel" name="tall" placeholder="Seu Telefone *" />
        </div>
        <div className={S.form_volunteer__msg}>
          <h3>Mensagem Adicional</h3>
          <textarea
            name="msg"
            placeholder="Conte-nos porque você quer ser voluntario..."
          ></textarea>
        </div>
        <div className={S.form_volunteer__submit}>
          <p>Entraremos em contato para mais informações</p>
          <input type="submit" value="Enviar Inscrição" />
        </div>
      </form>
    </section>
  );
};
