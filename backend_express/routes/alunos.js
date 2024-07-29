var express = require("express");
var router = express.Router();
var alunoservice = require("../services/aluno.service");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//listando
router.get("/listar", (req, res, next) => {
  res.json(alunoservice.list());
});

//registrando
router.post("/register", (req, res, next) => {
  const aluno = alunoservice.register(req.body);
  res.json(aluno);
});

//atualizando
router.put("/update/:id", (req, res, next) => {
  const aluno = alunoservice.update(req.params.id, req.body);
  res.json(aluno);
});
//delete

router.delete("/delete/:id", (req, res, next) => {
  const ok = alunoservice.delete(req.params.id);
  if (ok) return res.json({ sucess: true });
  else return res.json({ sucess: false });
});

//retrieve
router.get("/retrieve/:id", (req, res, next) => {
  const out = alunoservice.retrieve(req.params.id);
  return res.json(out);
});
module.exports = router;
