import styled from 'styled-components'

export const Product = styled.div`
    margin-top: 18px;
    padding: 0 24px 0 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`
export const Image = styled.div`
    img {
        width: 160px;
        border-radius: 10px;
    }

`
export const ProductDetails = styled.div`
    margin-left: 16px;
    flex: 1;

`
export const Text = styled.p`
    margin: 0;
    font-size: 16px;

    &:nth-child(1) {
        font-weight: bold;
    }
    &:nth-child(2) {
        margin: 8px 0 8px 0;
    }

    &:nth-child(3) {
        color: #e44d26;
        font-weight: bold;
    }
`
export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(204, 204, 204, 0.3);
    margin: 24px 0;
`
export const AddToCartButton = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
`
