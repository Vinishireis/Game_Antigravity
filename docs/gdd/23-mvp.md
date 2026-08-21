Projeto: Núcleo em Cerco
Documento: 23-MVP Definition
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. O QUE É O MVP (MINIMUM VIABLE PRODUCT)?
O MVP deve responder se o *Core Loop* cooperativo local é divertido antes de se gastar meses em conteúdo periférico. A regra é: Menor escopo possível para validar a diversão na plataforma Web.

## 1.1 In-Scope (O Que Entra)
- **1 Mapa de Sobrevivência:** "Sinal Perdido" (Sem biomas complexos, geometria de blocos simples de colisão).
- **2 Comandantes:** Lyra (Para testar o suporte e construção) e Kael (Para testar dano e combate).
- **6 Torres:** Gatling, Mortar, Cryo (Gelo), Flamethrower, Acid Spitter, Barricada (As necessárias para testar mecânica de dano único, AoE, Trap, Control e Sinergias Elementais básicas).
- **6 Tipos de Inimigos:** Scrapper, Swarm, Juggernaut (Armadura), Aegis (Shield), Nullifier (Desativa), Mender (Healer).
- **1 Elite e 1 Boss (Mecânica Simples):** O "Colosso de Eco".
- **Wave System:** Hardcoded inicialmente (10 ondas) sem o Diretor de IA completo.
- **Multijogador:** Suporte para 1 a 4 jogadores locais simultâneos (Web Gamepad API funcionando básico).
- **Sistemas Essenciais:** Economia híbrida operante; Build, Upgrade T2, Repair; Estado "Downed" e Revive; Barra do Core HP.
- **Save Básico:** LocalStorage guardando *High Score* das ondas.
- **Telas:** Main Menu muito básico, tela de Vitória, tela de Defeat (Conexão Perdida).

## 1.2 Out-of-Scope (O Que Fica de Fora do MVP)
Essas funcionalidades são rigorosamente barradas nesta etapa para evitar *Scope Creep*.
- Cinematics, Narrativa complexa, Voice Acting.
- Campanhas com atos, mapas secretos, sistema de progressão horizontal (Roguelite).
- Os outros 6 Comandantes e 10 Torres finais.
- Sistema de Online Multiplayer / Matchmaking / Netcode.
- Leaderboards online, Lojas, Battle Pass ou Monetização.
