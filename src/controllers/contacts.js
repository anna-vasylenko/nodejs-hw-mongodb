import createHttpError from 'http-errors';

import * as contactsServices from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';


export const getContactsController = async (req, res) => {

  const {page, perPage} = parsePaginationParams(req.query);
  const {sortBy, sortOrder} = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);


const data = await contactsServices.getContacts({page, perPage, sortBy, sortOrder, filter});

    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  };


  export const getContactByIdController = async (req, res, next) => {
    const {contactId} = req.params;
    const data = await contactsServices.getContactById(contactId);

   if(!data) {
   next ( createHttpError(404, 'Contact not found'));
   return;
 }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data,
    }

    );
  };

  export const addContactController = async (req, res) => {
const data = await contactsServices.addContact(req.body);

res.status(201).json({
    status: 201,
    message: "Successfully created a contact!",
    data,
});
  };


export const deleteContactController = async (req, res, next) =>{
const {contactId} = req.params;
const data = await contactsServices.deleteContactById(contactId);

if(!data) {
    next( createHttpError(404, 'Contact not found'));
    return;
};

res.status(204).send();
};

export const updateContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contactsServices.updateContactById(contactId, req.body);

    if (!result) {
        next(createHttpError(404, 'Contact not found'));
        return;
      }

    res.status(200).json({
        status: 200,
        message: "Successfully patched a contact!",
        data: result,
    });
};
