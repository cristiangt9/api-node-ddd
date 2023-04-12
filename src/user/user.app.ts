import "dotenv/config";
import { express, cors } from 'express';
import dbInit from './infrastructure/repository/mongo';
import userRoute from './presentation/route/user.route';


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`USER: Listo por el puerto ${port}`));