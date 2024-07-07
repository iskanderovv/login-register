import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Validation } from "../../../components/validition/Validation";
import axios from '../../../api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'rsuite';
import AppContext from "../../../context/store";

const Login = () => {
  const [state, dispatch] = useContext(AppContext)
  const navigate = useNavigate();
  const [changeBtn, setChangeBtn] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: Validation({ ...values, [name]: value })[name]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 2) {
      setChangeBtn(true);
      try {
        const res = await axios.post('/auth/login', { ...values }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        dispatch({type: 'LOGIN_USER', user: res.data.access_token})

        if (res.status === 201) {
          toast.success("Successfully logged in!!!");
          navigate('/dashboard');
        } else {
          throw new Error("Something went wrong!!!");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Invalid email or password!");
        } else {
          toast.error("Login failed. Please try again!");
        }
      } finally {
        setChangeBtn(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[350px] w-full text-center">
        <Link to='/' className="text-4xl font-semibold text-[#333]">Ai.Dev</Link>
        <form action="#" className="flex flex-col gap-y-2 my-8 w-full" onSubmit={handleSubmit}>
          <input
            name="email"
            onChange={handleInput}
            className="text-[#333] border-2 border-cyan-500 py-2 px-2 outline-none rounded-md text-[18px] tracking-wide focus:border-green-500"
            type="text"
            placeholder="Email"
            value={values.email}
          />
          {errors.email && <p className="text-left text-red-500">{errors.email}</p>}
          <input
            name="password"
            onChange={handleInput}
            className="text-[#333] border-2 border-cyan-500 py-2 px-2 outline-none rounded-md text-[18px] tracking-wide focus:border-green-500"
            type="password"
            placeholder="Password"
            value={values.password}
          />
          {errors.password && <p className="text-left text-red-500">{errors.password}</p>}
          <button
            className="text-white py-2 rounded bg-cyan-500 text-[18px] tracking-wide flex items-center justify-center gap-1"
            type="submit">
            {changeBtn ? <><Loader size="sm" /> Login...</> : 'Login'}
          </button>
        </form>
        <p className='text-[18px]'>Do you have an account? <Link to='/register' className='text-cyan-500'>Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
