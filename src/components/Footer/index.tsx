import { Newsletter } from './Newsletter';
import { Main } from './Main';
import { Bottom } from './Bottom';
import './style.scss';

export function Footer() {
    return (
        <footer className="footer">
            <Newsletter />
            <Main />
            <Bottom />
        </footer>
    )
}
