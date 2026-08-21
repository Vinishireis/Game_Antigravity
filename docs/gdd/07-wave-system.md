Projeto: Núcleo em Cerco
Documento: 07-Wave System
Versão: 0.1
Status: Pré-Produção
Plataforma Principal: Web
Jogadores: 1–4 Local
Última atualização: 2026-08-20
Responsável: Game Design Team

# 1. WAVE DIRECTOR (SISTEMA DE GESTÃO)
O jogo não usa ondas inteiramente "hardcoded". Usa um sistema modular de "Orçamento" (Budget) baseado no conceito do *AI Director* do Left 4 Dead.

## 1.1 A Fórmula Conceitual
`WaveBudget = BaseDifficulty × WaveProgress × PlayerScale × Modifier`

- **BaseDifficulty:** (Casual=0.8, Normal=1.0, Veterano=1.5, etc).
- **WaveProgress:** A onda 1 custa 50 pts; a onda 15 custa 1200 pts.
- **PlayerScale:** Multiplicador pelo número de jogadores (1P = 1.0; 4P = 3.5).
- **Modifier:** Modificadores ativos no mapa (Ex: 'Mais Elites' dá +20% no budget).

O Diretor "gasta" esses pontos selecionando do pool de inimigos permitidos daquele mapa. (Ex: Comprar 1 Juggernaut custa 50 pts. Comprar 10 Swarmers custa 20 pts).

## 1.2 Dificuldades
As dificuldades afetam o Wave Director:
- **Casual:** IA comanda menos simultaneidade. Swarms são espaçados. Bônus de grana para o jogador.
- **Normal:** Ritmo clássico. Pressão sobe, mas permite respiro e erro estratégico leve.
- **Veterano:** IA compra Elites mais cedo. Combinações perigosas (Healer + Tank) são forçadas pelo Diretor. O tempo de *Prep Phase* é reduzido.
- **Pesadelo:** Inimigos dão dano altíssimo nas torres. Erros são letais. Economia apertada.
- **Colapso:** Modificadores malucos e cruéis. O Diretor tenta sempre explorar a fraqueza da torre menos evoluída do jogador.

## 1.3 Curva de Dificuldade da Partida
- **Wave 1–2:** Aprendizado e Posicionamento Básico. (Fácil)
- **Wave 3–4:** Introdução de Swarms ou primeiro Inimigo com Armadura. Os jogadores devem fazer a primeira escolha.
- **Wave 5:** Primeira grande pressão. Aparece um Elite (Spike de dificuldade).
- **Wave 6–7:** Adaptação da equipe à nova ameaça; escolha Roguelite para ajustar a Build.
- **Wave 8–10:** Intensidade constante. Multi-lanes abertas. Mini-Boss pode aparecer na 10.
- **Wave 11–14:** Sobrevivência. O Diretor gasta tudo o que pode, mandando *Disruptors* e Auras.
- **Wave 15:** Chegada do Boss. A onda finaliza a estrutura normal, o Boss quebra regras do mapa.
