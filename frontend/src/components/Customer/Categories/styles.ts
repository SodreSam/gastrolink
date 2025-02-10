import styled from 'styled-components';

import { CategoryProps } from '../../../types/CategoryProps';

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px; // Espaçamento entre as categorias
    overflow-x: auto; // Permite rolagem horizontal
    padding: 1rem;
    margin: 0 0.2rem; // Adiciona margens laterais para evitar corte

    // Esconde a scrollbar no Chrome, Safari e Edge
    &::-webkit-scrollbar {
        display: none;
    }

    // Esconde a scrollbar no Firefox
    scrollbar-width: none;
    -ms-overflow-style: none; // Esconde a scrollbar no IE e Edge
`;

export const Category = styled.div<CategoryProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 0.6rem;
    min-width: 80px; // Largura mínima para cada categoria
    flex-shrink: 0; // Impede que as categorias encolham
    cursor: pointer;
    transition: opacity 0.3s ease, background-color 0.3s ease;
    /* Estilo quando a categoria está selecionada */
    /* background-color: ${(props) => (props.isSelected ? "#e0e0e0" : "transparent")}; */

    /* Reduz a opacidade das categorias não selecionadas quando há uma categoria selecionada */
    opacity: ${(props) => (props.hasSelectedCategory && !props.isSelected ? 0.5 : 1)};
`;

export const Icon = styled.div`
    background-color: #fff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 2px 0.5px rgb(139, 139, 139, 0.4);
`;

export const Text = styled.div`
    font-size: 14px;
    font-weight: 600;
`;
