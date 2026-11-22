// Gera dados/estantes.js a partir de dados/estantes.json.
//
// Por que isso existe? Quando alguém abre o index.html com dois cliques
// (endereço file://), o navegador bloqueia a leitura do JSON por segurança.
// O estantes.js é uma cópia do JSON que funciona nesse caso.
//
// Rode sempre que mudar o JSON:   node ferramentas/gerar-estantes-js.js
// (só precisa do Node instalado; nenhuma dependência npm)

const fs = require("fs");
const path = require("path");

const raiz = path.join(__dirname, "..");
const origem = path.join(raiz, "dados", "estantes.json");
const destino = path.join(raiz, "dados", "estantes.js");

// JSON.parse também serve de verificação: se o JSON estiver quebrado, avisa aqui.
const dados = JSON.parse(fs.readFileSync(origem, "utf8"));

// Confere a regra da curadoria: no máximo 7 livros, degraus em ordem
for (const estante of dados.estantes) {
  if (estante.livros.length > 7) {
    throw new Error(`A estante "${estante.nome}" tem mais de 7 livros.`);
  }
  estante.livros.forEach((livro, i) => {
    if (livro.degrau !== i + 1) {
      throw new Error(`"${livro.titulo}" (${estante.nome}) deveria ser o degrau ${i + 1}.`);
    }
  });
}

const conteudo =
  "// ARQUIVO GERADO: não edite à mão.\n" +
  "// Edite dados/estantes.json e rode: node ferramentas/gerar-estantes-js.js\n" +
  `window.ACELERA_LE_DADOS = ${JSON.stringify(dados, null, 2)};\n`;

fs.writeFileSync(destino, conteudo, "utf8");
console.log(`OK: ${path.relative(raiz, destino)} gerado com ${dados.estantes.length} estantes.`);
