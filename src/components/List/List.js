import PropTypes from 'prop-types';

import ContactItem from '../ContactItem/ContactItem';
const List = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

export default List;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
