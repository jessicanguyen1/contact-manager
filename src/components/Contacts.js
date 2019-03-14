import React, { Component } from 'react';
import Contact from './Contact.js';

class Contacts extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: "John Smith",
                email: "jsmith@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Jane Doe",
                email: "jdoe@gmail.com",
                phone: "333-333-3333"
            },
            {
                id: 3,
                name: "Post Malone",
                email: "posty@gmail.com",
                phone: "222-222-2222"
            }
        ]
    }


    render() {
        const { contacts } = this.state;

        return (
            <div className="container">
                {contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                )}
            </div>
        )
    }
};

export default Contacts;