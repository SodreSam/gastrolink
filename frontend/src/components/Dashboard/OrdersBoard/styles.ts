import styled from 'styled-components';

export const Board = styled.div`
    padding: 16px;
    border-radius: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    > header{
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }
`
export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;

    button{
        width: 100%;
        background-color: #fff;
        border: 1px solid rgba(204, 204, 204, 0.4);
        height: 128px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;


        strong
        {
           font-weight: 500;
        }

        span{
            font-size: 14pxrem;
            color: #666;
        }

        & + button{
            margin-top: 24px;
        }
    }
`
