import "./Home.css";

function Home() {
  return (
    <section className="hero">

      <img
        className="fundo-filmes"
        src="/imagens/fundo-filmes.jpg"
        alt="Filmes e séries"
      />

      <div className="h-overlay">

        <div className="h-conteudo">

          <h1>
            Filmes, séries, esportes e muito mais
          </h1>

          <p>
            Assista a filmes e séries com anúncios e aproveite entrega grátis
            e rápida em diversos produtos. Com o plano anual você parcela em
            até 12x de R$ 13,90/mês sem juros (R$ 166,80 por ano).
          </p>

          <p>
            Assista sem anúncios por mais R$ 10,00/mês.
          </p>

          <div className="h-botoes">

            <button className="botao-primario">
              Faça login
            </button>

            <button className="botao-secundario">
              Experimente 30 dias grátis
            </button>

          </div>

          <p className="aviso">
            <small>
              Após 30 dias, o Amazon Prime é renovado automaticamente por
              R$ 19,90/mês ou até 12x de R$ 13,90 (R$ 166,80/ano).
              Cancele a qualquer momento.
            </small>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Home;