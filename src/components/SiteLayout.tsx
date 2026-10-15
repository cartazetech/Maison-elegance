import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

const navigation = [
  { to: '#inicio', label: 'Início' },
  { to: '#procedimentos', label: 'Procedimentos' },
  { to: '#espaco', label: 'Espaço' },
  { to: '#experiencias', label: 'Experiências' },
  { to: '#contato', label: 'Contato' },
]

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="Maison Élégance — início">
      <span className="brand-mark" aria-hidden="true">M</span>
      <span className="brand-copy">
        <strong>Maison Élégance</strong>
        <small>Clinique esthétique</small>
      </span>
    </Link>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 80)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal" id="main-navigation">
            {navigation.map((item) => <a key={item.to} href={item.to} onClick={() => setMenuOpen(false)} className="nav-link">{item.label}</a>)}
            <a className="mobile-reserve" href="#contato" onClick={() => setMenuOpen(false)}>Agendar consulta <ArrowIcon diagonal /></a>
          </nav>
          <div className="nav-actions">
            <a className="button button-primary nav-reserve" href="#contato">Reserva VIP</a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-controls="main-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="footer-inner page-container">
          <div className="footer-intro">
            <Brand light />
            <p>Estética médica pensada para revelar a beleza que já é sua, com ciência, discrição e tempo para cuidar.</p>
            <span className="footer-note">Imagens ilustrativas. Protocolos sujeitos à avaliação individual.</span>
          </div>
          <div className="footer-links">
            <span className="footer-heading">Explorar</span>
            {navigation.map((item) => <a key={item.to} href={item.to}>{item.label}</a>)}
          </div>
          <div className="footer-contact">
            <span className="footer-heading">Maison Jardins</span>
            <p>Alameda Gabriel Monteiro da Silva<br />Jardins · São Paulo, SP</p>
            <a href="#contato">Planejar uma visita <ArrowIcon diagonal /></a>
            <p className="footer-small">Atendimento mediante agendamento.</p>
          </div>
        </div>
        <div className="footer-bottom page-container">
          <span>© {new Date().getFullYear()} Maison Élégance. Todos os direitos reservados.</span>
          <span>Desenvolvido por Cartaze Tech</span>
        </div>
      </footer>
    </>
  )
}
