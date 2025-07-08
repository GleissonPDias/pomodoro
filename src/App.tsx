import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

export function App() {
  //SEMPRE QUE USAR USESTAT NAO ATRIBUIR VALOR DIRETAMENTE
  // const [numero, setNumero] = useState(() => {
  //   console.log("Lazy initialization");
  //   return 0;
  // });

  // const [numero, setNumero] = useState(0);

  // function handleClick() {
  //   // setNumero((prevState) => prevState + 1);
  //   setNumero(numero + 1);
  // }
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Task"
              id="meuInput"
              placeholder="Digite uma tarefa:"
              type="text"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
