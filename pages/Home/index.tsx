import Caption from "../../components/atoms/Caption";
import Title from "../../components/atoms/Title";
import Header from "../../components/organisms/Header";
import { Container } from "./styles";

export default function Home(){
    return(
        <Container>
            <Header />
            <Title>
                Wanna Do
            </Title>
            <Caption>
                Seja bem vindo!
            </Caption>
        </Container>
    )
}