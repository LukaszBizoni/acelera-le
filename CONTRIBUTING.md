# Como contribuir com o Acelera Lê!

## Sugerir um livro

Abra uma issue usando o modelo **"Sugerir livro"** e informe:
- Estante (tema)
- Título e autor(es)
- Nível sugerido (iniciante, intermediário ou avançado) e em que degrau entraria
- Por que esse livro ajuda quem está nesse nível
- Se tem edição em português (e a editora)

## Critérios da curadoria

1. **O livro existe e é consagrado** na área (recomendado por muita gente, bem avaliado e não apenas lançamento da moda).
2. **No máximo 7 livros por estante.** Para entrar um, normalmente outro sai: explique qual.
3. **Ordem do iniciante ao avançado:** cada degrau deve pressupor o anterior.
4. **Edição em português é um bônus**, não uma exigência.
5. Versões gratuitas e oficiais (site do autor/editora) são bem-vindas. Nada de PDF pirata.

## Editar diretamente (PR)

1. Edite o `.md` da estante em `docs/estantes/`.
2. Atualize o mesmo livro em `dados/estantes.json`.
3. Rode `node ferramentas/gerar-estantes-js.js` para atualizar a cópia `dados/estantes.js`.
4. Abra o PR explicando a mudança.

## Nova estante

Copie uma estante existente, mantenha o mesmo formato de tabela e abra o PR com pelo menos 5 livros.
