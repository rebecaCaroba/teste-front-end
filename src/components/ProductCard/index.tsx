'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ModalProducts } from '../ModalProducts';
import './style.scss';

interface ProductCardProps {
    name: string;
    image: string;
    price: number;
    description: string;
}

export function ProductCard({ name, image, price, description }: ProductCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    const oldPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format((price * 1.2));

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <Image
                        src={image}
                        alt={name}
                        width={250}
                        height={250}
                        className="product-img"
                    />
                </div>
                <div className="product-info">
                    <p className="product-brand">{description}</p>
                    <div className="product-prices">
                        <span className="old-price">{oldPrice}</span>
                        <span className="current-price">{formattedPrice}</span>
                        <span className="installments">ou 2x de {formattedPrice} sem juros</span>
                        <span className="free-shipping">Frete grátis</span>
                    </div>
                    <button className="buy-button" onClick={handleOpenModal}>
                        COMPRAR
                    </button>
                </div>
            </div>

            <ModalProducts
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={{
                    name,
                    image,
                    price,
                    description,
                }}
            />
        </>
    );
}

