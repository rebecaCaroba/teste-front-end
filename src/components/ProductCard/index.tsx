import Image from 'next/image';
import './style.scss';

interface ProductCardProps {
    name: string;
    image: string;
    price: number;
    description: string;
}

export function ProductCard({ name, image, price, description }: ProductCardProps) {
    // Formatar preço (API retorna em centavos)
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price / 100);

    // Calcular preço antigo (exemplo: 20% a mais)
    const oldPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format((price * 1.2) / 100);

    return (
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
                <h3>{name}</h3>
                <p className="product-description">{description}</p>
                <div className="product-prices">
                    <span className="old-price">{oldPrice}</span>
                    <span className="current-price">{formattedPrice}</span>
                </div>
                <button className="buy-button">Comprar</button>
            </div>
        </div>
    );
}

