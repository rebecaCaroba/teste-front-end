'use client';
import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { getProducts, Product } from '@/services/api';
import './style.scss';
import { IconArrowRight } from '../Icons/IconArrowRight';
import { IconArrowLeft } from '../Icons/IconArrowLeft';

export function ProductsGrid() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setCurrentSlide(0);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const productsPerSlide = isMobile ? 2 : 4;
    const totalSlides = Math.ceil(products.length / productsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    if (loading) {
        return <div className="loading">Carregando produtos...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="products-carousel">
            <button className="carousel-arrow prev" onClick={prevSlide}>
                <i><IconArrowLeft /></i>
            </button>

            <div className="carousel-container">
                <div 
                    className="products-grid"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
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
            </div>

            <button className="carousel-arrow next" onClick={nextSlide}>
                <i><IconArrowRight /></i>
            </button>
        </div>
    );
}

