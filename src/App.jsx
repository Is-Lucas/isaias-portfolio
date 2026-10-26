import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2, Database, Network, Wrench, GraduationCap, Laptop, Rocket, Mail, CodeXml as Github } from 'lucide-react';


function Fade({children,className=''}) { const reduced=useReducedMotion(); return <motion.div className={className} initial={reduced?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-30px'}} transition={{duration:.4}}>{children}</motion.div> }

function SectionTitle({ label, children, sub }) {
  return (
    <div className="title">
      <small>{label}</small>
      <h2>{children}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}


const navItems = [
  ['Início', 'home'],
  ['Sobre mim', 'sobre'],
  ['Habilidades', 'habilidades'],
  ['Projetos', 'projetos'],
  ['Experiência', 'experiencia'],
  ['Contato', 'contato'],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <a href="#home" className="brand">
          ISAIAS <b>SILVA</b>
        </a>

        <div className="navlinks">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}

          <a href="https://github.com/Is-Lucas" target="_blank" rel="noopener noreferrer" aria-label="Meu GitHub"><Github size={18}/></a>
        </div>

        <button
          className="hamb"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile">
          {navItems.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}


function Hero(){
    return <section id="home" className="hero">
        <div className="orb"/>
        <div className="wrap heroGrid">
            <Fade>
                <span className="status"><i/> Em evolução constante</span>
                <h1>Olá, eu sou<br/><em>Isaías.</em></h1>
                <h3>Desenvolvedor em formação <b>&</b> Técnico em TI</h3>
                <p>Transformo ideias em soluções digitais, unindo desenvolvimento, tecnologia e vontade de aprender.</p>
                <div className="actions">
                    <a href="#projetos" className="primary">Ver projetos <ArrowUpRight size={16}/></a>
                    <a href="#contato" className="secondary">Entre em contato</a>
                </div>
                <div className="stack">React · JavaScript · HTML · CSS · SQL</div>
            </Fade>
            <Fade>
                <div className="terminal">
                    <div className="dots">
                        <i/>
                        <i/>
                        <i/>
                    </div>
                    <code>
                        <span>const</span> developer = {'{'}<br/>
                        &nbsp;name: <b>'Isaias Silva'</b>,<br/>
                        &nbsp;mindset: <b>'build & learn'</b>,<br/>
                        &nbsp;areas: [<br/>
                        &nbsp;&nbsp;<i>'development'</i>,<br/>
                        &nbsp;&nbsp;<i>'infrastructure'</i><br/>
                        &nbsp;],<br/>
                        &nbsp;curious: <span>true</span><br/>
                        {'}'};
                    </code>
                    <img className="gengar-sprite" src="https://play.pokemonshowdown.com/sprites/gen5ani/gengar.gif" alt="Gengar animado"/><div className="eyes">
                        <i/>
                        <i/>
                    </div>
                </div>
            </Fade>
        </div>
    </section>
}


const timeline = [
  {
    year: '2022',
    title: 'Discabos',
    description:
      'Início da trajetória profissional com estágio em suporte técnico, atendimento e apoio em equipamentos de áudio e vídeo.',
    type: 'Experiência',
  },
  {
    year: '2023',
    title: 'Konecta',
    description:
      'Experiência como Jovem Aprendiz Administrativo, com suporte administrativo e envio de relatórios de monitoramento.',
    type: 'Experiência',
  },
  {
    year: '2024',
    title: 'Crowe Macro Brazil',
    description:
      'Entrada na área de TI como Auxiliar de Suporte Técnico, atuando com atendimento, infraestrutura, Windows e Help Desk.',
    type: 'Experiência',
  },
  {
    year: '2026',
    title: 'Técnico em Desenvolvimento de Sistemas',
    description:
      'Atualmente cursando Desenvolvimento de Sistemas no Senac, com foco em programação e desenvolvimento web.',
    type: 'Formação',
  },
  {
    year: '2027',
    title: 'Engenharia de Software',
    description:
      'Próximo passo da formação acadêmica, com transferência de curso em andamento.',
    type: 'Próximo passo',
  },
];

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="wrap">
        <SectionTitle label="01 / SOBRE MIM">
          Tecnologia para mim vai além do código.
        </SectionTitle>

        <div className="about-content">
          <Fade>
            <div className="about-intro">
              <span className="about-label">MINHA TRAJETÓRIA</span>

              <p className="about-highlight">
                Estou construindo uma formação que conecta
                <strong> desenvolvimento</strong> e
                <strong> infraestrutura de TI</strong>.
              </p>

              <div className="about-text">
                <p>
                  Sou estudante de <strong>Desenvolvimento de Sistemas</strong>{' '}
                  e estou em processo de transferência para iniciar{' '}
                  <strong>Engenharia de Software</strong>.
                </p>

                <p>
                  Tenho interesse tanto em desenvolvimento quanto em
                  infraestrutura e suporte de TI. Gosto de aprender novas
                  tecnologias, resolver problemas e entender como as coisas
                  funcionam.
                </p>
              </div>

              <div className="about-interests">
                <span>Desenvolvimento</span>
                <span>Infraestrutura</span>
                <span>Suporte</span>
                <span>Aprendizado contínuo</span>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="about-timeline">
              <div className="timeline-line" />

              {timeline.map((item, index) => (
                <article className="timeline-item" key={`${item.year}-${item.title}`}>
                  <div className="timeline-marker">
                    <span className="timeline-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="timeline-dot" />
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-meta">
                      <span className="timeline-year">{item.year}</span>
                      <span className="timeline-type">{item.type}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}


const groups = [
  [Code2, 'Desenvolvimento', ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite']],
  [Database, 'Banco de dados', ['SQL', 'Modelagem de dados']],
  [Network, 'Infraestrutura', ['Redes', 'Cabeamento', 'Windows']],
  [Wrench, 'Outros', ['Suporte técnico', 'Troubleshooting', 'Git/GitHub', 'VS Code']],
];

function Skills() {
  return (
    <section id="habilidades" className="alt">
      <div className="wrap">
        <SectionTitle
          label="02 / HABILIDADES"
          sub="Ferramentas e áreas com as quais venho construindo conhecimento na prática."
        >
          Tecnologias que fazem parte do meu processo.
        </SectionTitle>

        <div className="skillgrid">
          {groups.map(([Icon, t, arr]) => (
            <Fade key={t}>
              <article className="card">
                <Icon size={20} />
                <h3>{t}</h3>
                <div>
                  {arr.map((a) => (
                    <span className="tag" key={a}>
                      {a}
                    </span>
                  ))}
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}


const experiences = [
  {
    period: 'nov/2024 – mai/2025',
    company: 'Crowe Macro Brazil',
    role: 'Auxiliar de Suporte Técnico em TI',
    description:
      'Atuação com suporte técnico presencial e remoto, instalação e configuração de Windows e softwares corporativos, monitoramento básico de redes, atendimento de chamados e organização da documentação de TI.',
    tags: [
      'Suporte técnico',
      'Windows',
      'Help Desk',
      'Redes',
      'Admin Center',
      'Infraestrutura',
    ],
  },
  {
    period: 'ago/2023 – set/2024',
    company: 'Konecta Brazil Outsourcing Ltda.',
    role: 'Jovem Aprendiz Administrativo',
    description:
      'Atuação em suporte administrativo, com envio de relatórios de monitoramento, organização de informações e apoio às rotinas da equipe.',
    tags: [
      'Suporte administrativo',
      'Relatórios',
      'Organização',
      'Monitoramento',
    ],
  },
  {
    period: 'jul/2022 – jan/2023',
    company: 'Discabos Comércio, Importação e Exportação de Acessórios Ltda.',
    role: 'Estagiário — Suporte Técnico',
    description:
      'Atuação com suporte técnico, supervisão das autorizações de retorno de materiais, gerenciamento de contatos, organização de transferências, apoio em equipamentos de áudio e vídeo e criação de folhas de dados.',
    tags: [
      'Suporte técnico',
      'Áudio e vídeo',
      'Atendimento',
      'Organização',
      'Dados',
    ],
  },
];

function Experience() {
  return (
    <section id="experiencia" className="alt">
      <div className="wrap">
        <SectionTitle
          label="04 / EXPERIÊNCIA"
          sub="Minha trajetória profissional e as experiências que ajudaram a construir minha base técnica."
        >
          Experiência que virou base técnica.
        </SectionTitle>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <Fade key={`${experience.company}-${experience.period}`}>
              <article className="experience-item">
                <div className="experience-marker">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <span className="experience-period">
                        {experience.period}
                      </span>
                      <h3>{experience.role}</h3>
                      <strong>{experience.company}</strong>
                    </div>
                  </div>

                  <p>{experience.description}</p>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}


const items = [
  [
    GraduationCap,
    'Desenvolvimento de Sistemas',
    'Curso técnico · Senac · jun/2026–dez/2027 (conclusão prevista)',
  ],
  [
    Laptop,
    'Engenharia de Software',
    'Transferência de curso em andamento · início previsto para 2027',
  ],
  [
    Rocket,
    'Foco atual',
    'Desenvolvimento web, React, JavaScript, infraestrutura e novas tecnologias de TI',
  ],
];

function CurrentlyStudying() {
  return (
    <section id="estudos">
      <div className="wrap">
        <SectionTitle label="05 / AGORA">
          O que estou fazendo atualmente?
        </SectionTitle>

        <div className="now">
          {items.map(([Icon, title, description]) => (
            <div className="nowitem" key={title}>
              <Icon />
              <div>
                <b>{title}</b>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <span>© 2026 Isaias Silva.</span>
        <span>Desenhado e desenvolvido com intenção.</span>
      </div>
    </footer>
  );
}



const projects = [
 {title:'Catálogo de Talentos — CodeCraft',desc:'Protótipo para apresentar desenvolvedores, praticar interfaces em React e organizar a apresentação de profissionais.',tech:['React','Vite','CSS'],url:'https://github.com/Is-Lucas/CodeCraft'},
 {title:'Desafios Web',desc:'Exercícios de HTML, CSS e JavaScript que fazem parte da minha evolução em lógica e desenvolvimento de interfaces.',tech:['HTML','CSS','JavaScript'],url:'https://github.com/Is-Lucas/Desafios-JS-HMTL-CSS'},
 {title:'Banco de Dados',desc:'Estudos de consultas SQL, organização de dados e fundamentos de modelagem relacional.',tech:['SQL','Modelagem'],url:'https://github.com/Is-Lucas/Banco-de-Dados'}
];
function Projects(){return <section id="projetos"><div className="wrap"><SectionTitle label="03 / PROJETOS">Algumas coisas que estou construindo.</SectionTitle>
<Fade><article className="codik-feature"><a className="codik-visual" href="https://codik-design.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visitar CODIK DESIGN"><img src="https://codik-design.vercel.app/codik-logo.png" alt="CODIK DESIGN"/><span>Design, código<br/>e <em>boas ideias.</em></span><small>FEITO A SEIS MÃOS ↗</small></a><div className="codik-detail"><small>PROJETO EM DESTAQUE · PUBLICADO</small><h3>CODIK DESIGN</h3><p>Estúdio independente de criação de sites que construo com Rodrigo e Nicolas. Juntamos design e desenvolvimento para dar presença digital aos negócios.</p><p><strong>Minha participação:</strong> criação e desenvolvimento em equipe, da ideia à apresentação do site.</p><div><span className="tag">Web design</span><span className="tag">Desenvolvimento web</span><span className="tag">Responsivo</span></div><a className="primary" href="https://codik-design.vercel.app" target="_blank" rel="noopener noreferrer">Conheça a CODIK <ArrowUpRight size={16}/></a></div></article></Fade>
<div className="projects">{projects.map((p,i)=><Fade key={p.title}><article className="project"><small>0{i+2}</small><h3>{p.title}</h3><p>{p.desc}</p><div>{p.tech.map(t=><span className="tag" key={t}>{t}</span>)}</div><footer><a href={p.url} target="_blank" rel="noopener noreferrer"><Github size={14}/>Ver código <ArrowUpRight size={14}/></a></footer></article></Fade>)}</div></div></section>}
function Contact(){return <section id="contato"><div className="wrap contact"><Fade><small>06 / CONTATO</small><h2>Vamos criar algo juntos?</h2><p>Estou aberto a projetos, oportunidades e conexões na área de tecnologia.</p><div className="social"><a href="https://github.com/Is-Lucas" target="_blank" rel="noopener noreferrer"><Github size={17}/>GitHub</a><a href="https://www.linkedin.com/in/isaias-correia-b15994275/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17}/></a><a href="mailto:isaiaslucasav@gmail.com"><Mail size={17}/>E-mail</a></div></Fade><Fade><div className="contact-direct"><h3>Uma ideia ou uma oportunidade?</h3><p>Me envie um e-mail para conversarmos.</p><a className="primary" href="mailto:isaiaslucasav@gmail.com">Falar comigo <ArrowUpRight size={16}/></a><p className="email-address">isaiaslucasav@gmail.com</p><div className="business-contact"><p>Precisa de um site para sua empresa?</p><a href="https://codik-design.vercel.app/#contato" target="_blank" rel="noopener noreferrer">Converse com a CODIK <ArrowUpRight size={14}/></a></div></div></Fade></div></section>}


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CurrentlyStudying />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
