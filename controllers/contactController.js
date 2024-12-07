const asyncHandler = require("express-async-handler")
const Contact = require("../model/contactModel")


//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});


//@desc create contacts
//@route POST /api/contacts
//@access public

const createContact =  async (req, res, next) => {
  try {
    const { name, email, number } = req.body;
    if (!name || !email || !number) {
        const error = new Error("All fields are mandatory")
        res.status(400);
        return next(error)
    }
    const contact = Contact.create({
      name,
      email, 
      number
    })

    res.status(201).json(contact);
  } catch (err) {
    next(err)
  }
};

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact =asyncHandler( async (req, res) => {
  const Updatedcontact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  if(!contact){
    res.statusCode(404)
    throw new Error("contact not found")
  }
  res.status(200).json(Updatedcontact);
});

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted the contact of ${req.params.id}` });
});

//@desc get one contact
//@route GET /api/contacts/:id
//@access public

const getOneContact = asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.statusCode(404)
    throw new Error("contact not found")
  }
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
};
