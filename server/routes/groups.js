import express from 'express';
import {groupController, groupsController, groupMembersController, groupSubjectsController} from '../groups';
const groupRouter = express.Router();


groupRouter.route('/').all(groupsController);
groupRouter.route('/:Id').all(groupController);
groupRouter.route('/:Id/members').all(groupMembersController)
groupRouter.route('/:Id/subjects').all(groupSubjectsController)



export default groupRouter;