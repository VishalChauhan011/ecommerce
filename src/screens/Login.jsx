import React from 'react'
import { white_brand_icon, skull, google } from '../assets'
import "../fonts/MajorMonoDisplay-Regular.ttf"
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { login } from '../store/authSlice'


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateSchema = Yup.object({
        username: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        password: Yup.string()
            .min(5, "Must be 8 characters or more")
            .max(20, "Must be 20 characters or less")
            .required("Required"),
    });

    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-[50%] h-screen bg-[#0E0E0E] px-[101px] '>
                <div className='w-[283px] h-[93px] mt-[49px]  '>
                    <img src={white_brand_icon} />
                </div>
                <div className='flex flex-col items-center '>
                    <div className='w-[509px] h-[158px] '>
                        <p className='font-MajorMonoDisplay text-[36px] text-white font-[400] leading-[38px] text-center '>EMPOWER A BRILLIANT FUTURE WITH UNPARALLELED TECH ESSENTIALS.</p>
                    </div>
                    <img src={skull} className='mt-[-30px] ' />
                    <div className='w-[205px] '>
                        <p className='font-manrope text-[20px] text-white font-[700] tracking-[0.8px] text-center mt-[-80px] mb-[12px] '>Gets a rewards and points for every purchase.</p>
                    </div>
                    <div className='w-[301px] '>
                        <p className='font-manrope text-[14px] text-white/75 font-[400] tracking-[0.56px] text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[50%]  justify-center pl-[153px] pr-[120px] '>
                <p className='font-manrope text-[36px] font-[600] leading-normal '>Welcome Back!</p>
                <p className='font-manrope text-black/75 font-[400] leading-normal tracking-[0.96px] '>Start Shopping and get rewards for next shop</p>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={validateSchema}
                    onSubmit={(values) => {
                        dispatch(login(values)).unwrap().then(() => navigate('/'), console.log('VALUES ==>', values));
                    }}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit} >
                            <p className='font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px] '>Email</p>
                            <input id='username' name='username' placeholder='Enter Your Email' className='border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ' onChange={formik.handleChange} value={formik.values.username} />
                            {formik.errors.username && formik.touched.username ? <div className="error">{formik.errors.username}</div> : null}

                            <p className='font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px] '>Password</p>
                            <input id='password' name='password' type='password' placeholder='Enter Password' className='border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ' onChange={formik.handleChange} value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}

                            <div className='flex flex-row mt-[14px]'>
                                <input type='checkbox' className='w-[11px] h-[11px] ' />
                                <p className='font-manrope text-[12px] text-black/50 font-[700] leading-normal ml-[6px] mr-[226px] '>Remember for 30 days</p>
                                <p className='font-manrope  text-[12px] font-[600] leading-normal cursor-pointer '>Forgot Password?</p>
                            </div>

                            <div className='flex flex-col gap-[15px] mt-[49px] items-center '>

                                <button type="submit" className='flex w-[313px] h-[45px] bg-[#0E0E0E] rounded-full items-center justify-center cursor-pointer '>
                                    <p className='font-manrope text-[14px] text-white font-[800] leading-normal tracking-[0.42px] '>Sign In</p>
                                </button>

                                <div className='flex flex-row w-[313px] h-[45px] rounded-full items-center justify-center border border-black/25 border-solid cursor-pointer '>
                                    <img src={google} />
                                    <p className='font-manrope text-[14px] text-black/50 font-[800] leading-normal tracking-[0.42px] ml-[10px] '>Sign Up With Google</p>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center mt-[15px] '>
                                <p className='font-manrope text-[12px] text-black/50 font-[600] leading-normal mr-2 cursor-pointer ' >Don't have an account?</p>
                                <p className='font-manrope text-[#0A1020] font-[600] text-[12px] leading-normal cursor-pointer '>Sign Up</p>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
