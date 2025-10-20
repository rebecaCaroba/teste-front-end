'use client';
import { useState } from 'react';
import { ProductsGrid } from '@/components/ProductsGrid';
import './style.scss';

export function ProductsSection() {
    const [activeTab, setActiveTab] = useState('celular');

    const tabs = [
        { id: 'celular', label: 'Celular' },
        { id: 'acessorios', label: 'Acessórios' },
        { id: 'tablets', label: 'Tablets' },
        { id: 'notebooks', label: 'Notebooks' },
        { id: 'tvs', label: 'TVs' },
    ];

    return (
        <section className="products-section">
            <div className="products-container">
                <div className='products-title'>
                    <h2>Produtos relacionados</h2>
                    <hr />
                </div>
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

                <ProductsGrid />
            </div>
        </section>
    )
}

