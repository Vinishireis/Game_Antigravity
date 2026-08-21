# NÚCLEO EM CERCO — PROTOTYPE & MVP MASTER PROMPT

**Leia todos os documentos de `/docs` antes de alterar qualquer código.**
**A documentação produzida na etapa de GDD passa a ser a nossa SOURCE OF TRUTH.**

O objetivo desta fase é sair da prancheta e construir o protótipo inicial até atingirmos a camada do MVP (Minimum Viable Product). 

## OBJETIVO TÉCNICO

Baseado na avaliação anterior, você deve preparar e construir a fundação em arquitetura orientada para a WEB. Se optou por Godot 4 Web Export ou PlayCanvas, as diretrizes de otimização contidas no documento `19-performance.md` são obrigatórias.

Você não precisa implementar tudo hoje. Siga as tarefas abaixo metodicamente:

## LISTA DE TAREFAS PARA O MVP

1. **Escolha da Engine / Setup:** Crie os arquivos estruturais da engine escolhida e configure o repositório para exportação Web. 
2. **Setup do Multiplayer Local & Gamepad:** Implemente a leitura da Web Gamepad API para acomodar até 4 *controllers* genéricos usando um *InputManager*.
3. **Controlador do Jogador (Comandante):** Crie a movimentação *Twin-Stick* usando a mecânica base do personagem (sem habilidades complexas, apenas Andar, Mirar e Atirar básico). Implemente o sistema de Câmera Compartilhada.
4. **Collision & NavMesh (O Mapa):** Importe uma geometria *Greybox* simples simulando o mapa "Sinal Perdido". Faça o *Bake* do NavMesh.
5. **Enemy AI & Wave Manager:** Crie o *Spawner*. Instancie hordas (apenas 1 ou 2 tipos do MVP) que buscam chegar ao "Núcleo". Use *Object Pooling* mandatório.
6. **Tower System (Construção & Tiro):** Implemente a *State Machine* das Torres. Faça a função de gastar Energia e posicionar uma Gatling e um Mortar no Grid. Permita o sistema de tiro automático (Raycast ou Projétil Pooling).
7. **Integração de UI:** Crie o HUD mínimo para refletir a vida do núcleo, os recursos dos jogadores (Economia Híbrida) e a transição básica entre *Victory* e *Defeat*.

## PRINCÍPIO CENTRAL DO PROJETO (REPETIÇÃO OBRIGATÓRIA)

Durante a codificação, se você for confrontado com uma decisão de design que não está explícita:
> **"As melhores defesas não pertencem a um jogador. Elas surgem da combinação das decisões de toda a equipe."**

- Use o documento `23-mvp.md` para não desviar do escopo.
- Use `11-economy.md` para programar o ganho de energia.
- Use o `backlog.md` para se guiar.

Pronto? Confirme que leu esta instrução e inicie a inicialização (Setup) do projeto (Etapa 1 e 2).
