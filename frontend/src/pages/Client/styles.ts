import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh; // Ocupa 100% da altura da tela
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
`;

export const OrdersMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1256px;
    margin: 0 auto;
    flex: 1; // Ocupa o espaço restante abaixo do Header
    padding: 0 1rem; // Adiciona um padding lateral para evitar que o conteúdo encoste nas bordas
`;

export const CategoriesContainer = styled.div`
    width: 100%;
    margin-top: 18px;
    margin-bottom: 16px; // Adiciona um espaçamento abaixo das categorias
`;

export const MenuContainer = styled.div`
    width: 100%;
    flex: 1; // Ocupa o espaço restante entre as categorias e o footer
    overflow-y: auto; // Permite rolagem vertical se o conteúdo for muito longo
    max-width: 760px;
`;

export const FooterContainer = styled.div`
    width: 100%;
    max-width: 760px;
    min-height: 110px;
    background-color: #D73035;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: auto; // Garante que o footer fique no final
`;
