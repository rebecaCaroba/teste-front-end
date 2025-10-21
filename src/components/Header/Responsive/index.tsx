import { IconBox } from "@/components/Icons/IconBox";
import { IconCrown } from "@/components/Icons/IconCrown";
import { IconFavorites } from "@/components/Icons/IconFavorites";
import { IconFreeShipping } from "@/components/Icons/IconFreeShipping";
import { IconInstallment } from "@/components/Icons/IconInstallment";
import { IconSafeShopping } from "@/components/Icons/IconSafeShopping";
import { IconSearch } from "@/components/Icons/IconSearch";
import { IconShoppingCart } from "@/components/Icons/IconShoppingCart";
import { IconUserCircle } from "@/components/Icons/IconUserCircle";
import { IoCloseSharp } from "react-icons/io5";



interface HeaderResponsiveProps {
    ToggleMenuResponsive: () => void,
    isMenuResponsive: boolean,

}

export function HeaderResponsive({ ToggleMenuResponsive, isMenuResponsive }: HeaderResponsiveProps) {
    return (
        <div
            className={
                isMenuResponsive ?
                    "menu-responsive active" :
                    "menu-responsive"
            }
        >

            <button
                onClick={() => ToggleMenuResponsive()}
                id="close-menu"
            >
                <i><IoCloseSharp size={24} /></i>
            </button>

            <section>
                <div className="container-header-center-content-responsive">
                    <input type="text" placeholder="O que você está buscando?" />
                    <i><IconSearch /></i>
                </div>
                <div className="buttons-right-content-responsive">
                    <button><i><IconBox /></i></button>
                    <button><i><IconFavorites /></i></button>
                    <button><i><IconUserCircle /></i></button>
                    <button><i><IconShoppingCart /></i></button>
                </div>
            </section>

            <div className="container-header-bottom-responsive">
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
            <section className="container-header-responsive-section">



                <div className="container-header-top-responsive">
                    <ul>
                        <li>
                            <i><IconSafeShopping /></i>
                            Compras <span> 100% segura</span>
                        </li>
                        <li>
                            <i><IconFreeShipping /></i>
                            <span>Frente grátis</span>acima de R$ 200
                        </li>
                        <li>
                            <i><IconInstallment /></i>
                            <span>Parcele</span>suas compras
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}