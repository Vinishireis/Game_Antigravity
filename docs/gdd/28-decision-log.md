Projeto: Núcleo em Cerco
Documento: 28-Decision Log
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# REGISTRO DE DECISÕES CRÍTICAS

### DEC-001
- **Título:** Perspectiva Visual e 2D vs 3D.
- **Problema:** Assets 3D de alta resolução derretem a memória do WebBrowser. Sprites 2D são caros de animar em dezenas de ângulos pro isométrico.
- **Opções:** (A) 2D Pixel Art Top-Down puro. (B) 3D Low-Poly Isométrico. (C) 2.5D com Billboards.
- **Decisão:** (B/C) 3D Low-poly de geometria super simples focado em Instancing, utilizando cores flat (Stylized).
- **Justificativa:** Facilita a vida dos animadores. Os Swarms podem ser renderizados usando uma única mesh e alterando apenas shaders.
- **Status:** DECIDIDO.

### DEC-002
- **Título:** Divisão de Economia Multiplayer
- **Problema:** Dinheiro compartilhado gera brigas (O "Noob" gasta o dinheiro do "Pro"). Dinheiro isolado impede a cooperação.
- **Opções:** Compartilhado Total, Isolado Total, Híbrido.
- **Decisão:** HÍBRIDO (Bolsos Individuais + Banco Central do Core).
- **Justificativa:** Cria uma "Cota" de proteção para a equipe, garantindo que mesmo se alguém falhar na gestão do seu próprio bolso, o time pode salvar o jogo sacando do Banco.
- **Status:** VALIDAR EM PLAYTEST.

### DEC-003
- **Título:** Pause Automático (Web Focus)
- **Problema:** Jogadores clicam fora do canvas e o jogo continua rodando, matando a partida.
- **Opções:** Ignorar, ou Forçar Pause Global.
- **Decisão:** Forçar Pause Global ao detectar `window.onblur`.
- **Justificativa:** É imperativo para qualidade de vida (UX) na web, especialmente em PC/Desktop.
- **Status:** DECIDIDO.
