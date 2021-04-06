const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Backend iniciado"));

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "",
      pass: "",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Pronto para enviar");
    }
  });

  router.post("/contato", (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "",
      subject: "Contato pelo formulário",
      html: `<p>Nome: ${name}</p><p>Cidade: ${city}</p><p>Email: ${email}</p><p>Telefone: ${phone}</p><p>Mensagem: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "Erro" });
      } else {
        res.json({ status: "Enviado" });
      }
    });
  });