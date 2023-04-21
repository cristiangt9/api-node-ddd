import "dotenv/config";
import { express, cors } from 'express';
import dbInit from './infrastructure/repository/mongo';
import userRoutes from './presentation/routes/user.routes';
import { UserUseCase } from "./application/userUseCase.service";
import { UserController } from "./presentation/controller/user.ctrl";

// import { MockRepository } from "./infrastructure/repository/mock.repository";
// import { MongoRepository } from './infrastructure/repository/mongo.repository';
import { MysqlRepository } from './infrastructure/repository/mysql.repository';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

// const userRepository = new MockRepository();
// const userRepository = new MongoRepository();
const userRepository = new MysqlRepository();
const userUseCase = new UserUseCase(userRepository);
const userCtrl = new UserController(userUseCase);

app.use(userRoutes(userCtrl));
dbInit().then();
app.listen(port, () => console.log(`USER: Listo por el puerto ${port}`));