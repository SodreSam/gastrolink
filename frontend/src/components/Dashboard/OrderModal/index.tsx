import { Actions, ModalBody, OrderDetails, Overlay } from "./styles"
import closeIdon from '../../../assets/images/close-icon.svg';
import { Order } from "../../../types/Order";
import { formatCurrency } from "../../../utils/formatCurrency";

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
}
export function OrderModal({visible, order, onClose}: OrderModalProps){
    if(!visible || !order){
        return null;
    }

    // let total = 0;
    // order.products.forEach(({ product, quantity}) => {
    //     total += product.price * quantity;
    // });

    const total = order.products.reduce((total, {product, quantity}) => {

        return total + (product.price * quantity)

    }, 0);

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type="button" onClick={onClose}>
                        <img src={closeIdon} alt="Fechar modal" />
                    </button>
                </header>
                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === 'pending' && '🕔'}
                            {order.status === 'in production' && '👨‍🍳'}
                            {order.status === 'completed' && '✅'}
                            {order.status === 'canceled' && '❌'}
                        </span>
                        <strong>
                        {order.status === 'pending' && 'Fila de espera'}
                        {order.status === 'in production' && 'Em preparo'}
                        {order.status === 'completed' && 'Concluído'}
                        {order.status === 'canceled' && 'Cancelado'}
                        </strong>
                    </div>
                </div>

            <OrderDetails>
                <strong>Itens</strong>

                <div className="order-items">
                {order.products.map(({ _id, product, quantity}) => (
                    <div className="item" key={_id}>
                        <img src={`http://localhost:3002/uploads/${product.imagePath}`} alt={product.name} />

                        <span className="quantity">{quantity}x</span>

                        <div className="product-details">
                            <strong>{product.name}</strong>
                            <span>{formatCurrency(product.price)}</span>
                        </div>


                    </div>

                ))}
                <div className="total">

                    <span>Total</span>
                    <strong>{formatCurrency(total)}</strong>

                </div>
                </div>

            </OrderDetails>

            <Actions>
                <footer>
                    <button type="button" className="primary">
                        <span>👨‍🍳</span>
                        <strong>Iniciar produção</strong>
                    </button>
                    <button type="button" className="secondary">
                        <span>Cancelar pedido</span>
                    </button>
                </footer>
            </Actions>

            </ModalBody>

        </Overlay>
  )
  }
