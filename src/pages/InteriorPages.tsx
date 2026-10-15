import { useState } from 'react'
import { Link, useParams } from 'react-router'
import BookingForm from '../components/BookingForm'
import { ArrowIcon } from '../components/SiteLayout'
import { experiencePillars, gallery, procedures, type ProcedureCategory } from '../data/content'
import NotFound from './NotFound'

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="inner-intro page-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
}

export function ProceduresPage() {
  const [category, setCategory] = useState<'todos' | ProcedureCategory>('todos')
  const visible = category === 'todos' ? procedures : procedures.filter((item) => item.category === category)
  const categories: { value: 'todos' | ProcedureCategory; label: string }[] = [
    { value: 'todos', label: 'Todos' }, { value: 'facial', label: 'Facial' }, { value: 'corporal', label: 'Corporal' },
    { value: 'longevidade', label: 'Longevidade' }, { value: 'rituais', label: 'Rituais' },
  ]
  return <main id="conteudo" className="inner-page">
    <PageIntro eyebrow="Cuidado sob medida" title="Nossos protocolos" description="Um ponto de partida para descobrir o cuidado que combina com o seu momento. A indicação final acontece sempre em consulta individual." />
    <section className="page-container inner-section" aria-label="Lista de protocolos">
      <div className="filter-list page-filters" role="group" aria-label="Filtrar protocolos">{categories.map((item) => <button key={item.value} type="button" aria-pressed={category === item.value} className={`filter-button ${category === item.value ? 'is-active' : ''}`} onClick={() => setCategory(item.value)}>{item.label}</button>)}</div>
      <div className="procedure-grid" aria-live="polite">{visible.map((item) => <article className="procedure-card" key={item.slug}>
        <Link className="procedure-image" to={`/procedimentos/${item.slug}`}><img src={item.image} alt={item.imageAlt} loading="lazy" /><span>{item.eyebrow}</span></Link>
        <div className="procedure-content"><div className="procedure-meta"><span>{item.categoryLabel}</span><span>{item.duration}</span></div><h2>{item.title}</h2><p>{item.summary}</p><ul>{item.details.slice(0, 2).map((detail) => <li key={detail}>{detail}</li>)}</ul><Link className="card-link" to={`/procedimentos/${item.slug}`}>Conhecer detalhes <ArrowIcon diagonal /></Link></div>
      </article>)}</div>
    </section>
    <div className="inner-cta page-container"><p>Uma conversa esclarece o melhor caminho.</p><Link className="button button-primary" to="/contato">Agendar avaliação <ArrowIcon diagonal /></Link></div>
  </main>
}

export function ProcedureDetailPage() {
  const { slug } = useParams()
  const item = procedures.find((procedure) => procedure.slug === slug)
  if (!item) return <NotFound />

  return <main id="conteudo" className="inner-page detail-page">
    <div className="page-container detail-back"><Link className="text-link" to="/procedimentos">← Todos os protocolos</Link></div>
    <section className="page-container detail-hero">
      <div className="detail-copy"><p className="eyebrow">{item.categoryLabel} · {item.eyebrow}</p><h1>{item.title}</h1><p className="detail-summary">{item.summary}</p><Link className="button button-primary" to="/contato">Solicitar avaliação <ArrowIcon diagonal /></Link></div>
      <div className="detail-image"><img src={item.image} alt={item.imageAlt} /></div>
    </section>
    <section className="page-container detail-information"><div><p className="eyebrow">O protocolo</p><h2>Planejado para você.</h2></div><div><p>{item.description}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><p className="detail-note">A duração, as indicações e eventuais cuidados são definidos após avaliação profissional.</p></div></section>
    <div className="inner-cta page-container"><p>O primeiro passo é uma boa conversa.</p><Link className="button button-primary" to="/contato">Conversar com o concierge <ArrowIcon diagonal /></Link></div>
  </main>
}

