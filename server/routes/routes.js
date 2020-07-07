import { Router } from 'express';
import UserController from '../controllers/users.controller';


const router = Router();

//ROUTER

//GET, POST, PUT, DELETE, 

router.get('/test', function(req, res){
    res.send("test");
});

//Users routes
router.get('/users', UserController.list);

router.post('/users', UserController.create);

router.get('/users/:id', UserController.details);

router.delete('/users/:id', UserController.delete);

router.put('/users/:id', UserController.update);



export default router;
