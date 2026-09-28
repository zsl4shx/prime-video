import './Banner.css'

function Banner() {
    return (
        <header className="banner">
            <img
                className="logo-banner"
                src="/imagens/logo-prime-video.png"
                alt="Logo Prime Video"
            />
            <nav>
                <ul className="lista-opcoes">
                    <li>Página Inicial</li>
                    <li>Filmes</li>
                    <li>Séries</li>
                    <li>Esportes</li>
                    <li>TV ao vivo</li>
                    <li>Assinaturas</li>
                </ul>
            </nav>

                <div className="menu-direita">
                    <img
                        className="icone-lupa"
                        src="/imagens/lupa.png"
                        alt="Ícone lupa"
                    />

                <div className="dropdown-direita">
                    <span className="generos">Gêneros ▾</span>

                    <ul className="menu-generos">
                        <li>Ação e Aventura</li>
                        <li>Anime</li>
                        <li>Comédia</li>
                        <li>Documentário</li>
                        <li>Drama</li>
                        <li>Fantasia</li>
                        <li>Terror</li>
                        <li>Infantis</li>
                        <li>Suspense e Mistério</li>
                        <li>Romance</li>
                        <li>Ficção Científica</li>
                        <li>Jovens Adultos</li>
                    </ul>
                </div>
                        <img
                            className="profile-user"
                            src="/imagens/user.png"
                            alt="Perfil do usuário"
                        />

                    <button className='botao-prime'>
                        Assine o Prime
                    </button>

                </div>
        </header>
    )
}

export default Banner