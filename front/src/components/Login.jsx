import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import * as Yup from 'yup';
// import SignUp from './SignUp';


const LoginSchema = Yup.object().shape({

  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
    .matches(/[0-9]/, 'Number is Required')
    .matches(/[a-z]/, 'LowerCase is Required')
    .matches(/[A-Z]/, 'UpperCase is Required')
    .matches(/[^\w]/, 'Special Character is Required')
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      console.log(values);

      //send req to backend/Rest API
      const response = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('LoggedIn Successfully', { variant: 'success' });
        const data = await response.json();
        console.log(data);

        //to save user data in session 
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/manage');
      }
      else if (response.status === 401) {
        enqueueSnackbar('Email or Password is Incorrect', { variant: 'error' });
      }
      else {
        enqueueSnackbar('Something Went Wrong', { variant: 'error' });
      }

    },
    validationSchema: LoginSchema
  });



  return (
    <header class="hero">
      <div class="hero-inner">

        <div class="hero-text">
          <h2>Wooden Charms</h2>
          <p>"Welcome back to your Wooden Charms! Explore our latest collection of handcrafted furniture to elevate your space. Don't have an account yet? Join us and unlock exclusive offers and personalized recommendations!"</p>
          <form class="hero-form" action="/">
            <div class="hero-form-input">
              <input class="hero-email-input" type="email" placeholder="Email Address" required />
              <input class="hero-form-submit" type="submit" value="Login" />
            </div>
            <div>
              <p>Are you new customer...? <span><a href="SignIn"> Sign Up Now </a></span> </p>
            </div>
          </form>
        </div>

        <div class="hero-image">
          <div className="logo-text">
            <img src="/download.jpg" />

          </div>
        </div>

      </div>
    </header>

  )
}

export default Login;
