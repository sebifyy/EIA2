import * as Http from "http";                       //Kreiert http Objekt und hängt es an 'http' Tag an

namespace L06_SendData {
    console.log("Starting server");
    let port: number = process.env.PORT;            //Legt fest, auf welchen Port der Server "hoeren" soll.
    if (port == undefined)                          //Falls dieser undefiniert ist,
        port = 8100;                                //definieren wir selber den Port "8100"

    let server: Http.Server = Http.createServer();  //Kreiert einen Server auf dem lokalen Rechner 
    server.addListener("request", handleRequest);   //Eventlistener, der bei einer "request" (Anfrage) handleRequest() ausführt
    server.addListener("listening", handleListen);  //handleListen() wird aufgerufen, wenn man auf den Server zugegriffen hat
    server.listen(port);                            //Es wird geschaut, ob auf den Port zugegriffen wird

    function handleListen(): void {                 //Neue function
        console.log("Listening");                   //"Listening" wird in der console ausgegeben

    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {      //Neue function
        console.log("I hear voices!");                                                                  //Konsolenausgabe "I hear voices"

        _response.setHeader("content-type", "text/html; charset=utf-8");                                //html Dokument wird im <header> verändert
        _response.setHeader("Access-Control-Allow-Origin", "*");                                        //html Dokument wird im <header> verändert

        _response.write(_request.url);
        console.log(_request.url);

        _response.end();                                                                                //Beendet das Senden der Serverantwort
    }
}