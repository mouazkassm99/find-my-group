import express from 'express';
import {printGroup, printDb, printGroupDb, addGroup } from '../groups';
import { groupController, groupsController } from '../groups/controllers';
const groupRouter = express.Router();

// groupRouter.route('/')
//     .get((req, res, next)=>{
//         printGroupDb()
//         // addGroup();
//         res.send('request was handled');
//     });

groupRouter.route('/').all(groupsController);
groupRouter.route('/:Id').all(groupController);



export default groupRouter;