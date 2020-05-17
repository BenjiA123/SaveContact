const Contact = require('../models/contacts');

exports.getContacts = (req, res, next) => {
  Contact.find((err, contacts) => {
    res.json(contacts);
  });
};

exports.createContact = (req, res, next) => {
  var contact = new Contact({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
  });
  contact.save().then((contact) => {
    res
      .status(200)
      .json({
        contact: contact,
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Could not create Contact',
        });
        console.log(err);
      });
  });
};

exports.deleteContact = async (req, res, next) => {
  try {
    const del = await Contact.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json({
      message: 'Delete Successful',
    });
  } catch (error) {
    res.status.send({
      error,
    });
  }
};

// const Contact = require('../models/contacts');

// exports.getContacts = async (req, res, next) => {
//   const contacts = await Contact.find();
//   try {
//     res.status(200).json({
//       contacts,
//     });
//   } catch (err) {
//     res.status(400).json({
//       err,
//     });
//   }
// };

// exports.createContact = async (req, res, next) => {
//   var contact = new Contact({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     phone: req.body.phone,
//   });
//   const contactRes = await contact.save();
//   try {
//     res.status(200).json({
//       contactRes,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: 'Could not create Contact',
//     });
//   }
// };
