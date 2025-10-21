import Image from 'next/image';
import './style.scss';

interface ProductCardProps {
    name: string;
    image: string;
    price: number;
    description: string;
}

export function ProductCard({ name, image, price, description }: ProductCardProps) {
   
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    const oldPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format((price * 1.2));

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
                <p className="product-brand">{description}</p>
                <div className="product-prices">
                    <span className="old-price">{oldPrice}</span>
                    <span className="current-price">{formattedPrice}</span>
                    <span className="installments">ou 10x de {formattedPrice} sem juros</span>
                    <span className="free-shipping">Frete grátis</span>
                </div>
                <button className="buy-button">COMPRAR</button>
            </div>
        </div>
    );
}

