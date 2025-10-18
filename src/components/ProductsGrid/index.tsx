'use client';
import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { getProducts, Product } from '@/services/api';
import './style.scss';

export function ProductsGrid() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await getProducts();
                if (data.success) {
                    setProducts(data.products);
                }
            } catch (err) {
                setError('Erro ao carregar produtos');
                console.error('Erro ao buscar produtos:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="loading">Carregando produtos...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="products-grid">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.productName}
                    image={product.photo}
                    price={product.price}
                    description={product.descriptionShort}
                />
            ))}
        </div>
    );
}

