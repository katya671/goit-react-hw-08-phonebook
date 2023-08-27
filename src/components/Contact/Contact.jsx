import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { toast } from 'react-toastify';

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`${name} has been deleted from contacts`);
  };

  return (
    <>
      {name} : {number}
      <button
        className={css['delete-btn']}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
