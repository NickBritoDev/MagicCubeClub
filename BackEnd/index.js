import express from 'express'
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sendMail', (req, res) => {

  const token = crypto.randomBytes(2).toString('hex');
  const decimalToken = parseInt(token, 16);
  const formattedToken = ('0000' + decimalToken).slice(-5);



  // Extrai informações do corpo da requisição
  const { to, subject } = req.body;

  // Configura o serviço de e-mail
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'nicolasbcruz@gmail.com',
      pass: 'yenjkertjlqznckp'
    }
  });

  // Configura o e-mail a ser enviado
  const mailOptions = {
    from: 'nicolasbcruz@gmail.com',
    to,
    subject,
    text: 'Use o token informado para validar seu acesso no Magic Cube Club' + '' + '\n '+ formattedToken
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.send('E-mail enviado com sucesso');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});