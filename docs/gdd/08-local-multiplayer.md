Projeto: Núcleo em Cerco
Documento: 08-Local Multiplayer
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. VISÃO GERAL DO MULTIPLAYER LOCAL (COUCH CO-OP)
O jogo prioriza a experiência de 2 a 4 jogadores locais no mesmo dispositivo, jogando cooperativamente em uma tela compartilhada. Ele foi projetado para extrair comunicação espontânea (ex: "Upa a Tesla!", "Segura a direita!").

## 1.1 Identidade Visual dos Jogadores
Para garantir Legibilidade no caos:
- **Player 1:** Cor Azul, Símbolo (Círculo), Número P1.
- **Player 2:** Cor Vermelha, Símbolo (Quadrado), Número P2.
- **Player 3:** Cor Verde, Símbolo (Triângulo), Número P3.
- **Player 4:** Cor Amarela, Símbolo (Losango), Número P4.
*(Cores com opções daltônicas nas configurações)*.

---

# 2. SISTEMA DE ENTRADA (DROP-IN / LOBBY)
**Pressione qualquer botão para entrar.**
No Menu de Seleção ou na tela inicial do Local Lobby, qualquer controle (ou teclado, apenas para o P1) que enviar um input válido ocupará um dos slots disponíveis. 
Cada controle conectado assume um perfil (P1 a P4) e escolhe um personagem distinto.

---

# 3. CONTROLES E INPUT WEB
O jogo utilizará a Web Gamepad API. Suporte direcionado para controles Xbox, DualSense, DualShock e Genéricos.

**Mapeamento Inicial Recomendado (Gamepad):**
- **Left Stick / D-Pad:** Movimento.
- **Right Stick:** Mira.
- **RT (Right Trigger):** Ataque Básico.
- **LT (Left Trigger):** Modificador / Cancelar Ação Secundária.
- **A (South Button):** Interação / Reviver (Segurar) / Construir (Confirmar).
- **B (East Button):** Dash / Cancelar.
- **X (West Button):** Habilidade 1.
- **Y (North Button):** Habilidade 2.
- **LB (Left Bumper):** Abrir Menu Radial de Construção.
- **RB (Right Bumper):** Quick Ping System.
- **Start / Menu:** Pause.

*(Nota Web: P1 pode utilizar WASD/Mouse, onde LB pode ser Shift e RB pode ser o Scroll-click ou Alt, com RT sendo o Clique-esquerdo).*

---

# 4. DOWNED E REVIVE
A penalidade por chegar a 0 HP nunca deve ser "ficar minutos olhando a tela sem jogar".

- **Estado DOWNED:** O jogador cai, mas não morre. 
- **O que ele pode fazer?** Rastejar (movimento 80% mais lento), usar Ping, e possivelmente usar um disparo muito fraco ou uma habilidade de utilidade muito básica.
- **Mecânica de Revive:** Outro jogador deve se aproximar e segurar o botão de Interação por **3 segundos**. 
- **Sucesso:** O jogador levanta com 50% de HP.
- **Fail State Global:** Se TODOS os jogadores ficarem Downed, e o Núcleo for destruído, a partida acaba. Se o tempo da Wave passar e os inimigos recuarem (raro sem defesas), eles levantam no início da fase de Preparação.

---

# 5. DESCONEXÃO (DISCONNECT HANDLING)
Cenário comum na Web e com gamepads Bluetooth: a bateria acaba ou o navegador perde foco temporário.
- **Se um controle desconectar:** O jogo NÃO QUEBRA e não encerra a partida abruptamente.
- O personagem afetado entra em **Modo Seguro** (fica invulnerável, paralisa e uma redoma de stasis é colocada ao redor).
- **Mensagem na Tela:** "Controle P2 Desconectado. Pressione Start para reconectar".
- Outro controle pode assumir o slot livre se desejado, ou o jogador pode parear novamente e apertar o botão para voltar.

---

# 6. SISTEMA DE QUICK PING
Um menu radial rapidíssimo (semelhante ao sistema de marcação de Apex Legends) acionado no **RB**.
**Comandos/Gritos:**
- Ajuda! / Revive!
- Defender Aqui!
- Construir Aqui!
- Precisamos de Upgrade!
- Preciso de Energia!
- Cuidado / Boss!
- Indo para lá!
- Reparar Torre!
- Minha Ultimate está pronta!

---

# 7. PAUSE
- **Design:** Pause Global.
- Qualquer jogador pode solicitar apertando Start. Exibe a tela de Menu de Pause.
- Como é um jogo puramente cooperativo local, não há risco de griefing competitivo, porém, deve possuir uma pequena trava (1 segundo de cooldown) para evitar o botão ser esmagado sem querer e bugar o jogo.

---

# 8. SCALING MULTIPLAYER (WAVE DIRECTOR DYNAMIC)
Não é suficiente apenas multiplicar o HP dos inimigos com base no número de jogadores. O jogo deve continuar divertido.
- **1P:** Inimigos em quantidade normal, focados em 1-2 lanes, HPs normais. Dano das torres é a chave.
- **2P:** Aumento na quantidade (Swarmers), lanes adicionais ativadas, alguns inimigos normais promovidos para Elites.
- **3P:** Inimigos com mecânicas de defesa (Shields) mais frequentes, obrigando a coordenação.
- **4P:** Caos Absoluto. Mais inimigos, múltiplas lanes agressivas, aumento de HP de elites e mecânicas adicionais em chefes. O grupo de 4 tem muito controle de mapa; portanto, o mapa deve puni-los caso todos corram para o mesmo lado ao invés de se dividirem.
