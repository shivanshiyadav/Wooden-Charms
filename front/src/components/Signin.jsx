import React from 'react'

  const Furniture = useFormik({
        initialValues: {
          name: '',
          email:'',
          password: '',
         
        },
        onSubmit: async (values, { resetForm }) => {
          // alert(JSON.stringify(values));
        //   values.image = addImage.name;
          console.log(values);
    
          //send req to backend/Rest API
          const response = await fetch('http://localhost:5000/furniture/add', {
            method : 'POST',
            body : JSON.stringify(values),
            headers : {
              'Content-Type' : 'application/json'
            }
          });
          console.log(response.status);
          console.log(response.statusText);
    
          if (response.status === 200) {
            enqueueSnackbar('Successfully Added', {variant: 'success'});
          }else{
            enqueueSnackbar('Something Went Wrong', {variant: 'error'});
          }
          // resetForm();
          // toast.success('Form Submitted Successfully');
    
        },
       
      });


const Signin = () => {
  return (
    <div className="bgbody">

      <div class="input-signin">

        <div class="login-block">
          <h1>Sign Up </h1>
          <input type="text" value="" placeholder="Username" id="username" />
          <input type="password" value="" placeholder="Password" id="password" />
          <h3 className='connect'>Or Connect with</h3>
          <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
          <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
          <img width="30" height="30" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter" />

          <button>Login</button>
        </div>




      </div>
    </div>
  )
}

export default Signin