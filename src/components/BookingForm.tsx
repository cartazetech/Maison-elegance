import { useId, useState, type FormEvent } from 'react'
import { procedures } from '../data/content'
import { ArrowIcon } from './SiteLayout'

// Número apresentado na referência visual; confirmar com a clínica antes de publicar.
const conciergeNumber = '551130889200'

export default function BookingForm() {
  const id = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [procedure, setProcedure] = useState('')
  const [preference, setPreference] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      'Olá, gostaria de solicitar uma consulta na Maison Élégance.',
      `Nome: ${name.trim()}`,
      `WhatsApp para retorno: ${phone.trim()}`,
      `Interesse: ${procedure || 'Avaliação inicial'}`,
      preference.trim() ? `Preferência de horário: ${preference.trim()}` : '',
    ].filter(Boolean).join('\n')

    window.location.assign(`https://wa.me/${conciergeNumber}?text=${encodeURIComponent(message)}`)
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={`${id}-name`}>Nome completo</label>
          <input id={`${id}-name`} autoComplete="name" name="name" placeholder="Como podemos chamar você?" required minLength={2} value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor={`${id}-phone`}>WhatsApp para contato</label>
          <input id={`${id}-phone`} autoComplete="tel" inputMode="tel" name="phone" type="tel" placeholder="(11) 99999-9999" required minLength={10} value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor={`${id}-procedure`}>Protocolo de interesse</label>
        <select id={`${id}-procedure`} name="procedure" value={procedure} onChange={(event) => setProcedure(event.target.value)}>
          <option value="">Quero uma avaliação inicial</option>
          {procedures.map((item) => <option key={item.slug} value={item.title}>{item.title}</option>)}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor={`${id}-preference`}>Preferência de horário</label>
        <textarea id={`${id}-preference`} name="preference" rows={3} maxLength={180} placeholder="Conte-nos o melhor dia ou período para conversar." value={preference} onChange={(event) => setPreference(event.target.value)} />
      </div>
      <button className="button button-primary form-submit" type="submit">Solicitar consulta pelo WhatsApp <ArrowIcon diagonal /></button>
      <p className="form-disclaimer">Ao continuar, você abrirá o WhatsApp para confirmar o envio. Compartilhe informações clínicas apenas durante o atendimento privado.</p>
    </form>
  )
}
