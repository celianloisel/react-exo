import React from 'react';
import ProductItem from './product';

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    {id: 1, name: 'Produit 1', price: 10},
    {id: 2, name: 'Produit 2', price: 20},
    {id: 3, name: 'Produit 3', price: 30},
];

const ProductList: React.FC = () => {
    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
