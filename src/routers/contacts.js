import { Router } from 'express';
import { getContactsController, getContactsIdController } from '../controllers/contacts.js';
const contactsRouter = Router();

contactsRouter.get('/contacts', getContactsController);

contactsRouter.get('/contacts/:contactId', getContactsIdController);

export default contactsRouter;
