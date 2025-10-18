'use client';
import { useState } from 'react';
import './style.scss';

export function PartnersCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Parceiros',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur',
            buttonText: 'CONFIRA',
            image: '/partner-1.jpg',
        },
        {
            id: 2,
            title: 'Parceiros',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur',
            buttonText: 'CONFIRA',
            image: '/partner-2.jpg',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="partners-carousel">
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button className="carousel-nav prev" onClick={prevSlide}>
                        ‹
                    </button>

                    <div className="slides-container">
                        <div 
                            className="slides-track"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className="slide">
                                    <div className="partner-card">
                                        <div className="card-content">
                                            <h2>{slide.title}</h2>
                                            <p>{slide.subtitle}</p>
                                            <button className="confira-button">
                                                {slide.buttonText}
                                            </button>
                                        </div>
                                        <div className="card-background">
                                            <div className="image-placeholder">
                                                🏪
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-nav next" onClick={nextSlide}>
                        ›
                    </button>
                </div>

                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

