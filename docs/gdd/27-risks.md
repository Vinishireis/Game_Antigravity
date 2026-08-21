Projeto: Núcleo em Cerco
Documento: 27-Risks & Mitigation
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# MATRIZ DE RISCOS (RISK REGISTER)

| Risco | Tipo | Probabilidade | Impacto | Estratégia de Mitigação |
| :--- | :--- | :---: | :---: | :--- |
| **Performance Web (Draw Calls)** | Técnico | Alta | Crítico | Usar Object Pooling restrito, Instancing para inimigos da mesma classe. Focar em Godot 4 ou PlayCanvas com foco em texturas comprimidas atlased. Limitar partículas simultâneas. |
| **Caos Visual (Ilegibilidade)** | Design | Alta | Alto | Manter as paletas de cor dos personagens estritamente separadas. Inimigos perigosos devem ter silhuetas inconfundíveis. Aplicar opacidade em explosões sobrepostas. |
| **Input API de 4 Gamepads** | Técnico | Média | Médio | Testar a Gamepad API do navegador logo no começo da etapa técnica (Spike). Garantir Fallbacks visuais (mostrar na HUD se o controle caiu). |
| **Economy Snowball (Ficar Muito Rico/Pobre)** | Design | Alta | Alto | Implementar o "Shared Bank" rigoroso. Fazer testes A/B com jogadores que "gastam tudo" vs "economizam tudo" para calibrar o Wave Director para punir a falta de flexibilidade. |
| **Scope Creep (Mais de 8 heróis/torres)** | Produção | Média | Crítico | Congelar o escopo no Vertical Slice. Qualquer nova torre, após o MVP, entra apenas se provar em Design Document que resolve um problema que as atuais não resolvem. |
| **Limitações do LocalStorage** | Técnico | Baixa | Médio | Migrar para IndexedDB logo no MVP para evitar estouro de stringificação e prevenir corrupção no Save/Load se o navegador fechar abruptamente. |
| **Scaling 4P fraco** | Design | Alta | Médio | Se 4 players tornam o jogo "fácil demais", o Wave Director deve forçar a divisão: spawnar um Boss de um lado e um Objetivo Temporário crítico do outro, forçando 2 em cada lado. |
