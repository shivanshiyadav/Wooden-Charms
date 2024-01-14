import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'

const AddFurniture = () => {

    const [addImage, setAddImage] = useState('' )

    const uploadimage = async () => {
        const file = e.target.files[0];
        // setAddImage(file);
        const fd = new FormData();
        fd.append('image', file);
        fetch('http://localhost:5000/utils/uploadfile', {
            method: 'POST',
            body: fd
        }) .then((res) => {
            if(res.status === 200){
                enqueueSnackbar('Successfully Added', {variant: 'success'});
            }
        });
        ``
    }


   
    const Furniture = useFormik({
        initialValues: {
          name: '',
          description: '',
          price: '',
          offer: '',
          image: ''
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

  return (
    <div>
        <div className="container d-flex justify-content-center">
         <form className='w-50 ' onSubmit={Furniture.handleSubmit}>
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4">
    <div className="col">
      <div data-mdb-input-init="" className="form">
      <label className="form-label" htmlFor="form3Example1">
          Name
        </label>
        <input type="text" id="name"
        value={Furniture.values.name}
        onChange={Furniture.handleChange}

className="form-control" />
       
      </div>
    </div>
    {/* <div className="col">
      <div data-mdb-input-init="" className="formH">
      <label className="form-label" htmlFor="form3Example2">
          Last name
        </label>
        <input type="text" id="form3Example2" className="form-control" />
      
      </div>
    </div> */}
  </div>
  {/* Email input */}
  <div data-mdb-input-init="" className="form mb-4">
  <label className="form-label" htmlFor="form3Example3">
      Description
    </label>
    <input type="text" id="description"
    value={Furniture.values.description}
    onChange={Furniture.handleChange}
     className="form-control" />
  
  </div>
  {/* Password input */}
  <div data-mdb-input-init="" className="form mb-4">
  <label className="form-label" htmlFor="form3Example4">
      Price
    </label>
    <input type="text" id="price"
    value={Furniture.values.price}
    onChange={Furniture.handleChange}
    className="form-control" />
  
  </div>
  <div data-mdb-input-init="" className="form mb-4">
  <label className="form-label" htmlFor="form3Example4">
      Offer
    </label>
    <input type="text" id="offer"
    value={Furniture.values.offer}
    onChange={Furniture.handleChange}
    className="form-control" />
  
  </div>
  <div data-mdb-input-init="" className="form mb-4">
  <label className="btn btn-primary" htmlFor="form3Example4" onClick={uploadimage}>
      Upload Image
    </label>
    <input type="file" id="form3Example4" className="form-control" />
  
  </div>
  {/* Checkbox */}
  {/* <div className="form-check d-flex justify-content-center mb-4">
    <input
      className="form-check-input me-2"
      type="checkbox"
      defaultValue=""
      id="form2Example33"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="form2Example33">
      Subscribe to our newsletter
    </label>
  </div> */}
  {/* Submit button */}
  <div className="text-center">
  <button
    data-mdb-ripple-init=""
    type="submit"
    className="btn btn-primary"
  >
    Submit
  </button>
  </div>
  {/* Register buttons */}
  {/* <div className="text-center">
    <p>or sign up with:</p>
    <button
      data-mdb-ripple-init=""
      type="button"
      className="btn btn-secondary btn-floating mx-1"
    >
      <i className="fab fa-facebook-f" />
    </button>
    <button
      data-mdb-ripple-init=""
      type="button"
      className="btn btn-secondary btn-floating mx-1"
    >
      <i className="fab fa-google" />
    </button>
    <button
      data-mdb-ripple-init=""
      type="button"
      className="btn btn-secondary btn-floating mx-1"
    >
      <i className="fab fa-twitter" />
    </button>
    <button
      data-mdb-ripple-init=""
      type="button"
      className="btn btn-secondary btn-floating mx-1"
    >
      <i className="fab fa-github" />
    </button>
  </div> */}
</form>
</div>

    </div> 
    

 
  )
}

export default AddFurniture

