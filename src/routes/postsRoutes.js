import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";

const corsOptions = {
    origin:"http://localhost:8000",
    optionsSucessStatus: 200

}
//windows
/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ dest: "./uploads" , storage})
*/

// linux ou o mac
const upload = multer({dest:"./uploads"})

const routes = (app) => {

  app.use(express.json());
  app.use(cors(corsOptions))

  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem)
  //essa rota foi uma ativiade proposta pela IA da alura e que está apresetando erro de 404 mas consegue fazer o put, depois irei veriificar o motivo
 // app.put("/posts/:id", atualizarPostId);

  app.put("/upload/:id", atualizarNovoPost )
}
export default routes;


