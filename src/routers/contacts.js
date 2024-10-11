import { Router } from "express";

import * as contactsControllers from '../controllers/contacts.js';

import { isValidId } from "../middlewares/isValidId.js";

import { ctrlWrapper } from '../utils/ctrlWrapper.js';


const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(contactsControllers.getContactsController) );

contactsRouter.get('/:contactId', isValidId, ctrlWrapper(contactsControllers.getContactByIdController) );

contactsRouter.post('/', ctrlWrapper(contactsControllers.addContactController));

contactsRouter.delete('/:contactId',isValidId, ctrlWrapper(contactsControllers.deleteContactController));

contactsRouter.patch('/:contactId',isValidId, ctrlWrapper(contactsControllers.updateContactController));

export default contactsRouter;
