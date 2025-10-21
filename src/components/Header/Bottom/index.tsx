import './style.scss';
export function Bottom() {
    return (
        <div className="bottom">
            <nav>
                <ul>
                    <li><button>TODAS CATEGORIAS</button></li>
                    <li><button>SUPERMERCADO</button></li>
                    <li><button>LIVROS</button></li>
                    <li><button>MODA</button></li>
                    <li><button>LANÇAMENTOS</button></li>
                    <li><button><span>OFERTAS DO DIA</span></button></li>
                    <li><button><i><img src="assets/CrownSimple.svg" alt="Ícone Coroa" /></i> ASSINATURA</button></li>
                </ul>
            </nav>
        </div>
    )
}