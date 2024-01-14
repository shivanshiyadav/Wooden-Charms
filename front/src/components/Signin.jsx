import React from 'react'



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