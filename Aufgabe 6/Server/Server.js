"use strict";
const Http = require("http"); //Kreiert http Objekt und h�ngt es an 'http' Tag an
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT; //Legt fest, auf welchen Port der Server "hoeren" soll.
    if (port == undefined)
        port = 8100; //definieren wir selber den Port "8100"
    let server = Http.createServer(); //Kreiert einen Server auf dem lokalen Rechner 
    server.addListener("request", handleRequest); //Eventlistener, der bei einer "request" (Anfrage) handleRequest() ausf�hrt
    server.addListener("listening", handleListen); //handleListen() wird aufgerufen, wenn man auf den Server zugegriffen hat
    server.listen(port); //Es wird geschaut, ob auf den Port zugegriffen wird
    function handleListen() {
        console.log("Listening"); //"Listening" wird in der console ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe "I hear voices"
        _response.setHeader("content-type", "text/html; charset=utf-8"); //html Dokument wird im <header> ver�ndert
        _response.setHeader("Access-Control-Allow-Origin", "*"); //html Dokument wird im <header> ver�ndert
        _response.write(_request.url);
        console.log(_request.url);
        _response.end(); //Beendet das Senden der Serverantwort
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map