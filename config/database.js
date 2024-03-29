const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = function(uri) {
    mongoose.connect(uri, {useNewUrlParser: true });
    mongoose.set("debug", true);
    mongoose.connection.on("connected", function(){
        console.log("Conectado ao mongoDB em", uri);
    });

    mongoose.connection.on("error", function(error){
        console.log("Erro na conexão", error);
    });

    mongoose.connection.on("disconnected", function() {
        console.log("Desconcectado do MongoDB");
    });

    process.on("SIGINT", function() {
        mongoose.connection.close(function() {
            console.log("Aplicação terminada, conexão fechada");
            process.exit(0);
        });
    });
};