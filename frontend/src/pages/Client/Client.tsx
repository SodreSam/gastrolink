import Categories from "../../components/Customer/Categories";
import Header from "../../components/Customer/Header";
import Menu from "../..//components/Customer/Menu";

import Footer from "../../components/Customer/Footer";
import { Container, CategoriesContainer, MenuContainer, FooterContainer, OrdersMenu } from './styles';

export default function Client() {
    return (
        <Container>
            <Header />
            <OrdersMenu>
                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu/>
                </MenuContainer>

                <FooterContainer>
                    <Footer/>
                </FooterContainer>
            </OrdersMenu>
        </Container>
    );
}
