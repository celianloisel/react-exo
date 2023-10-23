import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <li>
            <p>Nom du produit : {product.name}</p>
    <p>Prix : {product.price} €</p>
    </li>
);
};

export default ProductItem;
