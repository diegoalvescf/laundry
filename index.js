require("dotenv").config();// Usado para a conexão com o .env 
const http = require("http"); // 
const database = require("./config/database") // importando conexão com o banco
const app = require("./config/server"); // importando as configurações do express


database(process.env.MONGO_URI);

http.createServer(app).listen(3000, function() {  //porta de acesso
    console.log("Servidor Iniciado na portaa 3000");
});