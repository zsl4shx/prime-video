import './Assistir.css'

function Assistir() {
    return (
        <>
            <section className="assistir">

                <div className="bloco">

                    <img
                        className="devices"
                        src="/imagens/Devices.png"
                        alt="aparelhos"
                    />

                    <h1 className="titulo-1">
                        Assista onde quiser
                    </h1>

                    <p className="paragrafo-1">
                        Assista no site ou no app Prime Video em seu celular,
                        tablet ou seleção de Smart TVs — em até 3 dispositivos
                        ao mesmo tempo.
                    </p>

                </div>

                <div className="bloco">

                    <img
                        className="download"
                        src="/imagens/Download.png"
                        alt="baixar"
                    />

                    <h1 className="titulo-2">
                        Baixe para assistir quando e onde quiser
                    </h1>

                    <p className="paragrafo-2">
                        Assista offline no app Prime Video ao baixar títulos em
                        seu iPhone, iPad, tablet ou dispositivo Android.
                    </p>
                </div>

                <div className="bloco">

                    <img
                        className="data-saver"
                        src="/imagens/DataSaver.png"
                        alt="economia de dados"
                    />

                    <h1 className="titulo-3">
                        Economia de dados
                    </h1>

                    <p className="paragrafo-3">
                        Controle o uso de dados ao baixar e assistir a vídeos
                        em uma seleção de celulares e tablets.
                    </p>

                </div>

            </section>

        <footer className="rodape">

            <img
                className="logo-rodape"
                src="/imagens/logo-prime-video-white.png"
                alt="Logo Prime Video"
            />

            <div className="links-rodape">
                <p>Termos e Aviso de Privacidade</p>
                <p>Envie-nos comentários</p>
                <p>Help</p>
            </div>

            <p className="copyright">
                © 1996-2026, Amazon.com, Inc. ou suas afiliadas
            </p>

        </footer>

        </>
    )
}

export default Assistir