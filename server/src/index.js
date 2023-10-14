import  express  from "express";
import cors from "cors";
import { router } from "./router/user.routes.js";
import { PORT } from "./config.js";

const port = PORT

/*levantando el servidor*/
const app = express();



app.use(cors())

app.use(express.json())
app.listen(port,()=>{
  console.log(`el servidor esta corriendo en puerto ${port}`)
});
app.use(router)