import { Router } from 'express';
import { UserUseCase } from '../../application/userUseCase.service';
import { UserController } from '../controller/user.ctrl';
import { MockRepository } from '../../infrastructure/repository/mock.repository';
// import { MongoRepository } from '../../infrastructure/repository/mongo.repository';
// import { MySqlRepository } from '../../infrastructure/repository/mysql.repository';

const route = Router();
const userRepository = new MockRepository();
// const userRepository = new MongoRepository();
// const userRepository = new MySqlRepository();
const userUseCase = new UserUseCase(userRepository);
const userCtrl = new UserController(userUseCase);
/**
 * Ruta post para guardar usuario
 */
route.post('/user', userCtrl.insertUser);
/**
 * Ruta para obtener usuario por email
 */
route.get('/user/:uuid', userCtrl.getUser);

export default route;