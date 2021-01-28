import express from 'express';
import {groupController, groupsController} from '../groups'
const groupRouter = express.Router();


groupRouter.route('/').all(groupsController);
groupRouter.route('/:Id').all(groupController);



export default groupRouter;