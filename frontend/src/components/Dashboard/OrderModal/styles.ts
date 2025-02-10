import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`



export const ModalBody = styled.div`
    width: 100%;
    max-width: 480px;
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
    header{

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
        font-size: 24px;
        color: #333;
    }

    button{
        line-height: 0;
        border: 0;
        background-color: transparent;
    }
}

.status-container{
    margin-top: 32px;

    small{
        font-size: 14px;
        color: #999;
    }

    div{
        display: flex;
        align-items: center;
        margin-top: 8px;

        span{
            font-size: 24px;
        }

        strong{
            margin-left: 8px;
            font-size: 18px;
            color: #333;
        }
    }
}
`
export const OrderDetails = styled.div`
    margin-top: 32px;

    > strong {
        font-size: 14px;
        font-weight: 500;
        color: #333;
    }

    img{
        width: 80px;
        border-radius: 8px;

    }

     .order-items{
        margin-top: 16px;

        .item{
            display: flex;
            gap: 10px;
            & + .item{
                margin-top: 16px;
            }
        }

        .quantity{
            font-size: 14px;
            color: #666;
            display: block;
            min-width: 20px;
        }
        .product-details{
            margin-left: 6px;

            strong{
                display: block;
                margin-bottom: 4px;
            }

            span{
                font-size: 14px;
            }
        }
    }

    .total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

        span{
            font-size: 14px;
            opacity: 0.8;
        }

    }
`
export const Actions = styled.div `

    footer{
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        gap: 8px;

        .primary{
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
            background-color: #333;
            border-radius: 10px;
            border: 0;
            color: #fff;
            padding: 0.6rem;
            transition: all 0.3s;
        }
        .primary:hover{
            opacity: 0.95;
        }

        .secondary{
            border: 0;
            color: #d73035;
            padding: 0.6rem;
            font-weight: bold;
            background-color: transparent;
            margin-top: 8px;
        }
}
`
