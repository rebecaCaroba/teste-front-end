import './style.scss';

export function Newsletter() {
    return (
        <div className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h2>Inscreva-se na nossa newsletter</h2>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <form className="newsletter-form">
                    <div className="newsletter-form-inputs">
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="email" placeholder="Digite seu e-mail" />
                        <button type="submit">INSCREVER</button>
                    </div>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">Aceito os termos e condições</label>
                    </div>
                </form>
            </div>
        </div>
    )
}
