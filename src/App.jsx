import ButtonComponent from "./components/button";
import MainComponent from "./components/main";
import SectionComponent from "./components/section";
import LogoProject from "./images/logo.svg";
import FuturePerson from "./images/FuturePerson.png";
import SectionPersonComponent from "./components/sectionPerson";
import HeaderComponent from "./components/header";
import "./css/styled.css";
import "./css/TypingHeader.css";
import TypingHeader from "./components/TypingHeader";

function App() {
  return (
    <>
      <MainComponent>
        <HeaderComponent>
          <img src={LogoProject} className="imgLogo" />
          <ul>
            <li>HOME</li>
            <li>CURSOS</li>
          </ul>
        </HeaderComponent>

        <div>
          <SectionComponent className="info">
            <TypingHeader></TypingHeader>
            <ButtonComponent>Clique Aqui</ButtonComponent>
          </SectionComponent>
          <SectionPersonComponent>
            <img src={FuturePerson} className="futurePerson" />
          </SectionPersonComponent>
        </div>
      </MainComponent>
    </>
  );
}

export default App;
