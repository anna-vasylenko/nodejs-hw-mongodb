
import { Router } from "express";

import * as contactsControllers from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { isValidId } from "../middlewares/isValidId.js";



const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(contactsControllers.getContactsController) );

contactsRouter.get('/:contactId', isValidId, ctrlWrapper(contactsControllers.getContactByIdController) );

export default contactsRouter;
