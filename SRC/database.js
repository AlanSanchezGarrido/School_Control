//cadena de coneccion e inicializamos la conexion con mongo db, que es moongoiose
//importamos mongoose
import  mongoose from 'mongoose';
//creamos la cadena de coneccion
mongoose.connect("mongodb+srv://alansuki963:huevos12@alansuki.nddkrib.mongodb.net/school_control?retryWrites=true&w=majority&appName=Alansuki")
//then para responder que si hubo connecion
.then(()=>console.log("mongo db connectec"))
//catch si hubo un herror 
.catch((err)=>console.log(err));

export default mongoose;


