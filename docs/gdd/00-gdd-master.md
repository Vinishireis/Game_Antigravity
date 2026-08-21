Projeto: Núcleo em Cerco
Documento: 00-GDD Master
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. VISÃO EXECUTIVA E RESUMO
**Nome do Jogo:** Núcleo em Cerco (Core Under Siege)
**Gênero:** Cooperative Action Tower Defense
**Plataforma:** Web (Browser Native)
**Público-Alvo:** 13–35 anos (Couch Co-op, Fãs de Estratégia e Ação, Casual-Midcore)
**Escopo de Jogadores:** 1–4 Jogadores Localmente (Multiplayer Compartilhado)
**Câmera:** Isométrica / Top-Down 3/4 Compartilhada
**Duração da Partida:** 20–35 minutos

## 1.1 Elevator Pitch
(15 segundos): *Núcleo em Cerco* é um Tower Defense de ação cooperativo onde você não gerencia o campo de batalha de longe – você luta dentro dele. Chame até três amigos para o sofá, controlem comandantes únicos, construam sinergias de torres insanas em tempo real e defendam a última fonte de energia da humanidade diretamente no navegador.

(30 segundos): Tudo está conectado. Mas quando um erro cria uma fratura dimensional, a rede global é ameaçada. Em *Núcleo em Cerco*, de 1 a 4 jogadores operam em um combate caótico misturando Action RPG e Tower Defense. Defendam o Núcleo combinando torres táticas, curando uns aos outros e sobrevivendo a ondas de criaturas alienígenas. O melhor do couch co-op de ação rápido, rodando suavemente no seu browser.

## 1.2 O Princípio Central do Projeto
> **"As melhores defesas não pertencem a um jogador. Elas surgem da combinação das decisões de toda a equipe."** E narrativamente: **"Tudo está conectado."**

---

# 2. ÍNDICE DE DOCUMENTAÇÃO DO GDD
Este GDD Master age como um hub central. Todos os detalhes técnicos e aprofundamentos encontram-se em seus respectivos documentos na pasta `/docs/gdd/`.

- **01-Game Vision:** High Concept, Pilares, USP, Player Fantasy.
- **02-Core Gameplay:** Loops de Jogo, Controle do Comandante, Câmera.
- **03-Commanders:** Arquétipos, Status, Habilidades dos 8 Heróis.
- **04-Towers:** Matriz das 16 Torres e Sistema Elemental.
- **05-Enemies:** Arquétipos de IA, Comportamentos, Matriz de Counters.
- **06-Bosses:** Mecânicas dos 8 Bosses do jogo.
- **07-Wave System:** Funcionamento do Wave Director e Scaling Multiplayer.
- **08-Local Multiplayer:** Dinâmica Couch Co-op, Input e Revive.
- **09-Maps:** 10 Mapas, Biomas, Modificadores e Objetivos.
- **10-Progression:** Meta-progressão e Upgrades Roguelite.
- **11-Economy:** Energia e Fragmentos.
- **12-UI/UX:** HUD, Ping System, Telas de Vitória/Derrota.
- **13-Accessibility:** Legibilidade, Controles e Opções Assistivas.
- **14-Art Direction:** Estilo Visual Stylized Sci-Fi 3D/2.5D.
- **15-Audio:** Trilha Adaptativa e Sound Design de Impacto.
- **16-Narrative:** A Malha, O Vazio, Fraturados e Elyri. (Ver pasta `/narrative`)
- **17-Campaign:** Atos I a V, Diálogos e Sistema de Ecos.
- **18-Web Platform:** Desafios e Decisões para Web-First (PWA, Assets).
- **19-Performance:** Asset Budgets e Otimizações de Memória/Draw Calls.
- **20-Balancing:** Fórmulas de Dano e Framework Econômico.
- **23-MVP Definition:** Escopo Reduzido para 1º Lançamento.
- **24-Vertical Slice:** Metas para a build validável.
- **27-Risks:** Mapeamento de Riscos Técnicos e de Design.
- **28-Decision Log:** Histórico de Decisões do Projeto.
- **29-Open Questions:** Perguntas pendentes para validação em playtest.

*(Este documento será usado pela equipe de produção para rastrear o estado atual do projeto).*
