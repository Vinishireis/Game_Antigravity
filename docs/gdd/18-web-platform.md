Projeto: Núcleo em Cerco
Documento: 18-Web Platform & Tech Architecture
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. FILOSOFIA WEB-FIRST
Rodar no navegador altera radicalmente o design técnico. O objetivo principal é o **Time To First Gameplay** (TTFG) extremamente baixo.
- Se o jogador tem que baixar 200MB de assets numa tela preta antes de ver o menu, o projeto falhou.
- O Jogo DEVE ser jogável em Chrome, Edge e Firefox de imediato.

## 1.1 Estudo e Decisão Tecnológica (Engine)
A recomendação para o MVP baseia-se na performance Web.

| Tecnologia | 2D | 3D | Web Export | Performance | Complexidade p/ TD | Veredito p/ Projeto |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Phaser.js** | Excelente | Ruim | Nativo | Muito Alta | Moderada | **Não (Foco 2.5/3D)** |
| **PixiJS** | Excelente | Fraco | Nativo | Muito Alta | Difícil | **Não** |
| **Three.js** | N/A | Excelente| Nativo | Alta | Difícil (sem editor) | **Possível**, se equipe for puramente Dev. |
| **PlayCanvas**| Bom | Excelente| Nativo | Alta | Moderada | **Forte Candidato** (Editor online, leve). |
| **Godot 4** | Excelente | Bom | Export | Moderada (Web) | Baixa | **RECOMENDADO.** |
| **Unity Web**| Bom | Excelente| Export | Ruim (Longo Load)| Baixa | Não (Builds Web pesadas). |

**Decisão Visual (2.5D vs 3D):**
A recomendação técnica final é usar a perspectiva **2.5D Estilizada ou 3D Low-Poly** rodando em **PlayCanvas** ou **Godot 4 (Web Export)**. O 3D Low-Poly permite reaproveitamento de animações de esqueleto (rigging) para hordas, sem a necessidade de desenhar milhares de *spritesheets* 2D que estourariam o limite de memória RAM e GPU do navegador.

## 1.2 Progressive Web App (PWA) e Instalação
O jogo deve ser desenhado como um PWA moderno.
- Manifest presente, permitindo "Adicionar à Tela Inicial" / "Instalar App".
- Suporte a cache offline via *Service Workers* (permitindo jogar localmente no avião após o primeiro carregamento).
- Tela Cheia (Fullscreen API) agressiva (mas com consentimento do usuário na UI) para evitar que o clique no browser ative outras abas acidentalmente no calor da batalha.

## 1.3 Loading Progressivo
O funil de Loading:
1. **Bootstrap (< 1MB):** Carrega a logo, um fundo muito simples de HTML/CSS e o botão "Start".
2. **Main Menu / Lobby (< 10MB):** Carrega a UI, áudio base comprimido (MP3/OGG) e as fontes. 
3. **Lazy Loading:** Modelos 3D de mapas futuros não são carregados na memória até a pessoa escolher a missão. 
4. O *Background Preload* baixa a Wave 2 enquanto os jogadores estão jogando a Wave 1.

## 1.4 Salvamento (Persistência)
Para MVP: Utilizaremos **IndexedDB** da Web API (LocalStorage tem limite pequeno de 5MB e trava o *thread* síncrono, não servindo bem para progresso massivo).
- O save persistirá Configurações, Unlocks, Fragmentos e Upgrades.

## 1.5 Edge Cases de Browser
- **Tab lost focus (Foco perdido da aba):** Se o usuário alt-tabar ou clicar fora da janela, o `GameStateManager` DEVE interceptar e disparar `PauseGlobal` automaticamente. O jogo não pode continuar enquanto os jogadores não estiverem no controle.
- **Window Resize:** Redimensionar a tela do navegador ajusta a relação de aspecto (Aspect Ratio) do *Canvas*, mas a interface deve se ancorar (*Anchors* nos cantos) de forma perfeitamente responsiva.
