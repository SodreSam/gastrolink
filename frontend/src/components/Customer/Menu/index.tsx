import { Product, Image, ProductDetails, Text, Separator, AddToCartButton } from "./styles";
import { products as mockProducts } from "../../../mocks/products"; // Renomeie para evitar conflito de nomes
import { formatCurrency } from "../../../utils/formatCurrency";
import PlusCircle from "../../../assets/icons/PlusCircle.svg";
import { useState } from "react";
import ProductModal from "../ProductModal";
import { Product as ProductType } from "../../../types/Product"; // Importe a interface Product

interface ProductList {
    icon: string;
    title: string;
    products: ProductType[]; // Garanta que products seja um array de ProductType
}

export default function Menu({ products = mockProducts }: ProductList) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | ProductType>(null);

    // Garanta que products seja um array, mesmo que vazio
    const safeProducts = Array.isArray(products) ? products : [];

    function handleOpenOrderDetails(product: ProductType) {
        setIsModalVisible(true);
        setSelectedProduct(product);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedProduct(null);
    }

    function handleAddToCart(event: React.MouseEvent, product: ProductType) {
        event.stopPropagation(); // Evita que o clique propague para o Product
        console.log("Produto adicionado ao carrinho:", product.name);
        // Adicione aqui a lógica para adicionar o produto ao carrinho
    }

    return (
        <>
            {safeProducts.map((product) => (
                <Product key={product._id} onClick={() => handleOpenOrderDetails(product)}>
                    <Image>
                        <img src={`http://localhost:3002/uploads/${product.imagePath}`} alt={product.name} />
                    </Image>
                    <ProductDetails>
                        <Text>{product.name}</Text>
                        <Text>{product.description}</Text>
                        <Text>{formatCurrency(product.price)}</Text>
                    </ProductDetails>

                    <AddToCartButton onClick={(event) => handleAddToCart(event, product)}>
                        <img src={PlusCircle} alt="Adicionar ao carrinho" />
                    </AddToCartButton>
                </Product>
            ))}
            <Separator />
            {isModalVisible && selectedProduct && (
                <ProductModal
                    visible={isModalVisible}
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}
