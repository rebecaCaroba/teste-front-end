'use client';
import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { getProducts, Product } from '@/services/api';
import './style.scss';

export function ProductsSection() {
    const [activeTab, setActiveTab] = useState('celular');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const tabs = [
        { id: 'celular', label: 'Celular' },
        { id: 'acessorios', label: 'Acessórios' },
        { id: 'tablets', label: 'Tablets' },
        { id: 'notebooks', label: 'Notebooks' },
        { id: 'tvs', label: 'TVs' },
    ];

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

    return (
        <section className="products-section">
            <div className="products-container">
                <h2>Produtos relacionados</h2>
                
                <div className="products-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="loading">Carregando produtos...</div>
                ) : error ? (
                    <div className="error">{error}</div>
                ) : (
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
                )}
            </div>
        </section>
    )
}

