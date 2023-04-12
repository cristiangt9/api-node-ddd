import { Router } from 'express';
import { UserUseCase } from '../../application/userUseCase.service';
import { UserController } from '../controller/user.ctrl';
import { MockRepository } from '../../infrastructure/repository/mock.repository';



export default (userCtrl ) => {
    
    const routes = Router();
    /**
     * Ruta post para guardar usuario
    */
    routes.post('/user', userCtrl.insertUser);
    /**
    * Ruta para obtener usuario por uuid
    */
    routes.get('/user/:uuid', userCtrl.getUser);

    return routes;

}