export function AboutPage() {
  return <main id="conteudo" className="inner-page">
    <PageIntro eyebrow="Sobre a Maison" title="Beleza que respeita histórias" description="A Maison Élégance reúne cuidado médico, escuta e hospitalidade em uma experiência reservada no coração dos Jardins." />
    <section className="page-container editorial-split inner-section"><div className="editorial-photo"><img src="/images/hero-consultation.webp" alt="Atendimento individual em consultório de estética" /></div><div className="editorial-copy"><p className="eyebrow">Nossa filosofia</p><h2>Você continua sendo você.</h2><p>Valorizamos decisões bem explicadas, objetivos possíveis e resultados que preservam a expressão natural. A consulta é o espaço para compreender o que você busca e construir um plano individual.</p><p>O ambiente, a equipe e o ritmo da visita foram pensados para que cada pessoa se sinta à vontade para conversar, perguntar e escolher.</p><Link className="text-link" to="/experiencias">Conheça a experiência <ArrowIcon diagonal /></Link></div></section>
    <section className="about-values section-pad"><div className="page-container"><p className="eyebrow">O que orienta cada encontro</p><div className="values-grid"><div><h3>Escuta antes de indicar</h3><p>Histórico, expectativas e contexto guiam o plano de cuidado.</p></div><div><h3>Ciência com critério</h3><p>Protocolos e tecnologias são considerados caso a caso.</p></div><div><h3>Discrição em cada etapa</h3><p>Um percurso reservado, da chegada ao acompanhamento.</p></div></div></div></section>
    <div className="inner-cta page-container"><p>Conheça a Maison no seu tempo.</p><Link className="button button-primary" to="/contato">Agendar uma visita <ArrowIcon diagonal /></Link></div>
  </main>
}

export function GalleryPage() {
  return <main id="conteudo" className="inner-page">
    <PageIntro eyebrow="Galeria & espaço" title="Um lugar para respirar" description="Privacidade, materiais acolhedores e luz natural compõem uma experiência que começa antes da consulta." />
    <section className="page-container inner-section"><div className="gallery-grid gallery-page-grid">{gallery.map((item, index) => <figure className={`gallery-tile gallery-tile-${index + 1}`} key={item.title}><img src={item.image} alt={item.alt} loading="lazy" /><figcaption className="gallery-overlay"><small>{item.subtitle}</small><strong>{item.title}</strong></figcaption></figure>)}</div><p className="image-note">Imagens conceituais ilustrativas da atmosfera proposta para a Maison Élégance.</p></section>
    <section className="page-container gallery-story"><div><p className="eyebrow">Além da arquitetura</p><h2>Seu tempo tem espaço aqui.</h2></div><p>Da recepção às suítes, cada ambiente é pensado para oferecer uma visita discreta e sem pressa. O concierge orienta os detalhes antes da chegada.</p></section>
    <div className="inner-cta page-container"><p>Planeje seu primeiro encontro.</p><Link className="button button-primary" to="/contato">Solicitar consulta <ArrowIcon diagonal /></Link></div>
  </main>
}

export function ExperiencesPage() {
  return <main id="conteudo" className="inner-page">
    <PageIntro eyebrow="A experiência Maison" title="O cuidado está nos detalhes" description="Uma jornada que combina atenção clínica, respeito ao seu tempo e uma forma mais serena de viver a estética." />
    <section className="page-container experience-page-section inner-section"><div className="experience-page-photo"><img src="/images/recovery-suite.webp" alt="Ambiente privativo de descanso" /></div><div className="experience-page-list">{experiencePillars.map((item) => <article key={item.title}><div><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div></section>
    <section className="page-container experience-statement"><p>“O melhor resultado é aquele que continua a parecer seu.”</p><span>Filosofia de cuidado Maison Élégance</span></section>
    <div className="inner-cta page-container"><p>Comece por uma conversa.</p><Link className="button button-primary" to="/contato">Agendar consulta <ArrowIcon diagonal /></Link></div>
  </main>
}

export function ContactPage() {
  return <main id="conteudo" className="inner-page contact-page">
    <PageIntro eyebrow="Concierge privado" title="O primeiro encontro começa aqui" description="Compartilhe seus dados de contato e preferência de horário. A mensagem será aberta no WhatsApp para você confirmar o envio." />
    <section className="page-container booking-panel contact-panel"><div className="booking-main"><h2>Solicite sua consulta</h2><p className="booking-lead">A equipe conversará com você sobre disponibilidade e próximos passos, sempre com discrição.</p><BookingForm /></div><aside className="booking-aside"><p className="eyebrow">Nos Jardins, São Paulo</p><h3>Visite a Maison.</h3><p>Alameda Gabriel Monteiro da Silva<br />Jardins · São Paulo, SP</p><div className="booking-aside-image"><img src="/images/vip-suite.webp" alt="Lounge privativo de atendimento" /></div><p className="aside-note">Atendimento mediante agendamento. Confirme o endereço completo e as orientações de chegada com a equipe.</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Alameda+Gabriel+Monteiro+da+Silva+Jardins+Sao+Paulo" target="_blank" rel="noreferrer">Ver região no mapa <ArrowIcon diagonal /></a></aside></section>
  </main>
}
