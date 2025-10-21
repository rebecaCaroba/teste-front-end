import { IconCrown } from '@/components/Icons/IconCrown';
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
                    <li><button><i><IconCrown /></i> ASSINATURA</button></li>
                </ul>
            </nav>
        </div>
    )
}