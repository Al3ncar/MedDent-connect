import { ContentSection } from "../../ui/content/content";
import { dataVolunteer } from "../../../utils/data/cards";
import { FormVolunteer } from "./layout/form-volunteer";

const BeAVolunteer = () => {
  return (
    <main>
      <ContentSection
        type="volunteer"
        title="Seja Voluntário"
        cardType="solid"
        content="Junte-se a nós e faça a diferença na vida de pessoas que precisam"
        dataContent={dataVolunteer}
      />
      <FormVolunteer />
    </main>
  );
};
export default BeAVolunteer;
