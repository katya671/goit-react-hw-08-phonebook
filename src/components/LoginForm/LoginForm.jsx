import css from '../Form.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Successful login. Welcome!');
      })
      .catch(() => {
        toast.error('Authentication failed. Please try again.');
      });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>Email</label>
      <input type="email" id="email" />

      <label>Password</label>
      <input type="password" id="password" />

      <button>Log in</button>
    </form>
  );
};

export default LoginForm;
