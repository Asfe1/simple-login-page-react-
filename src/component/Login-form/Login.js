import React from 'react';
import './Login.css'
import logo from '../images/blue-logo 1.png'
import img1 from '../images/FB.png'
import img2 from '../images/google.png'

//  
const Login = () => {
    return (
        <div className='background d-flex flex-row-reverse '>
            <div className='col-lg-1 col-md-1  col-sm-1'></div>
            <form action="" id='form' className='border text-center bg-white col-lg-4 col-md-6 col-sm-8 col-12'>
                <div >
                    <img className='img-fluid' src={logo} id="logo" alt="" />
                    <p id='p1'>Explore The Best Tours... Hurry up!!</p>
                    <input className='input' type="email" name="" id="" placeholder='Email Address' />
                    <br />
                    <input className='input' type="password" name="" id="" placeholder='Password' />
                    <a href="/#"><small>Forgot Password?</small></a>
                    <br />

                    <button type="button" class="btn ">Log In</button>
                    <div className='d-flex justify-content-center py-4'>
                        <hr className='' />
                        <p className='px-3 fw-bold pt-1'> or </p>
                        <hr className='' />
                    </div >
                    <div className='d-flex justify-content-center'>
                        <a href="/#"> <img id='img1' src={img1} alt="" /></a>
                        <a href="/#"> <img id='img2' src={img2} alt="" /></a>
                    </div>
                    <p id='bottom-p1'>Don't have an account? <a href="/#">Sign Up</a> </p>
                </div>

            </form>
        </div>
    );
};

export default Login;