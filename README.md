# Exercício POO + SOLID - Estado do Jogador

Projeto em **TypeScript** que implementa o padrão **State** para gerenciar os estados de um jogador em um jogo, seguindo boas práticas de **POO e SOLID**.

---

## 🔹 Estrutura de Estados

O jogador pode estar nos seguintes estados:

| Estado        | Ações Permitidas                        |
|---------------|----------------------------------------|
| Offline       | ficarOnline()                           |
| Online        | iniciarJogo(), ficarOffline()           |
| Em Jogo       | pausarJogo(), desconectar()             |
| Pausado       | desconectar(), ficarOnline()            |
| Desconectado  | ficarOffline()                          |

---


