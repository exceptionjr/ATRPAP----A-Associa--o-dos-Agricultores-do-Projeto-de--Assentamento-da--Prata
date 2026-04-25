import './index.css'; // Assuming you have a CSS file for styling

function App() {
    return (
        <div className="ATRPAP">
            <header className="header">
                <h1>ATRPAP</h1>
                <p>Apresentando Serviços de Qualidade</p>
            </header>
            <section className="services">
                <h2>Nossos Serviços</h2>
                <div className="service-list">
                    <div className="service-item">
                        <h3>Serviço 1</h3>
                        <p>Descrição breve do serviço oferecido.</p>
                    </div>
                    <div className="service-item">
                        <h3>Serviço 2</h3>
                        <p>Descrição breve do serviço oferecido.</p>
                    </div>
                    <div className="service-item">
                        <h3>Serviço 3</h3>
                        <p>Descrição breve do serviço oferecido.</p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2023 ATRPAP. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default App;