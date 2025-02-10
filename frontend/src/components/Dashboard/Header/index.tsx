import logo from '../../../assets/images/logo.svg';

import { Container } from './styles';
import { Content } from './styles';

export default function Header(){
    return (
        <Container>
        <Content>
        <div className="page-details">
            <h1>Pedidos</h1>
            <p>Acompanhe os pedidos dos clientes</p>
        </div>
        <img src={logo} alt="" />
        </Content>
        </Container>
    )
}
