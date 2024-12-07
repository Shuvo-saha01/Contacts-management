const asyncHandler = require("express-async-handler")
const Contact = require("../model/contactModel")


//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContact = async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  };

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

    res.status(201).json({ message: "create Contact" });
  } catch (err) {
    next(err)
  }
};

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact =asyncHandler( async (req, res) => {
  res.status(200).json({ message: `updated contacts of  ${req.params.id}` });
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
  res.status(200).json({ message: `got contact of ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
};
