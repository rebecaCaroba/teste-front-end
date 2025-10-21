import { BenefitsBar } from './BenefitsBar';
import { Bottom } from './Bottom';
import { Center } from './Center';
import './style.scss';

export function Header() {
    return (
        <header className="header">
            <div className="header-container">
               <BenefitsBar /> 
               <Center />
               <Bottom />
            </div>
        </header>
    )
}