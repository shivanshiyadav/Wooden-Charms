import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5,'Too Short!')
    .required('Required')
    .matches(/[0-9]/, 'Number is Required')
    .matches(/[a-z]/, 'LowerCase is Required')
    .matches(/[A-Z]/, 'UpperCase is Required')
    .matches(/[^\w]/, 'Special Character is Required'),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords Must Match !')
    .required('Required')
});

const Signin = () => {

  const navigate = useNavigate();

  const signinForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      console.log(values);

      //send req to backend/Rest API
      const response = await fetch('http://localhost:5000/user/add', {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('Registered Successfully', {variant: 'success'});
        navigate('/login');
      }else{
        enqueueSnackbar('Something Went Wrong', {variant: 'error'});
      }

      // resetForm();
      // toast.success('Form Submitted Successfully');

    },
    validationSchema: SigninSchema
  });



  return (
    <div style={{ fontFamily: 'Montserrat' }}>
      <div className='container text-start '>
        <div className='row ' >
          
          <div className="col-md-6 bg-">
            <img className='h-75 w-75' src="/download.jpg" />

          </div>
          <div className='col md-6'style={{backgroundColor: '#d9c0c1'}}>
            <div className="card border-0 w-100" style={{backgroundColor: '#d9c0c1'}}>
              <div className="card-body w-75" >

                <h3 className='my-3 text-center display-5 fw-bold'>Sign Up</h3>

               

                <form onSubmit={signinForm.handleSubmit}>

                  <label className='fw-medium' htmlFor="name">Name</label>
                  <span className='text-danger ms-3'>{signinForm.touched.name && signinForm.errors.name}</span>
                  <input type="text" id='name' onChange={signinForm.handleChange} value={signinForm.values.name} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

                  <label className='fw-medium' htmlFor="email">Email Address</label>
                  <span className='text-danger ms-3'>{signinForm.touched.email && signinForm.errors.email}</span>
                  <input type="text" id='email' onChange={signinForm.handleChange} value={signinForm.values.email} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

                  <label className='fw-medium' htmlFor="password">Password</label>
                  <span className='text-danger ms-3'>{signinForm.touched.password && signinForm.errors.password}</span>
                  <input type="password" id='password' onChange={signinForm.handleChange} value={signinForm.values.password} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

                  <label className='fw-medium' htmlFor="confirm">Confirm Password</label>
                  <span className='text-danger ms-3'>{signinForm.touched.confirm && signinForm.errors.confirm}</span>
                  <input type="password" id='confirm' onChange={signinForm.handleChange} value={signinForm.values.confirm} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

                  <button type='submit' className='btn btn-primary w-100 my-4 border-0' style={{backgroundColor: '#391b7f', color:'white'}}>Submit</button>

                </form>

                <p className='fw-medium mb-5 mt-2'>Already a Customer ? <a href="Login" style={{color:'#391b7f'}}>Login</a></p>

              </div>
            </div>

          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signin;
