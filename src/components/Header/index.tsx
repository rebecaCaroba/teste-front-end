import { BenefitsBar } from './BenefitsBar';
import { Center } from './Center';
import './style.scss';

export function Header() {
    return (
        <header className="header">
            <div className="header-container">
               <BenefitsBar /> 
               <Center />
            </div>
        </header>
    )
}