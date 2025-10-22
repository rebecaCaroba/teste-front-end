import { useState } from 'react';
import { ProductsGrid } from '@/components/ProductsGrid';
import './style.scss';

export function Products() {

    return (
        <section className="products">
            <div className="products-container">
                <div className='products-title'>
                    <h2>Produtos relacionados</h2>
                    <hr />
                </div>
                <div className="products-button">
                    <span>Ver todos</span>
                </div>

                <ProductsGrid />
            </div>
        </section>
    )
}

