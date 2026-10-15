import { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm'
import { ArrowIcon } from '../components/SiteLayout'
import { experiencePillars, gallery, procedures, type ProcedureCategory } from '../data/content'

type Filter = 'todos' | ProcedureCategory
const filters: { value: Filter; label: string }[] = [
  { value: 'todos', label: 'Todos' }, { value: 'facial', label: 'Facial' },
  { value: 'corporal', label: 'Corporal' }, { value: 'longevidade', label: 'Longevidade' },
  { value: 'rituais', label: 'Rituais' },
]

function Home() {
  const [filter, setFilter] = useState<Filter>('todos')
  const visibleProcedures = filter === 'todos' ? procedures : procedures.filter((item) => item.category === filter)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.08 })
    document.documentElement.classList.add('js-motion')
    elements.forEach((element) => observer.observe(element))
    return () => { observer.disconnect(); document.documentElement.classList.remove('js-motion') }
  }, [])

  return <main id="conteudo">
    <section className="hero page-container" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>Maison Élégance · Jardins</p>
          <h1 id="hero-title" data-reveal>A arte da beleza <span>atemporal.</span></h1>
          <p className="hero-description" data-reveal>Dermatologia e estética médica para quem busca rejuvenescimento sutil, cuidado individual e discrição em cada encontro.</p>
          <div className="hero-actions" data-reveal>
            <a className="button button-primary" href="#contato">Agendar consulta <ArrowIcon diagonal /></a>
            <a className="text-link" href="#procedimentos">Descobrir protocolos <ArrowIcon /></a>
          </div>
          <div className="hero-stats" data-reveal aria-label="Destaques da clínica">
            <div><strong>100%</strong><span>Personalizado</span></div><div><strong>12+</strong><span>Suítes privativas</span></div><div><strong>5.0</strong><span>Avaliação</span></div>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-image-wrap"><img src="/images/hero-consultation.webp" width="1536" height="1024" alt="Especialista conversa com paciente em sala privativa de estética" fetchPriority="high" /></div>
          <div className="hero-caption-card"><span className="caption-dot" /><span className="caption-title">Um encontro só seu</span><p>Escuta atenta, tempo reservado e um plano feito para a sua história.</p></div>
        </div>
      </div>
    </section>

    <section className="protocols-section section-pad" id="procedimentos" aria-labelledby="protocols-title">
      <div className="page-container">
        <div className="section-head protocols-head" data-reveal>
          <div><p className="eyebrow">Menu de cuidados exclusivos</p><h2 id="protocols-title">Protocolos de excelência</h2><p>Ciência e sensibilidade reunidas em jornadas de cuidado desenhadas para cada pessoa.</p></div>
          <div className="filter-list" role="group" aria-label="Filtrar protocolos">
            {filters.map((item) => <button key={item.value} type="button" className={`filter-button ${filter === item.value ? 'is-active' : ''}`} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>)}
          </div>
        </div>
        <div className="procedure-grid" aria-live="polite">
          {visibleProcedures.map((item) => <article className="procedure-card" key={item.slug}>
            <a className="procedure-image" href="#contato" aria-label={`Conhecer ${item.title}`}><img src={item.image} alt={item.imageAlt} loading="lazy" width="1536" height="1024" /><span>{item.eyebrow}</span></a>
            <div className="procedure-content"><div className="procedure-meta"><span>{item.categoryLabel}</span><span>{item.duration}</span></div><h3>{item.title}</h3><p>{item.summary}</p><ul>{item.details.slice(0, 2).map((detail) => <li key={detail}>{detail}</li>)}</ul><a className="card-link" href="#contato">Conhecer detalhes <ArrowIcon diagonal /></a></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="space-section section-pad" id="espaco" aria-labelledby="space-title">
      <div className="page-container">
        <div className="center-intro" data-reveal><p className="eyebrow">Arquitetura sensorial & conforto</p><h2 id="space-title">Um refúgio de bem-estar</h2><p>O espaço acolhe cada visita com a calma, a privacidade e a atenção que o cuidado merece.</p></div>
        <div className="amenities" data-reveal>
          <div><span className="amenity-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></svg></span><strong>Privacidade</strong><p>Ambientes reservados para uma experiência tranquila.</p></div>
          <div><span className="amenity-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21c-5-3-8-7-8-12 4 0 7 2 8 5 1-3 4-5 8-5 0 5-3 9-8 12Zm0-7V3" /></svg></span><strong>Atmosfera sensorial</strong><p>Materiais naturais, luz suave e tempo para desacelerar.</p></div>
          <div><span className="amenity-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="7" r="3" /><path d="M5 20c.5-4 3-6 7-6s6.5 2 7 6M3 12h3m12 0h3" /></svg></span><strong>Concierge</strong><p>Acolhimento individual em cada etapa da visita.</p></div>
        </div>
        <div className="gallery-grid">{gallery.map((item, index) => <a className={`gallery-tile gallery-tile-${index + 1}`} key={item.title} href="#contato" data-reveal><img src={item.image} alt={item.alt} loading="lazy" width="1536" height="1024" /><span className="gallery-overlay"><small>{item.subtitle}</small><strong>{item.title}</strong></span></a>)}</div>
        <div className="section-tail"><a className="text-link" href="#contato">Conheça nossos espaços <ArrowIcon diagonal /></a></div>
      </div>
    </section>

    <section className="experience-section section-pad" id="experiencias" aria-labelledby="experience-title">
      <div className="page-container">
        <div className="experience-intro" data-reveal><div><p className="eyebrow">A experiência Maison</p><h2 id="experience-title">Cuidar também é acolher.</h2></div><p>Uma visita pensada para unir conhecimento médico, naturalidade e a delicadeza de ser recebida pelo nome.</p></div>
        <div className="experience-grid">{experiencePillars.map((item) => <article className="experience-card" key={item.title} data-reveal><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="section-tail"><a className="text-link" href="#contato">Nossa filosofia de cuidado <ArrowIcon diagonal /></a></div>
      </div>
    </section>

    <section className="booking-section section-pad" id="contato" aria-labelledby="booking-title">
      <div className="page-container booking-panel">
        <div className="booking-main"><p className="eyebrow">Seu tempo, no centro de tudo</p><h2 id="booking-title">Reserve sua consulta exclusiva</h2><p className="booking-lead">Conte-nos como prefere começar. O concierge recebe sua mensagem pelo WhatsApp e orienta os próximos passos.</p><BookingForm /></div>
        <aside className="booking-aside"><p className="eyebrow">Maison Jardins · São Paulo</p><h3>Um endereço para desacelerar.</h3><p>Alameda Gabriel Monteiro da Silva<br />Jardins, São Paulo · SP</p><div className="booking-aside-image"><img src="/images/vip-suite.webp" alt="Sala reservada de consulta" loading="lazy" width="1536" height="1024" /></div><p className="aside-note">Visitas mediante agendamento. Endereço completo e orientações de chegada são confirmados pela equipe.</p><a className="text-link" href="#contato">Outras formas de contato <ArrowIcon diagonal /></a></aside>
      </div>
    </section>
  </main>
}

export default Home
