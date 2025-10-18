import './style.scss';

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Venha conhecer nossas promoções</h1>
                    <p className="hero-discount">50% Off nos produtos</p>
                    <button className="hero-button">Ver produto</button>
                </div>
            </div>
        </section>
    )
}

