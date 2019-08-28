import React, { Component } from 'react';
import './ReservationPage.css'
import { DatePicker, InputNumber } from 'antd';


class ReservationPage extends Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        return (
            <div>
                <h2>Habibi Restaurant</h2>

                <h2 class="gradient-multiline"><span>Reservations</span></h2>

                <div class="container">
                    <form>
                        <div class="row">
                            <h4>Reservation</h4>
                            <div class="input-group input-group-icon">
                                <input type="text" placeholder="Full Name" />
                                <div class="input-icon"><i class="fa fa-user"></i></div>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="email" placeholder="Email Adress" />
                                <div class="input-icon"><i class="fa fa-envelope"></i></div>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="number" placeholder="Phone Number" />
                                <div class="input-icon"><i class="fas fa-phone"></i></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-half">
                                <h4>Pick a Date</h4>
                                <div class="input-group">
                                    <DatePicker className="date-pick" onChange={this.onChange} />
                                </div>
                            </div>
                            <div class="col-half">
                                <h4>Time</h4>
                                <div class="input-group">
                                    <InputNumber size="large" min={1} max={10} defaultValue={2} onChange={this.onChange} />
                                </div>
                            </div>
                            <div class="col-half">
                                <h4>For How Much?</h4>
                                <div class="input-group">
                                    <InputNumber size="large" min={1} max={10} defaultValue={2} onChange={this.onChange} />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <h4>Smoking?</h4>
                            <div class="input-group">
                                <input type="radio" name="payment-method" value="card" id="payment-method-card" checked="true" />
                                <label for="payment-method-card"><span><i class="fas fa-smoking"></i>Yes</span></label>
                                <input type="radio" name="payment-method" value="paypal" id="payment-method-paypal" />
                                <label for="payment-method-paypal"> <span><i style={{ fontSize: 18 + 'px' }} class="fas fa-smoking-ban"></i>No</span></label>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="text" placeholder="Card Number" />
                                <div class="input-icon"><i class="fa fa-credit-card"></i></div>
                            </div>
                            <div class="col-half">
                                <div class="input-group input-group-icon">
                                    <input type="text" placeholder="Card CVC" />
                                    <div class="input-icon"><i class="fa fa-user"></i></div>
                                </div>
                            </div>
                            <div class="col-half">
                                <div class="input-group">
                                    <select>
                                        <option>01 Jan</option>
                                        <option>02 Jan</option>
                                    </select>
                                    <select>
                                        <option>2015</option>
                                        <option>2016</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <h4>Terms and Conditions</h4>
                            <div class="input-group">
                                <input type="checkbox" id="terms" />
                                <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }

}


export default ReservationPage;