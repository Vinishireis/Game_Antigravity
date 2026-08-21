Projeto: Núcleo em Cerco
Documento: 05-Enemies
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. VISÃO GERAL DOS INIMIGOS (FRATURADOS)
A inteligência artificial dos Fraturados não deve parecer caótica de forma frustrante, mas sistêmica. 
- A IA precisa ser previsível para permitir a formulação de estratégias.
- A variedade nasce de como os comportamentos se somam na tela (ex: um inimigo Healer curando um Tank invulnerável).

## 1.1 Comportamentos Base (IA)
1. **Pathing (Navegação):** A maioria segue o caminho mais curto até o Núcleo usando um grid NavMesh/A*. Eles se desviam levemente uns dos outros (flocking suave).
2. **Prioridade de Alvo:** 
   - Agressivos (Aggro): Atacam a estrutura mais próxima (torres) ou Comandantes.
   - Runners (Objetivos): Ignoram torres e jogadores, focam puramente em correr para o Núcleo.
3. **Agrupamento:** Alguns *Swarms* param por meio segundo para se alinharem a outros antes de entrarem nas zonas das torres.
4. **Fuga/Evasão:** Saboteurs ou Healers tentam manter distância ou se esconder atrás de inimigos maiores.

## 1.2 Matriz de Counters Universal
Este é o framework de balanceamento para combater inimigos. Todo inimigo forte tem um "calcanhar de aquiles" que exige a torre/combinação correta.

| Enemy Archetype | Primary Threat (Perigo) | Primary Counter (Torre) | Secondary Counter (Comandante) |
| :--- | :--- | :--- | :--- |
| **Swarm (Horda)** | Domina *Single-Target* (Gatling) por volume | **AoE (Mortar / Fogo)** | Controller (Freeze) |
| **Fast / Runner** | Passa pelas torres antes do dano aplicar | **Control (Slow / Ácido)** | Mobility Hero (Dash e ataca) |
| **Tank / Armored** | Absorve muito dano físico | **Armor Break / Sniper** | Tank Hero (Barricada/Taunt) |
| **Shielded** | Escudo recarrega se o ataque parar | **EMP / Energia Contínua** | Elemental Hero (Corrosão) |
| **Flyer (Voador)** | Ignora traps terrestres e fogo | **Anti-Air (Laser / Gatling)** | Support (Buff em torres Anti-Air) |
| **Healer** | Torna os Tanks imortais | **Focus Fire (Sniper/Marcação)** | Assault (Dano direto explosivo) |
| **Disruptor** | Desativa torres e energia | **Long Range (Sniper / Drone)** | Engineer (Repara e ativa) |

## 1.3 Escalada e Variantes
- **Standard (Normal):** Base.
- **Elite:** Maiores, cor diferenciada (Glow vermelho/roxo), possuem imunidade a 1 tipo de *Control* (ex: Imune a Root).
- **Mutator (Aura):** Inimigos raros que buffam aliados ao redor (ex: Aura de Velocidade).

*(A lista dos 25 Arquétipos está no documento de Design Data).*
