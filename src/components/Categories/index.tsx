import './style.scss';
import { IconTechnology } from '../Icons/IconTechnology';
import { IconSupermarket } from '../Icons/IconSupermarket';
import { IconDrinks } from '../Icons/IconDrinks';
import { IconTools } from '../Icons/IconTools';
import { IconHealth } from '../Icons/IconHealth'
import { IconSports } from '../Icons/IconSports';
import { IconFashion } from '../Icons/IconFashion';

export function Categories() {
    return (
        <section className="categories">
            <div className="container-categories">
                <div className="container-catagories">
                    <button>
                        <i className='active'><IconTechnology /></i>
                        <span>Tecnologia</span>
                    </button>
                    <button>
                        <i><IconSupermarket /></i>
                        Supermercado
                    </button>
                    <button>
                        <i><IconDrinks /></i>
                        Bebida
                    </button>
                    <button>
                        <i><IconTools /></i>
                        Ferramentas
                    </button>
                    <button>
                        <i><IconHealth/></i>
                        Saúde
                    </button>

                    <button>
                        <i><IconSports /></i>
                        Esporte e Fitness
                    </button>
                    <button>
                        <i><IconFashion /></i>
                        Moda
                    </button>
                </div>
            </div>
        </section>
    )
}

