import { IconSafeShopping } from '@/components/Icons/IconSafeShopping';
import './style.scss';
import { IconFreeShipping } from '@/components/Icons/IconFreeShipping';
import { IconInstallment } from '@/components/Icons/IconInstallment';

export function BenefitsBar() {
    return (
        <div className="benefitsbar">
            <ul>
                <li> <i><IconSafeShopping /></i><p>Compra<span> 100% segura</span></p> </li>
                <li> <i><IconFreeShipping /></i><p><span> Frete grátis </span>acima de R$ 200</p></li>
                <li> <i><IconInstallment /></i> <p><span> Parcele </span>suas compras</p></li>
            </ul>
        </div>
    )
}