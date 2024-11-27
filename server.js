import express from "express";
import routes from "./src/routes/postsRoutes.js";

/*const posts = [
  {
    id: 1,
    descricao: "Um teste de foto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fazendo Yoga",
    imagem: "https://placekitten.com/400/300",
  },
  {
    id: 3,
    descricao: "Gatinho cinza dormindo em uma cesta",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 4,
    descricao: "Gatinho branco brincando com um novelo de lã",
    imagem: "https://source.unsplash.com/random?kitten,cute",
  },
  {
    id: 5,
    descricao: "Gatinho laranja fazendo careta",
    imagem: "https://picsum.photos/id/237/200/300",
  },
];*/
const app = express();
routes(app)

app.listen(3000, () => {
  console.log("Servidor Escutando...");
});
app.use(express.static("uploads"));
/*
function buscarPostPorId(id){
  const postId = Number(id);
  if (isNaN(postId)){
    return null;
  }
  return posts.find((post) => post.id === postId);
}
app.get("/posts/:id", (req, res) => {
  const post = buscarPostPorId(req.params.id);
  if(!post){
    return res.status(404).json({ message: "Post não encontrado"});
  }
  res.status(200).json(post);
})*/

// Função auxiliar para buscar posts por palavra-chave na descrição
/*function buscarPorPalavra(descricao){
  const termoBusca = descricao.toLowerCase();
  return posts.filter((post) => post.descricao?.toLowerCase().includes(termoBusca));
}

app.get("/posts/search/:descricao", (req, res) => {
  const descricao = req.params.descricao;
  const resultado = buscarPorPalavra(descricao);

  if (resultado.length === 0){
    return res.status(404).json({ message: "Nenhum post encontrado com essa descricao"});
  }
  res.status(200).json(resultado);
})*/

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à irmesão pelo nvim !");
});

app.get("/livro", (req, res) => {
  res.status(200).send({
    Titulo: "O Senhor dos Aneis",
    Autor: "J.R.R. Tolkien",
    Ano: 1954,
    Genero: "Fantasia",
  });
});

app.get("/filme", (req, res) => {
  res.status(200).send({
    Titulo: "O Senhor Dos Anéis - A Sociedade do Anel",
    Diretor: "Peter Jackson",
    Ano: 2001,
    Genero: "Fantasia",
  });
});


// Middleware de tratamento de erros (exemplo)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
