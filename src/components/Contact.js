import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {

    const { name, email, phone } = props.contact;

    return (
        <div className="card card-body mb-3">
            <h4>{name}</h4>
            <ul className="list-group">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
            </ul>
        </div>
    )
};


Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;