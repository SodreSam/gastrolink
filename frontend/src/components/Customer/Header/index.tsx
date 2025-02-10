import logo from '../../../assets/images/logo.svg';

import { Container } from './styles';
import { Content } from './styles';

export default function Header(){
    return (
        <Container>
        <Content>
        <div className="page-details">
            <span>Bem vindo(a) ao</span>
            <h1><strong>Sushito</strong> Prime</h1>
        </div>
        <img src={logo} alt="" />
        </Content>
        </Container>
    )
}
