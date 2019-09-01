import React from 'react';
import './ReservationPage.css'
import { Button, message } from 'antd';
import { InputNumber, DatePicker, TimePicker, Radio, Checkbox } from "@jbuschke/formik-antd";
import { withFormik } from 'formik';
import { NavLink } from "react-router-dom";
import * as yup from 'yup';
import moment from 'moment';
import ReservationService from '../../Services/ReservationService'

const format = 'HH:mm';

const ReservationPage = ({
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting
}) => (
        < div >
            <h2>Habibi Restaurant</h2>

            <h2 className="gradient-multiline"><span>Reservations</span></h2>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <h4>Reservation</h4>
                        <div className="input-group input-group-icon">
                            <div>
                                <input type="text" onBlur={handleBlur} placeholder="Full Name" name="title" onChange={handleChange} />
                                {touched.title && errors.title && <p className="form-error-msg">{errors.title}</p>}
                            </div>
                            <div className="input-icon"><i className="fa fa-user"></i></div>
                        </div>
                        <div className="input-group input-group-icon">
                            <div>
                                <input type="text" placeholder="Email Address" name="email" onChange={handleChange} />
                                {touched.email && errors.email && <p className="form-error-msg">{errors.email}</p>}
                            </div>
                            <div className="input-icon"><i className="fa fa-envelope"></i></div>
                        </div>
                        <div className="input-group input-group-icon">
                            <div>
                                <input type="text" placeholder="Phone Number" name="phone" onChange={handleChange} />
                                {touched.phone && errors.phone && <p className="form-error-msg">{errors.phone}</p>}
                            </div>
                            <div className="input-icon"><i className="fas fa-phone"></i></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-half">
                            <h4>Pick a Date</h4>
                            <div className="input-group">
                                <DatePicker classNameName="date-pick" disabledDate={(current) => {
                                    return moment().add(-1, 'days') >= current ||
                                        moment().add(1, 'month') <= current;
                                }} name="start" />
                            </div>
                        </div>
                        <div className="col-half">
                            <h4>Time</h4>
                            <div className="input-group">
                                <TimePicker name="end" disabledHours={() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} defaultValue={moment('12:08', format)} format={format} />
                            </div>
                        </div>
                        <div className="col-half">
                            <h4>For How Much?</h4>
                            <div className="input-group">
                                <InputNumber size="large" name="people" min={2} max={10} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h4>Smoking?</h4>
                        <div className="input-group">
                            <Radio.Group name="smoking" size="default">
                                <Radio.Button value={true}><i className="fas fa-smoking"></i> Yes</Radio.Button>
                                <Radio.Button value={false}>No <i style={{ fontSize: 17 + 'px' }} className="fas fa-smoking-ban"></i></Radio.Button>
                            </Radio.Group>
                        </div>

                    </div>
                    <div className="row">
                        <h4>Terms and Conditions</h4>
                        <div className="input-group">
                            <Checkbox name="terms"></Checkbox>
                            <label htmlFor="terms">I accept the terms and conditions for reserve table in Habibi restaurant, and hereby confirm I have read the privacy policy.</label>
                            <div>
                                {touched.terms && errors.terms && <p className="form-error-msg">{errors.terms}</p>}
                            </div>
                        </div>
                        <Button htmlType="submit" type="primary" disabled={isSubmitting}>Submit</Button>
                    </div>
                </form>
            </div> 
            <Button type="danger" className="go-back-btn" ghost><NavLink to="/">Go Back</NavLink></Button>
        </div>
    )

const phoneRegex = new RegExp('^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$')

const FromikApp = withFormik({
    mapPropsToValues() {
        return {
            title: '',
            email: '',
            phone: '',
            start: moment().toDate(),
            end: moment().toDate(),
            people: 2,
            smoking: false,
            terms: false
        }
    },
    validationSchema: yup.object().shape({
        email: yup.string().email().required('*email is required field'),
        terms: yup.boolean().oneOf([true], '*You Must Accept Terms and Conditions'),
        phone: yup.string().matches(phoneRegex, '*Phone number is not valid').required('*Phone Number is required field'),
        title: yup.string().min(5, '*Please enter full name').max(40, '*Please enter no more than 40 characters').required('*Please enter your full name'),
    }),
    handleSubmit: (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            ReservationService.addReservation(values).then(()=>{
                message.success('The reservation is booked successfully')
            })
            setSubmitting(false);
            resetForm();
        }, 2000);
    },
})(ReservationPage)

export default FromikApp;
