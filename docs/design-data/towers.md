# TORRES - DADOS DE DESIGN

Lista preliminar das 16 torres disponíveis no MVP e na build inicial.

## 1. Matriz de Avaliação das Torres

| Tower | Cost | Damage | AoE | CC (Control) | Range | Support | Difficulty (Usage) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Gatling** | Baixo | 2 | 1 | 1 | 3 | 1 | 1 |
| **Sniper** | Médio | **5** | 1 | 1 | **5** | 1 | 2 |
| **Mortar** | Alto | 4 | **5** | 1 | 4 | 1 | 3 |
| **Tesla** | Médio | 3 | 3 | 3 | 2 | 1 | 2 |
| **Cryo Beam** | Médio | 1 | 2 | **5** | 3 | 1 | 2 |
| **Flamethrower** | Baixo | 4 | 4 | 1 | 1 | 1 | 1 |
| **Acid Spitter** | Médio | 3 | 3 | 2 | 3 | 2 | 2 |
| **Oil Geyser** | Baixo | 0 | 4 | 3 | 1 | 4 | 3 (Combo) |
| **Grav Trap** | Alto | 1 | 4 | **5** | 2 | 1 | 3 |
| **Amplifier** | Alto | 0 | 0 | 0 | 3 | **5** | 3 (Posic.) |
| **EMP Pillar** | Médio | 2 | 4 | 4 | 3 | 2 | 2 |
| **Laser Grid** | Alto | 3 | 2 | 2 | 2 | 1 | 4 |
| **Kinetic Wall** | Baixo | 0 | 0 | **5** | 1 | 1 | 1 |
| **Portal Generator**| Alto | 0 | 0 | 4 | 1 | 3 | 5 |
| **Drone Hub** | Alto | 2 | 3 | 1 | **5** | 2 | 2 |
| **Void Rift** | Muito Alto | **5** | **5** | 4 | 4 | 1 | 5 |

*(Escala 1 a 5 | Custos a definir em testes na aba Economy)*

---

## 2. Detalhamento das 16 Torres

### 2.1 Categoria: Damage (Dano Direto)
1. **Gatling Turret (Cinética):** A torre básica. Atira rápido no primeiro alvo que entra no alcance. Barata. Ótima no começo. (Nível 3: Munição Perfurante OU Foco de Mira Dupla).
2. **Sniper Tower (Cinética):** Tiro muito lento, dano extremo. Prioriza o inimigo de maior HP na tela. Quebra armaduras. (Nível 3: Headshot (Dano Crit) OU Bala Ricochete).

### 2.2 Categoria: AoE (Dano em Área)
3. **Mortar (Cinética/Explosiva):** Dispara em parábola, atinge uma área grande. Possui um "ponto cego" (deadzone) perto da base. Ótimo contra Swarms.
4. **Flamethrower (Térmica):** Cospe fogo em formato de cone curto. Alto dano contínuo. Não atinge inimigos voadores.

### 2.3 Categoria: Controle (Crowd Control)
5. **Cryo Beam (Criogênica):** Foca um laser de gelo contínuo em um inimigo. Quanto mais tempo foca, mais lento ele fica, até congelar.
6. **EMP Pillar (Elétrica):** Dispara pulsos que quebram escudos azuis instantaneamente e paralisam robôs/Fraturados mecânicos.

### 2.4 Categoria: Sinergia & Elemental
7. **Acid Spitter (Corrosivo):** Joga poças de ácido no chão. Inimigos que pisam recebem +20% de dano de todas as outras torres.
8. **Tesla Coil (Elétrica):** Zappa o inimigo mais próximo, e o raio "pula" para 3 inimigos ao redor.
9. **Oil Geyser (Utility/Combo):** Joga escorregadio no chão. Atrasa um pouco. Se uma arma de Fogo acertar o óleo, vira uma fogueira persistente gigante (Sinergia). Se congelado, inimigos derrapam para trás.

### 2.5 Categoria: Utilitário & Trap
10. **Amplifier (Support):** Não ataca. Concede +20% Fire Rate e +10% Dano para até 4 torres adjacentes. (Nível 3: Overclock Global OU Range Boost).
11. **Kinetic Wall (Trap/Block):** Uma barricada robusta que bloqueia a Lane, forçando os inimigos a baterem nela até destruí-la.
12. **Grav Trap (Dimensional):** Uma armadilha no chão que suga os inimigos para o centro dela, agrupando-os para um tiro perfeito de Mortar ou Fogo.

### 2.6 Categoria: Experimental (Late Game)
13. **Laser Grid:** Duas torres conectadas por um raio constante que frita quem atravessa a linha entre elas. Requer posicionamento perfeito em corredores.
14. **Drone Hub:** Lança 3 drones pelo ar que caçam inimigos em qualquer lugar do mapa, mas o DPS cai se o alvo for muito distante.
15. **Portal Generator:** Cria um portal na Lane que envia inimigos que entrarem de volta para o começo da trilha. Só funciona para X inimigos antes de queimar.
16. **Void Rift:** Torre definitiva e caríssima. Cria pulsos lentos de anomalias espaciais que ignoram todos os escudos e armaduras.
