import { getAllContacts, getContactById } from '../services/contacts.js';
export const getContactsController  = async (req, res) => {
    const contacts = await getAllContacts();

    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,

    });
  };

  export const getContactsIdController = async (req, res) => {
    const { contactId } = req.params;

  try {
    const contact = await getContactById(contactId);
    if (contact) {
      res.status(200).json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: 'Contact not found',
    });
  }
  };
  
  
  