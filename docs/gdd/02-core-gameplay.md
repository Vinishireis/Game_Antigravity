Projeto: Núcleo em Cerco
Documento: 02-Core Gameplay
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. CORE LOOP
O ciclo fundamental de gameplay que se repete e mantém o engajamento do jogador baseia-se na transição entre Preparação, Execução e Recompensa.

1. **Analisar Mapa:** Os jogadores visualizam de onde os inimigos virão e o layout dos obstáculos.
2. **Coletar Energia:** Dividir os recursos iniciais para o time.
3. **Posicionar Defesas e Construir:** Sincronizar o tipo de torre e o posicionamento com os colegas.
4. **Iniciar Wave:** Gatilho manual ou tempo limite expira. A horda invade.
5. **Controlar Inimigos e Lutar:** Usar o Comandante para causar dano extra ou aplicar crowd control (Slow/Stun).
6. **Combinar Torres e Reparar:** Ajustar defesas ativamente, consertar torres com dano, adaptar gargalos.
7. **Sobreviver à Wave:** Limpar o mapa e proteger o Núcleo.
8. **Receber Recompensa:** Ganhar bônus de energia e progressão.
9. **Escolher Upgrades (Roguelite leve):** Escolher 1 de 3 upgrades de fim-de-onda, evoluindo a build do jogador.
10. **Repetir:** Enfrentar Waves mais difíceis até o Boss.
11. **Vitória e Progressão Meta:** Receber fragmentos para destravar heróis e mods.

---

# 2. LOOPS DE TEMPO (PACING)
Documentação da cadência exata do jogo, ditando o ritmo da experiência.

## 2.1 Loop de 5 Segundos (Reflexo e Ação)
- Desviar de um ataque inimigo (Dash).
- Atirar.
- Usar um ping ("Defendam aqui!").
- Reparar 1 torre danificada.

## 2.2 Loop de 30 Segundos (Tático)
- Identificar qual Lane está cedendo.
- Correr para o gargalo e usar uma Habilidade / Ultimate.
- Construir uma torre emergencial para tapar um buraco.
- Reviver um amigo que caiu.

## 2.3 Loop de 1 Minuto (Estratégico)
- A Wave chega ao seu auge e se encerra.
- A equipe respira e recebe a injeção econômica.
- Decidir (via chat ou voz): "Quem faz o upgrade agora? Você ou eu?".
- Seleção de Upgrade Roguelite leve (Escolha 1 de 3 buffs).

## 2.4 Loop de uma Wave (Aprox. 2 a 3 Minutos)
- O Wave Director envia uma combinação de Swarmers + Elites e, talvez, um Modificador Dinâmico (ex: Blackout em uma região).
- Os jogadores superam o desafio local.

## 2.5 Loop de uma Missão (Aprox. 20 a 35 Minutos)
- Enfrentar de 10 a 15 Waves.
- Adotar uma build completa.
- Batalha contra o Boss de mapa (Mecânica Única).
- Resultado: Vitória ou Tela de Defeat (Conexão Perdida).

## 2.6 Loop de Progressão (Sessões múltiplas)
- Completar mapas, farmar Fragmentos (recurso Meta).
- Desbloquear a próxima dificuldade (Veterano, Pesadelo).
- Desbloquear um novo Comandante ou uma nova Torre Experimental.

---

# 3. O COMANDANTE (AVATAR DO JOGADOR)
O princípio imutável é: **O Comandante não substitui as torres.** As torres devem dar o grosso do dano massivo; os heróis existem para controlar o caos e tapar os furos da estratégia.

**Verbos e Ações do Comandante:**
- **Andar/Correr:** Movimentação responsiva via direcional.
- **Dash (Esquiva):** Essencial para fugir de telegraphs de Bosses e ataques de área.
- **Atacar:** Ataque básico com arma do personagem (baixo dano sustentado, bom para finalizar ou aplicar debuff).
- **Interagir:** Usar painéis, pegar objetivos secundários (baterias).
- **Construir/Vender/Reparar:** Abre menu radial ou overlay para colocar estruturas usando Energia.
- **Usar Habilidades (Cooldown):** Skill 1, Skill 2, e Ultimate (Super).
- **Reviver (Revive):** Segurar botão perto de um aliado Downed.
- **Ping/Marcar:** Comunicação rápida sem voz.

**Movimentação:**
A movimentação será o aspecto central do *Game Feel*. Sem input lag, suporte perfeito a zonas mortas do gamepad, e *auto-aim* levemente magnético (soft-lock) para suavizar a mira em twin-stick, garantindo acessibilidade e ritmo fluído na Web.

---

# 4. A CÂMERA
- **Visão:** Isométrica / Top-Down (perspectiva em 3/4).
- **Estilo:** Compartilhada para o Multiplayer (não haverá Split-Screen no MVP).
- **Comportamento (Multiplayer):**
  - O sistema calcula o "centro de massa" dos jogadores vivos e aplica um Zoom Out dinâmico se a equipe se afastar.
  - Limites de Tela: A câmera possui uma *Safe Area*. Jogadores que tentarem sair muito do limite sofrerão uma pressão suave de barreira física, ou serão teleportados gentilmente para o grupo se estiverem impedindo o avanço (menos comum, já que os mapas são arenas fechadas de Tower Defense).
  - Em batalhas de Boss: A câmera tende a focar de forma a incluir o Boss e os jogadores para legibilidade das mecânicas.

---

# 5. O NÚCLEO (OBJETIVO)
A peça central que deve ser defendida (O Nexus da base).
- Possui **HP e Escudo (Shield)**.
- O Escudo se regenera fora de combate; o HP é muito mais difícil de consertar (custa muita Energia ou precisa de habilidades raras).
- **Estados Visuais de Dano e Alarmes:**
  - 100–70%: Estável (Azul/Verde, som harmônico).
  - 69–40%: Danificado (Amarelo, fagulhas visíveis, música altera para tensão leve).
  - 39–20%: Crítico (Laranja, sirenes suaves, estrutura fumaçando).
  - 19–1%: Colapso Iminente (Vermelho intermitente, alarme ensurdecedor de fundo, trepidação na tela, UI piscando alerta máximo).
