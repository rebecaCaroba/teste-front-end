import './style.scss';

export function Categories() {
    const categories = [
        { id: 1, name: 'Tecnologia', icon: '💻' },
        { id: 2, name: 'Supermercado', icon: '🛒' },
        { id: 3, name: 'Bebidas', icon: '🥤' },
        { id: 4, name: 'Ferramentas', icon: '🔧' },
        { id: 5, name: 'Saúde', icon: '💊' },
        { id: 6, name: 'Esportes e Fitness', icon: '⚽' },
        { id: 7, name: 'Moda', icon: '👔' },
    ];

    return (
        <section className="categories">
            <div className="categories-container">
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="category-icon">{category.icon}</div>
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

