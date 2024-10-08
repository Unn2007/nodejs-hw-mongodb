import { Router } from 'express';
import {
  getContactsController,
  getContactsIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));

contactsRouter.get(
  '/contacts/:contactId',
  ctrlWrapper(getContactsIdController),
);
contactsRouter.post('/contacts', ctrlWrapper(createContactController));
contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController),
);
contactsRouter.patch(
  '/contacts/:contactId',
  ctrlWrapper(patchContactController),
);

export default contactsRouter;
