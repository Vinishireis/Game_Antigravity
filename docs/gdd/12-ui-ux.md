Projeto: Núcleo em Cerco
Documento: 12-UI/UX
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. VISÃO GERAL DA HUD
Como o jogo possui até 4 jogadores na mesma tela, a HUD precisa ser limpa, evitando a poluição visual que compete com o cenário.
- **Top Center:** Barra de Vida do Núcleo, Status da Wave Atual, Timer da próxima Horda.
- **Cantos Inferiores:** (Até 4 painéis, um para cada jogador).
  - Avatar do Personagem e Cor (P1 Azul, P2 Vermelho...).
  - HP do Comandante.
  - Energia Individual / Energia do Banco.
  - Ícones de Cooldown das Habilidades (Botões Y e X).
  - Ícone de Ultimate (Super) - Pisca intensamente quando em 100%.

# 2. IN-WORLD UI (DIEGÉTICA E CONTEXTUAL)
Para não tirar o olho do jogador da ação:
- **Barra de vida e Upgrade:** Aparecem acima das torres somente quando o jogador se aproxima delas.
- **Telegraphs Inimigos:** Ao invés de uma UI clássica de "Cuidado", inimigos que vão dar golpes fortes pintam o chão de vermelho sob seus pés 1 segundo antes do ataque.

# 3. MENSAGENS DE SISTEMA / NARRATIVA
- **Dialogue Overlay:** O rosto do personagem aparece de forma translúcida no lado esquerdo da tela com texto abaixo para falas rápidas. Sem interromper o gameplay.
- **Text Skip:** Jogador sempre pode pressionar "A" para avançar rapidamente uma legenda de diálogo.

# 4. VICTORY SCREEN
O foco não deve ser criar competição tóxica (Ex: "Quem matou mais"), mas celebrar o time.
- Mostra: Score Geral, HP restante do Núcleo.
- **Categorias Positivas de Premiação de Fim de Partida:**
  - *Mestre Engenheiro:* Construiu mais torres.
  - *Salvador:* Fez mais revives.
  - *Guardião:* Curou mais a base/aliados.
  - *Combo Master:* Ativou mais sinergias elementais.

# 5. DEFEAT SCREEN
Para incentivar o "só mais uma", o jogo deve abraçar a narrativa da derrota.
- Texto massivo: **CONEXÃO PERDIDA**.
- Exibe: Onde a equipe errou ("70% do dano sofrido veio de Inimigos Voadores. Dica: Construam torres Anti-Aéreas!").
- Botão gigantesco: "REINICIAR WAVE" ou "MODIFICAR BUILD E TENTAR NOVAMENTE".
