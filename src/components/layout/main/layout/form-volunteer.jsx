import { useState } from "react";
import ICheck from "../../../../assets/imgs/icons/check.png";
import S from "../../../../styles/components/layout/form-volunteer.module.scss";

export const FormVolunteer = () => {
  const [validInput, setValidInput] = useState(false);
  const [sandData, setSandData] = useState(false);
  const [isLoading, setLoading] = useState(true);
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

  const validEmptyInput = () => {
    return formData.map((item) => {
      return item.name === "" && item.email === "" && item.tall === "";
    });
  };

  const addBorderErroInInput = (inputValue) => {
    if (inputValue === "" && validInput) return { border: "solid red 1px" };
  };

  const sandFormData = (e) => {
    e.preventDefault();
    setValidInput(true);

    validEmptyInput() && hasLoading();
  };

  const hasLoading = () => {
    setSandData(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section className={S.form_volunteer}>
      {sandData ? (
        <div className={S.check_content}>
          {isLoading ? (
            <div className={S.loading}>
              <div className={S.loading_spinner} />
            </div>
          ) : (
            <>
              <img src={ICheck} alt="" />
              <p>
                Cadastro realizado com sucesso. Entraremos em contato para mais
                informações.
              </p>
            </>
          )}
        </div>
      ) : (
        <form action="/" method="POST" onSubmit={(e) => sandFormData(e)}>
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
              style={addBorderErroInInput(formData[0].nome)}
            />
            <input
              value={formData[0].email}
              onChange={(e) => changeValueForm(e)}
              type="email"
              name="email"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Por favor, Digite um email válido"
              placeholder="Seu Email *"
              style={addBorderErroInInput(formData[0].email)}
            />
            <input
              value={formData[0].tall}
              onChange={(e) => changeValueForm(e)}
              type="tel"
              name="tall"
              pattern="^\(?\d{2}\)?\s?9\d{4}-?\d{4}$"
              title="Por favor, Digite um telefone válido (ex: 11987654321 ou (11) 98765-4321)"
              placeholder="Seu Telefone *"
              style={addBorderErroInInput(formData[0].tall)}
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
      )}
    </section>
  );
};
