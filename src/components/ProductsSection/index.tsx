'use client';
import { useState } from 'react';
import { ProductsGrid } from '@/components/ProductsGrid';
import './style.scss';

export function ProductsSection() {
    const [activeTab, setActiveTab] = useState('celular');

    const tabs = [
        { id: 'celular', label: 'CELULAR' },
        { id: 'acessorios', label: 'ACESSÓRIOS' },
        { id: 'tablets', label: 'TABLETS' },
        { id: 'notebooks', label: 'NOTEBOOKS' },
        { id: 'tvs', label: 'TVS' },
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

