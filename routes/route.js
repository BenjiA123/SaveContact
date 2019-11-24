const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts')


//Retrieve contacts
router.get('/contacts', (req, res, next) => {
    Contact.find((err, contacts) => {
        res.json(contacts)
    })
})
//Send contacts
router.post('/contact', function (req, res, next) {

    var newContact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone
    });
    newContact.save(function (err, contact) {
        if (err) {
            res.json({ msg: `Failed to add contact ${err}` })
            console.log(err);
        }
        else if (contact) {

            post.save()
            .then(createdPost => {
                res.status(201).json({
                    message: `Contact added successfully`,
                    post: {
                        ...createdPost,
                        _id: createdPost._id
                    }
                })
            })

        }
    })
})




// delete contacts
router.delete('/contact/:id', (req, res, next) => {
    //logic
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
})


module.exports = router