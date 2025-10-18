import './style.scss';

export function Brands() {
    const brands = [
        { id: 1, name: 'Brand 1' },
        { id: 2, name: 'Brand 2' },
        { id: 3, name: 'Brand 3' },
        { id: 4, name: 'Brand 4' },
        { id: 5, name: 'Brand 5' },
    ];

    return (
        <section className="brands">
            <div className="brands-container">
                <h2>Marcas parceiras</h2>
                <div className="brands-grid">
                    {brands.map((brand) => (
                        <div key={brand.id} className="brand-card">
                            <div className="brand-logo">
                                <span>{brand.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

