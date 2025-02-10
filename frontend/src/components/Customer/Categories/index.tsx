import { useState } from "react";
import { categories } from "../../../mocks/categories";
import { CategoriesContainer, Category, Icon, Text } from "./styles";

export default function Categories() {

    const [selectedCategory, setSelectedCategory] = useState('');
    function handleSelectedCategory(categoryId: string) {
        // Toggle: se a categoria já estiver selecionada, desmarque-a
        if (selectedCategory === categoryId) {
            setSelectedCategory('');
        } else {
            setSelectedCategory(categoryId);
        }
    }
    return (
        <>
        <CategoriesContainer>
            {categories.map((category) => (
                <Category
                key={category._id}
                onClick={() => handleSelectedCategory(category._id)}
                isSelected={selectedCategory === category._id}
                hasSelectedCategory={!!selectedCategory}
                    >
                    <Icon>
                        <Text>{category.icon}</Text>
                    </Icon>
                    <Text>{category.name}</Text>
                </Category>
            ))}
        </CategoriesContainer>

    </>
    )
}
