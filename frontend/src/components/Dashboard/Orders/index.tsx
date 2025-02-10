
import { Order } from "../../../types/Order";
import OrdersBoard from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '7',
    status: 'completed',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1738339932043-quatro-queijos.png',
          price: 40,
        },
        quantity: 7,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1738340477895-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f3'
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '2',
    status: 'pending',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1738339932043-quatro-queijos.png',
          price: 40,
        },
        quantity: 7,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1738340477895-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

export default function Orders(){
    return(
        <>
        <Container>
            <OrdersBoard
            icon="🕔"
            title="Fila de espera"
            orders={orders}
            />
            <OrdersBoard
            icon="👨‍🍳"
            title="Em preparo"
            orders = {orders}
            />
            <OrdersBoard
            icon="✅"
            title="Pronto"
            orders = {orders}
            />
        </Container>
        </>
    )
}
