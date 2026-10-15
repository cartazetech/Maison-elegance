import { Link } from 'react-router'

function NotFound() {
  return (
    <main id="conteudo" className="not-found page-container">
      <p className="eyebrow">404 · Página não encontrada</p>
      <h1>Vamos voltar ao começo.</h1>
      <p>O endereço que você buscou não está disponível. A experiência Maison continua na página inicial.</p>
      <Link className="button button-primary" to="/">Voltar ao início</Link>
    </main>
  )
}

export default NotFound
