'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import './style.scss';

interface ModalProductsProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        name: string;
        image: string;
        price: number;
        description: string;
    };
}

export function ModalProducts({ isOpen, onClose, product }: ModalProductsProps) {
    const [quantity, setQuantity] = useState(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const modalContent = (
        <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>
                
                <div className="modal-body">
                    <div className="modal-image">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={350}
                            height={350}
                            className="product-modal-img"
                        />
                    </div>

                    <div className="modal-info">
                        <h2 className="modal-title">{product.name}</h2>
                        <p className="modal-price">{formattedPrice}</p>
                        <p className="modal-description">
                            Many desktop publishing packages and web page editors now many desktop publishing
                        </p>

                        <a href="#" className="modal-details-link">
                            Veja mais detalhes do produto &gt;
                        </a>

                        <div className="modal-actions">
                            <div className="quantity-controls">
                                <button onClick={handleDecrement} className="quantity-btn">−</button>
                                <span className="quantity-display">{quantity.toString().padStart(2, '0')}</span>
                                <button onClick={handleIncrement} className="quantity-btn">+</button>
                            </div>
                            
                            <button className="modal-buy-button">
                                COMPRAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}