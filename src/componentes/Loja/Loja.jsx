import "./Loja.css";

function Loja() {
    return (
        <section className="loja">
            <img
                className="loja-fundo-filmes"
                src="/imagens/fundo-filmes2.jpg"
                alt="Filmes loja prime video"
            />

            <div className="loja-overlay">
                <div className="loja-conteudo">
                    <h1>Loja Prime Video</h1>

                    <p>
                        Ainda mais filmes, agora disponíveis para compra ou
                        aluguel - assinatura Prime não necessária.
                    </p>

                    <div className="botao">
                        <button className="loja-botao">
                            Alugar ou comprar filmes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Loja;