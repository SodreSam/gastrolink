import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Animação de slide para baixo
export const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div<{isClosing: boolean}>`
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px 8px 0 0; // Bordas arredondadas apenas no topo
    width: 100%;
    max-width: 500px;
    position: relative;
    animation: ${({ isClosing }) => (isClosing ? slideDown : slideUp)} 0.3s ease-in-out;
    transform: ${({ isClosing }) => (isClosing ? "translateY(100%)" : "translateY(0)")};
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
`;

export const ProductDetails = styled.div`
    text-align: center;
`;

export const ProductName = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    color: #e44d26;
`;
