import Image from 'next/image';
import LogoEconverse from '../../../../public/LogoEconverse.svg';
import { IconInstagram } from '@/components/Icons/IconInstagram';
import { IconFacebook } from '@/components/Icons/IconFacebook';
import { IconLinkedin } from '@/components/Icons/IconLinkedin';
import './style.scss';

export function Main() {
    return (
        <div className="footer-main">
            <div className="footer-main-container">
                <div className="footer-brand">
                    <Image
                        src={LogoEconverse}
                        width={180}
                        height={54}
                        alt='Logo Econverse'
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><IconInstagram /></a>
                        <a href="#" aria-label="Facebook"><IconFacebook /></a>
                        <a href="#" aria-label="LinkedIn"><IconLinkedin /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Institucional</h3>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Movimento</a></li>
                            <li><a href="#">Trabalhe conosco</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Ajuda</h3>
                        <ul>
                            <li><a href="#">Suporte</a></li>
                            <li><a href="#">Fale Conosco</a></li>
                            <li><a href="#">Perguntas Frequentes</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Termos</h3>
                        <ul>
                            <li><a href="#">Termos e Condições</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Troca e Devolução</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

