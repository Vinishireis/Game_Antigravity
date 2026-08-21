# NÚCLEO EM CERCO - BACKLOG INICIAL

Lista estruturada (Epic -> Feature -> User Story -> Task) das necessidades iniciais.

## EPIC-01: Core Gameplay & Loop
- **Feature 1.1: Wave Flow Manager**
  - *User Story:* Como jogador, eu quero que inimigos apareçam em ondas, para ter tempo de me preparar.
  - *Tasks:* Criar State Machine (Preparation -> Wave -> End), Implementar timer, Spawner básico de inimigos no Path.
- **Feature 1.2: Core Integrity System**
  - *User Story:* Como sistema, o jogo precisa acabar se o Núcleo for destruído.
  - *Tasks:* Adicionar HP ao Núcleo, Dano de colisão dos Inimigos, Tela de Defeat.

## EPIC-02: Player & Movement
- **Feature 2.1: Controlador de Comandante**
  - *User Story:* Como jogador, eu quero me mover e dar um Dash fluido.
  - *Tasks:* Configurar character controller, input vector, Cooldown do Dash.
- **Feature 2.2: Revive System**
  - *User Story:* Como jogador, eu quero ajudar um amigo que ficou sem vida.
  - *Tasks:* Estado "Downed" (Imobilizado), Collider de interação, Barra de carregamento de 3s (Hold Button).

## EPIC-03: Tower System
- **Feature 3.1: Placement System**
  - *User Story:* Como jogador, eu quero escolher onde posicionar minhas torres rapidamente.
  - *Tasks:* Grid system/Node snap, Overlay de colisão vermelha/verde (Inválido/Válido), Deduzir Custo de Energia.
- **Feature 3.2: Damage & Targeting**
  - *User Story:* Como jogador, as torres precisam atirar sozinhas.
  - *Tasks:* Trigger sphere range, Prioridade (nearest target), Raycast de projétil, Dano por segundo.

## EPIC-04: Enemy AI
- **Feature 4.1: Pathfinding**
  - *User Story:* Inimigos precisam saber onde é o Núcleo.
  - *Tasks:* Bake do NavMesh / Waypoints da Lane, Movimento com velocidade variável (Status Slow).
- **Feature 4.2: Health & Resistances**
  - *User Story:* O inimigo precisa morrer ao tomar dano específico.
  - *Tasks:* Implementar Health Component, Fraqueza a Tipos Elementais.

## EPIC-06: Local Multiplayer & Input
- **Feature 6.1: Gamepad API Web**
  - *User Story:* Como jogador, quero apenas plugar meu controle Xbox e jogar na aba do Chrome.
  - *Tasks:* Detectar navigator.getGamepads(), Map Left Stick, Right Stick, Atribuir Controller ID ao Player Index correspondente.
- **Feature 6.2: Câmera Compartilhada**
  - *User Story:* A câmera deve nos manter juntos.
  - *Tasks:* Calcular Bounding Box das posições dos jogadores vivos, Ajustar Zoom baseado na distância máxima.

## EPIC-11: Progression & Economy
- **Feature 11.1: Shared Economy**
  - *User Story:* Como equipe, queremos guardar energia para torres caras, mas eu também quero dinheiro próprio.
  - *Tasks:* Sistema de divisórias no Loot Drop, Função de "Saque" (Withdraw) do Banco do Core.

## Outros Épicos (Futuros)
- **EPIC-09:** Maps, **EPIC-10:** Bosses, **EPIC-12:** Narrative, **EPIC-16:** Accessibility.
