import { useEffect, useState } from "react";
import S from "../../../../styles/components/layout/form-volunteer.module.scss";

export const FormVolunteer = () => {
  const [formData, setFormData] = useState([
    {
      nome: "",
      email: "",
      tall: "",
      msg: "",
    },
  ]);

  const changeValueForm = (e) => {
    const { value, name } = e.target;
    const newFormData = formData.slice()[0];
    newFormData[name] = value;
    setFormData([newFormData]);
  };

  useEffect(() => {
    console.log(formData);
  }, formData);

  return (
    <section className={S.form_volunteer}>
      <form action="/" method="POST" onSubmit={(e) => e.preventDefault()}>
        <h2>Inscrição para Voluntários</h2>
        <div className={S.form_volunteer__person}>
          <h3>Dados Pessoais</h3>
          <input
            value={formData[0].nome}
            onChange={(e) => changeValueForm(e)}
            type="text"
            name="nome"
            pattern="^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$"
            title="Por favor, Digite apenas letras e espaços"
            placeholder="Seu Nome *"
          />
          <input
            value={formData[0].email}
            onChange={(e) => changeValueForm(e)}
            type="email"
            name="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Por favor, Digite um email válido"
            placeholder="Seu Email *"
          />
          <input
            value={formData[0].tall}
            onChange={(e) => changeValueForm(e)}
            type="tel"
            name="tall"
            pattern="^\(?\d{2}\)?\s?9\d{4}-?\d{4}$"
            title="Por favor, Digite um telefone válido (ex: 11987654321 ou (11) 98765-4321)"
            placeholder="Seu Telefone *"
          />
        </div>
        <div className={S.form_volunteer__msg}>
          <h3>Mensagem Adicional</h3>
          <textarea
            value={formData[0].msg}
            onChange={(e) => changeValueForm(e)}
            name="msg"
            placeholder="Conte-nos porque você quer ser voluntario..."
            maxLength={1000}
          ></textarea>
          <span>{formData[0].msg.length || 0}/1000</span>
        </div>
        <div className={S.form_volunteer__submit}>
          <p>Entraremos em contato para mais informações</p>
          <input type="submit" value="Enviar Inscrição" />
        </div>
      </form>
    </section>
  );
};
