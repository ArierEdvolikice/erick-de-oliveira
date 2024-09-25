import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules";
import AOS from "aos"; // Importando AOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css"; // Importando o CSS do AOS
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação
      once: true, // Anima apenas na primeira vez que o elemento entra na viewport
    });
  }, []);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [ 
    {
      question: "Quanto tempo levará para o meu site estar operacional?",
      answer: (
        <>
          Tudo depende das suas necessidades:
          <br />
          Para uma landing page, conte entre{" "}
          <span className="highlight">uma e três semanas de produção.</span>
          <br />
          Um site completo de entre 5 e 10 páginas levará entre{" "}
          <span className="highlight">6 e 8 semanas.</span>
          <br />
          Esses prazos são apenas informativos e consideram a produção, nossos
          diferentes feedbacks e o tempo que você levará para redigir e
          recuperar seu conteúdo.
          <br />
          Se você já tiver tudo pronto antes do início do projeto, o tempo de
          entrega será{" "}
          <span className="highlight">drasticamente reduzido!</span>
        </>
      ),
    },
    {
      question: "Você oferece outros serviços além do design de sites?",
      answer: (
        <>
          Claro! Aqui estão alguns dos serviços que posso oferecer para você:
          <br />
          - Direção de arte
          <br />
          - Branding / Design gráfico
          <br />
          - Estratégia de comunicação
          <br />
        </>
      ),
    },
    {
      question: "Por que devo usar o Webflow para o meu site?",
      answer: (
        <>
          O Webflow é uma ferramenta avançada para negócios que valorizam tanto{" "}
          <span className="highlight">flexibilidade quanto eficiência.</span>
          <br />
          Trabalhei com WordPress por anos e a diferença é impressionante. Os
          benefícios para o seu negócio em termos de gerenciamento, desempenho e
          segurança fazem dele uma ferramenta no-code essencial!
          <br />
          Se você quiser saber mais sobre isso,{" "}
          <span className="highlight">convido você a me contatar</span> para uma
          consulta gratuita e discutir a relevância do Webflow para alcançar
          seus objetivos.
        </>
      ),
    },
    {
      question:
        "Preciso de um site e-commerce, isso está dentro das suas capacidades?",
      answer: (
        <>
          Se você precisa de um{" "}
          <span className="highlight">simples site e-commerce</span> ou de uma
          página de loja com alguns artigos para venda, então sim, posso me
          encarregar e desenvolvê-lo diretamente via Webflow.
          <br />
          No entanto, se você deseja um site e-commerce com centenas de produtos
          e necessidades específicas, então não sou a pessoa certa e o{" "}
          <span className="highlight">
            redirecionarei para outros prestadores de confiança
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobremim">Sobre Mim</a>
            </li>
            <li>
              <a href="#timeline">Educação e Experiência</a>
            </li>
            <li>
              <a href="#projetos">Últimos Projetos</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="section-home">
        <div className="home-container">
          <div data-aos="fade-right" className="home-text">
            <h1>
              Desenvolvendor<br></br>
              <span className="designer-text">& Designer</span>
            </h1>
            <p>
              Eu me chamo <span className="highlight">Erick de Oliveira</span> e
              sou especializado em desenvolvimento de{" "}
              <span className="highlight">aplicativos nativos</span>,
              <span className="highlight">UX/UI</span>, e plataformas no-code
              como
              <span className="highlight">Bubble.io</span> e{" "}
              <span className="highlight">WordPress</span>.
            </p>

            <a
              href="https://wa.me/5585994283128?text=Diga-me%20o%20que%20precisa%20e%20retorno%20assim%20que%20poss%C3%ADvel!%20Obrigado."
              data-aos="fade-in"
              data-aos-delay="600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contate-me</button>
            </a>
          </div>
          <div data-aos="fade-left" className="home-image">
            <img
              src="./Imagens/Foto_Sec_2.png"
              alt="Erick de Oliveira"
              className="profile-photo"
            />
          </div>
        </div>
        <div className="gradient-bottom"></div>
      </section>

      <section id className="section-about-skills">
        <div id="sobremim" data-aos="fade-up" className="about-me">
          <h1>Sobre Mim</h1>
          <p>
            Sou <span className="highlight">Erick de Oliveira</span>, um
            Desenvolvedor Full Stack com 3 anos de experiência em criação de
            aplicativos nativos e uso de ferramentas no code, como Bubble.io e
            WordPress.
            <span className="highlight">Especializado em UX e UI</span>, meu
            foco é desenvolver interfaces intuitivas e responsivas que otimizem
            a experiência do usuário. Com habilidades em diversas linguagens de
            programação, incluindo JavaScript, PHP e Python, tenho trabalhado em
            projetos desafiadores, colaborando com equipes para garantir
            qualidade e inovação. Fluente em inglês e português, estou sempre em
            <span className="highlight">busca de novos desafios</span> que me
            permitam crescer e contribuir para soluções impactantes.
          </p>
        </div>

        <h1 data-aos="fade-up" className="Minha-Habilidades">
          Minhas Habilidades
        </h1>

        <div data-aos="fade-up" data-aos-delay="300" className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Javascript.png"
                alt="Javascript Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>JavaScript</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Html.png"
                alt="Html Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>HTML</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Css.png"
                alt="Css Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>CSS</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/C.png"
                alt="C Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>C++</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/C_Hashtag.png"
                alt="C_Hashtag Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>C#</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Flutter.png"
                alt="Flutter Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Flutter</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Git.png"
                alt="Git Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Git</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/mysql.png"
                alt="mysql Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>MySQL</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/PHP.png"
                alt="PHP Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>PHP</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Python.png"
                alt="Python Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Python</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/React.png"
                alt="React Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>React Native</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Vue.png"
                alt="Vue Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Vue.js</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Wordpress.png"
                alt="Wordpress Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Wordpress</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/PS.png"
                alt="PhotoShop Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>PhotoShop</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/Ilustrator.png"
                alt="Ilustrator Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Ilustrator</h3>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img
                src="./Imagens/premiere.png"
                alt="Premiere Icon"
                className="Icons-Habilidades"
              ></img>
            </div>
            <h3>Premiere</h3>
          </div>
        </div>

        <a
          href="https://github.com/ArierEdvolikice"
          data-aos="fade-in"
          data-aos-delay="600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Conheça Meus Projetos</button>
        </a>
      </section>

      <section id="timeline" className="Timeline">
        <h1 data-aos="fade-up">Educação e Experiência</h1>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="experience-grid"
        >
          <div className="time-line">
            <div className="outer">
              <div className="card">
                <div className="info">
                  <h3 className="title">Metashop | 2023 - 2024</h3>
                  <p>
                    Atuei como{" "}
                    <span className="highlight">Desenvolvedor Full Stack</span>,
                    onde criei interfaces de usuário intuitivas e responsivas,
                    combinando design e funcionalidade para proporcionar uma
                    experiência fluida. Desenvolvi e implementei workflows
                    complexos voltados para a automação de processos, além de
                    criar elementos gráficos e visuais que enriqueceram as
                    páginas web. Também fui{" "}
                    <span className="highlight">
                      responsável pela integração de APIs e funcionalidades
                      externas
                    </span>
                    , sempre com foco na otimização da experiência do usuário
                    (UX) e na eficiência das interfaces (UI). Realizei testes
                    rigorosos e depuração constante, garantindo a qualidade e a
                    performance de cada projeto.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="info">
                  <h3 className="title">AKI Agency | 2022 - 2023</h3>
                  <p>
                    Atuei como{" "}
                    <span className="highlight">Desenvolvedor Front-end</span>{" "}
                    na AKI Agency entre 2022 e 2023, onde fui responsável pelo
                    desenvolvimento de interfaces responsivas em{" "}
                    <span className="highlight">código nativo e WordPress</span>
                    . Criei páginas web dinâmicas e otimizadas, além de projetar
                    e implementar elementos visuais para projetos online.
                    Colaborei ativamente com equipes de design e
                    desenvolvimento, assegurando a qualidade e a coesão em cada
                    etapa dos projetos.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="info info-diferente">
                  <h3 className="title">
                    Sistemas e Mídias Digitais - UFC | 2017 - 2024
                  </h3>
                  <p>
                    Graduação em{" "}
                    <span className="highlight-diferente">
                      Sistemas e Mídias Digitais
                    </span>{" "}
                    pela Universidade Federal do Ceará (2017-2024). Formação
                    voltada para o desenvolvimento de sistemas multimídia, com
                    ênfase em web, dispositivos móveis, jogos digitais e
                    ferramentas educacionais.{" "}
                    <span className="highlight-diferente">
                      Atuação diversificada em áreas como animação
                    </span>
                    , modelagem 3D, TV digital, mídias sociais, e engenharia de
                    software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/5585994283128?text=Diga-me%20o%20que%20precisa%20e%20retorno%20assim%20que%20poss%C3%ADvel!%20Obrigado."
          data-aos="fade-in"
          data-aos-delay="600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Entre em Contato</button>
        </a>
      </section>

      <section id="projetos" className="Projetos">
        <h1 data-aos="zoom-in">Últimos Projetos</h1>
        <Swiper
          data-aos="zoom-in"
          data-aos-delay="300"
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true} // Adicione esta linha para habilitar as setas
          modules={[Pagination, Navigation]} // Inclua o módulo de navegação
          className="Meu-Swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/Ferrovia.jpg"
                alt="Projeto 1"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Ferrovia | MIS</h4>
                <p>
                  Exposição sobre a história das ferrovias no Ceará, com fotos e
                  depoimentos.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/Farkas.jpg"
                alt="Projeto 2"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Farkas | MIS</h4>
                <p>
                  Homenagem ao fotógrafo Thomaz Farkas, retratando o Brasil em
                  transformação.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/Metashop.jpg"
                alt="Projeto 3"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Metashop</h4>
                <p>
                  Plataforma de e-commerce personalizada com IA para otimização
                  de vendas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/Projeto_Cadastro_UFC.jpg"
                alt="Projeto 4"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Cadastro Horas | UFC</h4>
                <p>
                  Sistema de gestão de horas acadêmicas e profissionais da UFC.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/Mavic.jpg"
                alt="Projeto 5"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Mavic Conceito</h4>
                <p>
                  Loja especializada em cadeiras de design moderno e ergonômico
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/WaveUs.jpg"
                alt="Projeto 6"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>WaveUs</h4>
                <p>
                  Plataforma de eventos e ingressos com integração online e
                  presencial.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img
                src="./Imagens/DR_Saude.jpg"
                alt="Projeto 7"
                className="slide-image"
              />
              <div className="slide-text">
                <h4>Portal Dr. Saúde</h4>
                <p>
                  Plataforma informativa com artigos de saúde, dicas de
                  bem-estar e orientações médicas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section
        data-aos="fade-in"
        data-aos-delay="300"
        id="faq"
        className="faq__wrapper"
      >
        <h1>Algumas Dúvidas</h1>

        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <i
                className={`fa-solid fa-chevron-down chevron ${
                  activeIndex === index ? "active" : ""
                }`}
              ></i>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </section>

      <section id="Contrate-me" className="contrate-me">
        <h4 data-aos="fade-in">Vamos Conversar!</h4>
        <p data-aos="fade-in" data-aos-delay="300">
          Agende uma <span>sessão gratuita de 15 minutos</span> onde
          discutiremos<br></br> seu projeto, suas questões e como resolvê-las.
        </p>
        <a
          href="https://wa.me/5585994283128?text=Diga-me%20o%20que%20precisa%20e%20retorno%20assim%20que%20poss%C3%ADvel!%20Obrigado."
          data-aos="fade-in"
          data-aos-delay="600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Agendar Sessão</button>
        </a>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="row social-media">
            <a
              href="https://www.linkedin.com/in/erick-de-oliveira-733ba174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/arier_edvolikice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/ArierEdvolikice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a
                  href="https://wa.me/5585994283128?text=Diga-me%20o%20que%20precisa%20e%20retorno%20assim%20que%20poss%C3%ADvel!%20Obrigado."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contate-me
                </a>
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#sobremim">Sobre Mim</a>
              </li>
              <li>
                <a href="#timeline">Educação e Experiência</a>
              </li>
              <li>
                <a href="#projetos">Últimos Projetos</a>
              </li>
            </ul>
          </div>

          <div className="row">
            Erick de Oliveira | Copyright © 2024 | Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
