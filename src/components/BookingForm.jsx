'use client';

import React, { useEffect, useRef, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/material_orange.css';
import { toast, ToastContainer } from 'react-toastify';  // Import ToastContainer along with toast
import 'react-toastify/dist/ReactToastify.css';  // Import styles for toastify

const BookingForm = () => {
    const [pageTitle, setPageTitle] = useState('');
    const [pageUrl, setPageUrl] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [captcha, setCaptcha] = useState({ question: '', answer: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const datepickerRef = useRef(null);
    const formRef = useRef(null);

    // Generate a new CAPTCHA
    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        setCaptcha({ question: `${a} + ${b}`, answer: a + b });
        setUserAnswer('');
        setIsCaptchaValid(false);
        setErrorMessage('');
    };

    useEffect(() => {
        setPageTitle(document.title);
        setPageUrl(window.location.href);
        generateCaptcha();
    }, []);

    useEffect(() => {
        const fp = flatpickr(datepickerRef.current, {
            enableTime: false,
            dateFormat: 'd F Y',
            minDate: 'today',
        });

        return () => {
            fp.destroy();
        };
    }, []);

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleCaptchaValidation = () => {
        if (parseInt(userAnswer, 10) === captcha.answer) {
            setIsCaptchaValid(true);
            setErrorMessage('');
            return true;
        } else {
            setIsCaptchaValid(false);
            setErrorMessage('Incorrect answer. Please try again.');
            toast.error('Incorrect CAPTCHA answer. Please try again.'); // Show error toast for wrong CAPTCHA
            generateCaptcha(); // Generate a new question if failed
            return false;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const isValid = handleCaptchaValidation();
        if (!isValid) return;

        setIsSubmitting(true);

        const formData = new FormData(formRef.current);

        const data = {
            name: formData.get('floating_fullname'),
            email: formData.get('floating_email'),
            phone: formData.get('floating_phone'),
            date: formData.get('floating_date'),
            message: formData.get('floating_msg'),
            pageTitle,
            pageUrl,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('Thank you for submitting successfully! Our team will contact you shortly.');
                // Show success toast
                formRef.current.reset();
                generateCaptcha(); // reset captcha
                setUserAnswer('');
            } else {
                toast.error(result.error || 'Something went wrong.');  // Show error toast
                generateCaptcha();
            }
        } catch (error) {
            toast.error('Submission failed.');  // Show error toast
            generateCaptcha();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form py-4 px-2">

            <form ref={formRef} className="max-w-md mx-auto" onSubmit={handleFormSubmit}>
                <input type="hidden" name="pageTitle" value={pageTitle} />
                <input type="hidden" name="pageUrl" value={pageUrl} />

                {/* Full Name */}
                <div class="row">
                    <div className="form-group col-md-12 mb-4">
                        <input
                            type="text"

                            className="form-control"
                            name="floating_fullname"
                            id="floating_fullname"
                            placeholder="First Name"
                            required=""
                        />
                        <i className="fa-regular fa-user" />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="Email"

                            className="form-control"
                            name="floating_email"
                            id="floating_email"
                            placeholder="Email "
                            required=""
                        />
                        <i className="fa-regular fa-envelope" />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            className="form-control"
                            type="tel"
                            name="floating_phone"
                            id="floating_phone"
                            placeholder="Phone"
                            required=""
                        />
                        <img src="/assets/images/icon-phone-primary.svg" alt="" />
                        <div className="help-block with-errors" />
                    </div>



                    <div className="form-group col-md-12 mb-4">
                        <input
                            className="form-control"
                            type="text"
                            ref={datepickerRef}
                            name="floating_date"
                            id="floating_date"
                            placeholder="Date"
                            required=""
                        />
                        <i className="fa-regular fa-calendar" />
                        <div className="help-block with-errors" />
                    </div>


                    <div className="form-group col-md-12 mb-4">
                        <textarea
                            name="floating_msg"
                            id="floating_msg"
                            className="form-control"
                            placeholder="Message"
                            required=""
                        />
                        <i className="fa-regular fa-comments" />
                        <div className="help-block with-errors" />
                    </div>



                    {/* CAPTCHA */}
                    <div className="captcha-container mb-0">
                        <h3 className='fs-6 text'>Solve the CAPTCHA:</h3>
                        <p className="block captch-q m-0">{captcha.question} = ?</p>
                        <div className="captcha-input">

                            <div className="form-group col-md-12 mb-4">
                                <input
                                id="captcha-input"
                                name="captcha"
                                    className="form-control"
                                    type="text"

                                    placeholder="Enter Captcha Answer "
                                    value={userAnswer}
                                    onChange={handleInputChange}
                                    required=""
                                />
                                <i className="fa-regular fa-question" />
                                <div className="help-block with-errors" />
                            </div>


                        </div>
                        {errorMessage && <p className="error-message text-red-500">{errorMessage}</p>}
                    </div>

                    {/* Submit Button */}
                    <div class="contact-form-btn">
                        <button type="submit" class="btn-default" disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Enquiry'}</button>

                    </div>



                </div>


            </form>

            {/* ToastContainer to render the notifications */}
            <ToastContainer   position="top-left"/>
        </div>
    );
};

export default BookingForm;
