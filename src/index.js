//inicializa el servidor punto de arraque
import "./database.js";
import app from "./app.js";

//Start server
app.listen(app.get("port"),()=> console.log("Server Listening on Port" + app.get("port")) );

