# CLAUDE.md — Acelera Lê!

Instruções para o Claude Code trabalhar neste projeto.

## Contexto

**Acelera Lê!** é um recurso gratuito da comunidade **Acelera Dev**: uma "estante de biblioteca" com roadmaps de leitura para quem está começando na programação. Cada tema é uma estante com até 7 livros, ordenados do iniciante ao avançado.

Leia antes de começar:
1. `docs/produto.md`: o que construir
2. `docs/tecnologia.md`: como construir
3. `docs/estantes/*.md`: a curadoria (fonte da verdade dos livros)

## Regras

- **Idioma:** toda a interface, o código-fonte voltado ao usuário, os commits e a documentação ficam em **português do Brasil**.
- **Livros:** nunca invente livros, autores ou edições. Use somente o que está em `docs/estantes/`. Se um dado estiver marcado "confirmar", mantenha a marcação até um humano verificar.
- **Máximo de 7 livros por estante**, em ordem de dificuldade crescente.
- **Stack:** HTML + CSS + JavaScript puro, sem framework, sem build, sem dependências npm. O site precisa abrir dando dois cliques no `index.html` ou por um servidor estático simples.
- **Dados:** os livros ficam em `dados/estantes.json`, gerado a partir dos `.md` de `docs/estantes/`. Quando mudar um, atualize o outro.
- **Sem capas reais** de livros (direitos autorais e links quebrados). As lombadas são desenhadas em CSS.
- **Acessibilidade:** lombadas são `<button>` com rótulo acessível, o painel de detalhes é navegável por teclado (Esc fecha) e o contraste segue o WCAG AA.
- **Responsivo:** funciona em celular (360px) e desktop.
- Código simples e comentado em PT-BR: o público inclui iniciantes que vão ler o código para contribuir.

## Primeira tarefa sugerida

Construir o protótipo navegável descrito em `docs/produto.md`:
1. Criar `dados/estantes.json` com as estantes de `docs/estantes/`.
2. Criar `index.html`, `css/estilo.css` e `js/app.js`.
3. Renderizar as estantes com lombadas, painel de detalhes, "marcar como lido" (localStorage) e o botão "Sugerir livro".
4. Testar no navegador, no desktop e no celular.
