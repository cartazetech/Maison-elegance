# Product Requirements Document (PRD) & Briefing Executivo
## Projeto: Plataforma Digital Maison Élégance — Clínica de Estética Médica 5 Estrelas

---

### 1. Visão Geral do Produto & Sumário Executivo
- **Nome do Projeto:** Maison Élégance Digital Experience
- **Posicionamento:** Clínica de estética médica, dermatologia e longevidade feminina de altíssimo padrão (padrão 5 estrelas / hospitalidade de luxo europeia).
- **Missão da Plataforma:** Traduzir a atmosfera sensorial, a discrição médica, a exclusividade e a sofisticação da clínica física para um ecossistema digital que converta visitantes exigentes em pacientes VIP por meio de atendimento concierge personalizado.

---

### 2. Público-Alvo & Personas
- **Público Primário:** Mulheres das classes A/AA+ (30–65 anos), executivas, empresárias, investidoras e profissionais liberais que buscam rejuvenescimento natural, bioestimulação, laser avançado e bem-estar privativo.
- **Dores & Expectativas do Usuário:**
  - **Exigência de Discrição & Privacidade:** Recusa de salas de espera cheias ou exposição da imagem pessoal.
  - **Foco em Naturalidade:** Pavor do aspecto artificial/"overfilled"; valorização de resultados sutis e harmoniosos.
  - **Atendimento de Hospitalidade:** Experiência com alto nível de cortesia, sem atritos e com concierge exclusivo.
  - **Eficiência de Tempo:** Facilidade em solicitar contato e agendamento sem longos questionários.

---

### 3. Identidade Visual & Diretrizes de Design (Design Tokens)
- **Design System:** *Haute Esthétique* (`LIGHT` mode com acabamento sensorial acolhedor).
- **Paleta Cromática:**
  - Primária & Destaque: Champanhe e Dourado Acetinado (`#c5a880`), Bronze discreto e Âmbar suave.
  - Fundos & Superfícies: Off-white perolado (`#fff8f6`), Travertino claro (`#fcf1ef`), Mármore suave (`#e2d8d6`).
  - Textos & Contrastes: Carvão profundo e Espresso escuro para contraste suave e leitura relaxante.
- **Tipografia:**
  - Títulos & H1/H2: *Playfair Display* (serifa editorial elegante, refinamento e nobreza).
  - Textos Corridos & Interfaces: *Plus Jakarta Sans* ou sans-serif moderna de alta legibilidade.
- **Componentes-Chave de Layout:**
  - **Menu Flutuante Glassmorphism:** Posicionado a 50px do topo, acabamento translúcido (`backdrop-blur-md`), cantos arredondados (`rounded-2xl`), bordas finas semi-transparentes e microinterações de hover suaves.
  - **Hero Imersivo:** Integração visual contínua com fotografia de iluminação dourada natural e detalhes em mármore.
  - **Grid de Procedimentos:** Cards com imagens em alta definição, badges sutis de tecnologia e tags de duração/recuperação.
  - **Galeria Arquitetônica:** Apresentação das suítes privativas, lounge VIP e salas de laser.
  - **Prova Social Editorial:** Depoimentos qualificados com tipografia sóbria e avaliação 5 estrelas.

---

### 4. Arquitetura de Informação & Mapa do Site
1. **Header & Navegação Global:**
   - Logomarca singular estilizada (*Maison Élégance*).
   - Links: Início, Procedimentos, Sobre Nós, Galeria & Espaço, Depoimentos, Contato.
   - CTA Primário: Botão "Reserva VIP" / Agendamento Concierge com ícone de perfil privativo.
2. **Hero Section (Acolhimento & Filosofia):**
   - Tagline de impacto: *"A arte da beleza atemporal e do rejuvenescimento sublime"*.
   - Indicadores de excelência (100% Personalizado, 12+ Suítes Privativas, 5.0 Avaliação).
   - Card de destaque com credenciais de discrição e sala individual.
3. **Menu de Tratamentos & Protocolos:**
   - Harmonização Facial & Bioestimulação de Colágeno.
   - Tecnologia Laser & Remodelamento Corporal.
   - Lifting Não-Cirúrgico & Longevidade Cutânea.
   - Spas & Rituais de Descompressão Pós-Protocolo.
4. **Arquitetura Sensorial & Conforto (Espaço Físico):**
   - Diferenciais: Entrada privativa/isolamento acústico, Aromas botânicos exclusivos, Serviço de Concierge.
   - Tour visual pelas instalações (Suíte VIP, Salas de Alta Precisão, Suítes de Relaxamento).
5. **Depoimentos & Experiência das Pacientes:**
   - Casos e relatos focados em segurança médica, acolhimento e naturalidade.
6. **Conversão / Agendamento Concierge VIP:**
   - Formulário ágil: Nome, WhatsApp de contato, Protocolo de interesse e preferências de data/horário.
   - Políticas de privacidade médica e conformidade com LGPD.
   - Informações de localização (Alameda Gabriel Monteiro da Silva, Jardins, SP) e Valet cortesia.
7. **Footer Institucional:**
   - Resumo da certificação médica, horários de atendimento privativo e links de navegação.

---

### 5. Requisitos Funcionais (FR)
- **FR-01 (Agendamento Concierge):** Formulário direto com validação de dados que despacha o lead prioritário para a equipe de atendimento via WhatsApp/CRM integrado em até 30 minutos.
- **FR-02 (Filtros de Procedimentos):** Capacidade de filtrar os tratamentos por categoria (*Todos*, *Facial*, *Corporal*, *Longevidade*).
- **FR-03 (Navegação Suave):** Âncoras suaves para rolagem direta nas seções de interesse a partir do menu flutuante.
- **FR-04 (Microinterações de Luxo):** Efeitos de hover delicados em links, cards de serviços e CTAs, sem excessos de animação que comprometam a sobriedade.

---

### 6. Requisitos Não-Funcionais (NFR)
- **NFR-01 (Performance & Carregamento):** Tempo de carregamento inferior a 1.5s com otimização webp/responsive de todas as imagens em alta resolução.
- **NFR-02 (Responsividade Absoluta):** Adaptação fluida para dispositivos móveis com menu gaveta elegante e hierarquia touch-friendly.
- **NFR-03 (Segurança & Privacidade):** Total conformidade com a LGPD e sigilo médico ético, garantindo criptografia dos dados enviados no agendamento.
- **NFR-04 (Acessibilidade & Contraste):** Conformidade WCAG AA para contraste cromático dos textos elegantes sobre os tons terrosos e perolados.

---

### 7. Roadmap & Próximos Passos
- **Fase 1 (Atual):** Landing page desktop de conversão VIP e validação do design visual 5 estrelas.
- **Fase 2:** Desenvolvimento da versão mobile dedicada (layout 390px adaptado).
- **Fase 3:** Páginas internas detalhadas para cada procedimento com antes/depois editorial e cronograma de sessões.
- **Fase 4:** Integração com sistema de agendamento em tempo real e área exclusiva da paciente (anamnese digital e pós-procedimento).