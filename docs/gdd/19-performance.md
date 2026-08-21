Projeto: Núcleo em Cerco
Documento: 19-Performance
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. METAS DE PERFORMANCE (BUDGETS)
O grande desafio tecnológico de um jogo com hordas (Swarm) no navegador. A meta de ouro é **60 FPS** consistentes em máquinas Mid-End.

## 1.1 Limits
- **Tempo para First Play (TTFG):** < 15 Segundos em conexões 4G/Banda Larga.
- **Uso de Memória RAM:** Não ultrapassar 500 MB (para evitar crash automático em abas do Chrome e Safari no Mac/iOS).
- **Draw Calls:** Manter abaixo de 100-150. Um jogo Web não aguenta centenas de *draw calls*. Instancing e Batching são obrigatórios para os Swarms de Fraturados.

## 1.2 Device Profiles (Perfis de Dispositivo)
O código deve ler a capacidade da máquina (ou deixar manual) em 3 tiers.

- **LOW Profile (Notebook Antigo / Browser Pesado):**
  - Sombras desativadas.
  - Partículas reduzidas em 75%.
  - Texturas a 50% de resolução.
  - Modelos Inimigos mais distantes usam sprites (Billboarding) em vez de malha 3D.
- **MEDIUM Profile (Padrão):**
  - Sombras simples (Blob shadows ou mapas direcionais baixos).
  - Partículas completas em golpes críticos, simplificadas em disparos comuns.
- **HIGH Profile (PC Gamer / Navegadores Otimizados Chromium):**
  - SSAO, Post-Processing (Bloom nas Torres de Energia).
  - Anti-aliasing (MSAA) ativado.

## 1.3 Estratégias Críticas de Otimização (Engine)
- **Object Pooling Exaustivo:** Tiros de Gatling, Inimigos "Swarmer" e efeitos de acerto devem *nunca* ser instanciados/destruídos em tempo real. Eles nascem de uma *pool* pré-alocada e, ao morrer, ficam invisíveis esperando o próximo uso, eliminando os picos do *Garbage Collector* (GC) do JavaScript.
- **Texture Atlasing:** Juntar todos os ícones da UI em uma única imagem de textura e referenciar as coordenadas (UV) para salvar dezenas de requisições web.
- **Audio Compression:** Áudios pesados devem estar em formatos eficientes para Web (WebM/OGG ou AAC dependendo do cross-browser compatibility) e usar *Web Audio API* para espacialidade barata de CPU.
