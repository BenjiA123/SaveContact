const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/contactController")

//Retrieve contacts



router.route("/contacts")
.get(ContactController.getContacts)
.post(ContactController.createContact);


router.delete("/contacts/:id", ContactController.deleteContact);

module.exports = router;








