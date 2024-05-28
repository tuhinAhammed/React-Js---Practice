import React, { useState } from 'react'
import {useFormik} from "formik"
const FormikValidation = () => {

    // const [user , setUser] = useState({
    //     name : "" ,
    //     email : "",
    //     password : ""
    // })

    // // handle Change 
    // const handleChange = (e) => {
    //     setUser({
    //         ...user , [e.target.name] : e.target.value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(user);
    //     setUser({name: "", email: "", password: ""});
    // }

    // formik by validation
    const formik = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : ""
        },
        onSubmit : (values , {resetForm}) => {
            console.log(values);
            resetForm({values : ""})
        }
    })
    console.log(formik);
  return (
    <div>
        <form action="" onSubmit={formik.handleSubmit} >
            <label htmlFor="" >Name</label>
            <input type="text" name = "name" onChange={formik.handleChange} value={formik.values.name}/>
            <label htmlFor="" >email</label>
            <input type="text" name = "email" onChange={formik.handleChange} value={formik.values.email} />
            <label htmlFor="" >password</label>
            <input type="text" name = "password"  onChange={formik.handleChange} value={formik.values.password} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default FormikValidation