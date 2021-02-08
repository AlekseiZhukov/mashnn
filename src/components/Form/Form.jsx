import React, { useState } from 'react';
import {Formik, Field, Form } from 'formik';
import FormSchemaValidation from "./formSchemaValidation";
import style from './Form.module.css';
import axios from "axios";
import image from '../../assets/imgs/form.jpg'
import Roll from 'react-reveal/Roll';


export default function ContactUs() {
    const[button, setButton] = useState(false);
    const sendForm = (e) => {

        setButton(true)
        const form = new FormData();
        form.append('service_id', 'service_bpye6u2')
        form.append('template_id', 'template_kzun28g')
        form.append('user_id', 'user_wMiD67lwfk7lC4n1FwcS8')
        form.append('from_name', e.username)
        form.append('from_email', e.email)
        form.append('from_phone', e.phone)
        form.append('message', e.message)

        axios.post('https://api.emailjs.com/api/v1.0/email/send-form',form, {
            contentType: false,
            processData: false
        })
            .then(response => {
                if(response.status === 200){
                    alert('Сообщение отправлено');
                    setButton(false);
                }
            })
            .catch(error => {
                setButton(false);
                console.log(error)
            })
    }


    return (
        <div className={style.formBlock} style={{ background: `url('${image}') center`}}>

            <div className={style.backgroundBlock}></div>
            <div className={style.formBlockWrapper}>
                <Roll left><h2>Напишите нам</h2></Roll>
        <Formik
            initialValues={{
                username: '',
                email: '',
                phone: '',
                message: ''
            }}
            validationSchema={FormSchemaValidation}
            onSubmit={(values, actions) => {

                    setTimeout(() =>{
                        sendForm(values);
                        actions.resetForm();
                    }, 30)
                }
            }
        >
            {({errors,touched}) => (

                <Form className={style.formContainer}>
                    <div className={style.fieldsWrapper}>
                        <div className={style.lableFieldWrapper}>
                    <label htmlFor='username' className={style.labelField}>имя:</label>
                    <Field
                        className={!errors.username || !touched.username ? style.field : style.inputError}
                        name='username'
                        placeholder = 'введите имя'
                        type = 'text'
                    />
                    {errors.username && touched.username && <div className={style.fieldError}>{errors.username}</div>}
                        </div>
                        <div className={style.lableFieldWrapper}>
                    <label htmlFor='email' className={style.labelField}>email:</label>
                    <Field
                        className={!errors.email || !touched.email ? style.field : style.inputError}
                        name='email'
                        placeholder = 'введите email'
                        type = 'email'
                    />
                    {errors.email && touched.email && <div className={style.fieldError}>{errors.email}</div>}
                        </div>
                        <div className={style.lableFieldWrapper}>
                    <label htmlFor='phone' className={style.labelField}>телефон:</label>
                    <Field
                        className={!errors.phone || !touched.phone ? style.field : style.inputError}
                        name='phone'
                        placeholder = '+7XXXXXXXXXX'
                        type = 'text'
                    />

                    {errors.phone && touched.phone && <div className={style.fieldError}>{errors.phone}</div>}
                        </div>
                    </div>
                    <div className={style.messageWrapper}>
                        <label htmlFor='message' className={style.labelField}>сообщение:</label>
                        <Field
                            className={!errors.message || !touched.message ? style.fieldMessage : style.fieldMessageError}
                            name='message'
                            placeholder = 'введите сообщение'
                            type = 'text'
                            as = 'textarea'
                        />
                        {errors.message && touched.message && <div className={style.fieldError}>{errors.message}</div>}
                    </div>
                    <button type="submit" disabled={button} >Отправить</button>
                </Form>
            )}
        </Formik>
            </div>
        </div>
    );
}