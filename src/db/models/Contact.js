import { Schema, model } from 'mongoose';

import { contactTypeList, phoneNumberRegExp} from '../../constants/contacts.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      match: phoneNumberRegExp,
      required: true,
    },
    email: {
      type: String,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      required: true,
      default: 'personal',
    },
  },
  { versionKey: false, timestamps: true },
);

const ContactCollection = model('contact', contactSchema);

export default ContactCollection;
