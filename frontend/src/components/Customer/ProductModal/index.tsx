import { ModalOverlay, ModalContent, CloseButton, ProductImage, ProductDetails, ProductName, ProductDescription, ProductPrice } from "./styles";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Product } from "../../../types/Product";
import { useEffect, useState } from "react";

interface ProductModalProps {
    visible: boolean;
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ visible, product, onClose }: ProductModalProps) {
        const [isClosing, setIsClosing] = useState(false);

        useEffect(() => {
            if (!visible) {
                setIsClosing(true);
            }
        }, [visible]);

        const handleClose = () => {
            setIsClosing(true);
            setTimeout(() => {
                onClose();
            }, 300); // Tempo da animação de fechamento
        };

        if (!visible && !isClosing) return null;
    return (
        <ModalOverlay>
            <ModalContent isClosing={isClosing}>
                <CloseButton onClick={handleClose}>×</CloseButton>
                <ProductImage src={`http://localhost:3002/uploads/${product.imagePath}`} alt={product.name} />
                <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>{product.description}</ProductDescription>
                    {product.ingredients && (
                        <ProductDescription>
                            Ingredientes: {product.ingredients.map(ing => ing.name).join(", ")}
                        </ProductDescription>
                    )}
                    <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                </ProductDetails>
            </ModalContent>
        </ModalOverlay>
    );
}
