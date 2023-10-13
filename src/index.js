import  express  from "express";
import cors from "cors";

const port = 3005

/*levantando el servidor*/
const app = express();

app.use(express.json())

app.use(cors())

app.listen(port,()=>{
  console.log(`el servidor esta corriendo en puerto ${port}`)
});