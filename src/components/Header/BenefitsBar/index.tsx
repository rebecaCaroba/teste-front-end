import { IconSafeShopping } from '@/components/Icons/IconSafeShopping';
import './style.scss';
import { IconFreeShipping } from '@/components/Icons/IconFreeShipping';
import { IconInstallment } from '@/components/Icons/IconInstallment';

export function BenefitsBar() {
    return (
        <div className="benefitsbar">
            <ul>
                <li> <i><IconSafeShopping /></i> Compra<span> 100% segura</span> </li>
                <li> <i><IconFreeShipping /></i> <span> Frete grátis </span>acima de R$ 200</li>
                <li> <i><IconInstallment /></i> <span> Parcele </span>suas compras</li>
            </ul>
        </div>
    )
}