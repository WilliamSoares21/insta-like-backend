import 'dotenv/config';

import { ObjectId } from "mongodb";

import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost)
}

/*
export async function atualizarPost(postId, novosDados) {
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts");


  // Verifica se o postId é válido
  if (!isValidObjectId(postId)) {
    throw new Error("ID inválido");
  }

  try {
    return colecao.findOneAndUpdate(
      { _id: new ObjectId(postId) }, // Converta postId (string) para ObjectId
      { $set: novosDados },         // Atualize com os novos dados
      { returnDocument: "after" }   // Retorne o documento atualizado
    );
  } catch (erro) {
    console.error("Erro ao atualizar o post:", erro);
    throw erro; // Lançar o erro para ser tratado no controller
  }
}
*/
export async function atualizarPost(id, novoPost){
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts")
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}

function isValidObjectId(id) {
  // Verifica se o id é válido e tem 24 caracteres
  return ObjectId.isValid(id) && (id.length === 24);
}
