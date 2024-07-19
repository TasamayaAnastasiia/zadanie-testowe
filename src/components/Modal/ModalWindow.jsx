import Modal from 'react-modal';
import { useState } from 'react';
import { modalIsOpen } from '../../redux/constants';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from "../../redux/slice";
import css from './ModalWindow.module.css';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const ModalWindow = () => {

    const dispatch = useDispatch();
    const open = useSelector(modalIsOpen);
    const [pending, setPending] = useState(false);



    const handleCloseModal = () => {
        dispatch(openModal(false));
        document.body.style.overflow = 'scroll';
    }

    const customStyles = {
        content: {
          width: '500px',
          height: '370px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        },
    };



    const handleSubmit = async ({name, email, phone})  => {
      
        const TOKENBOT = '6377591830:AAHpPxfZRFQXW0e4Z7ZVgY51_nrnx0qErgw';
        const CZATID = '1788849180';
        const MESSAGE = `Request from a new customer:\n Name: ${name};\n Email: ${email};\n Phone: ${phone}`;
        const URL = `https://api.telegram.org/bot${TOKENBOT}/sendMessage?chat_id=${CZATID}&text=${encodeURIComponent(MESSAGE)}`;
        const MySwal = withReactContent(Swal);

        try {
            setPending(true);
            await axios.post(URL);
            MySwal.fire({
                title: "Ok!",
                text: "The request has been sent to our manager, please wait for a reply!",
                icon: "success"
              });
            setPending(false);
        } 
        catch {
            setPending(true);
            MySwal.fire({
                title: 'Error!',
                text: 'Please check your internet connection, do you want to continue?',
                icon: 'error',
                confirmButtonText: 'Yes'
              })
            setPending(false);
        }
        finally {
            setPending(false);
        }

    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Field required'),
        email: Yup.string().email().required('Field required'),
        phone: Yup.string().matches(/^\+\d{11}$/, 'The phone number must contain 11 digits and the + symbol'),
    });
    
    return (
        <Modal isOpen={open} style={customStyles} ariaHideApp={false}>
            <svg onClick={handleCloseModal} className={css.iconClose} width="20" height="20" viewBox="0 0 32 32">
                <path d="M6.276 4.391l-1.885 1.885 9.724 9.724-9.724 9.724 1.885 1.885 9.724-9.724 9.724 9.724 1.885-1.885-9.724-9.724 9.724-9.724-1.885-1.885-9.724 9.724-9.724-9.724z"></path>
            </svg>

            <Formik initialValues={{ name: '', email: '', phone: ''}} validationSchema={validationSchema} onSubmit={handleSubmit}> 
                <Form className={css.form}>
                    <div className={css.formforClients}>
                        <div className={css.label}>
                                <label htmlFor="name">Name</label>
                                <Field className={css.field} type="name" name="name" placeholder="Anastasia"/>
                                <ErrorMessage name="name" render={msg => <div className={css.error}><img height='20' width='20' src='/images/error-icon.png'/><span>{msg}</span></div>}/>
                        </div>
                        <div className={css.label}>
                                <label htmlFor="email">Email</label>
                                <Field className={css.field} type="email" name="email" placeholder="Example@gmail.com"/>
                                <ErrorMessage name="email" render={msg => <div className={css.error}><img height='20' width='20' src='/images/error-icon.png'/><span>{msg}</span></div>}/>
                        </div>
                        <div className={css.label}>
                                <label htmlFor="phone">Phone number</label>
                                <Field className={css.field} type="tel" name="phone" placeholder="+48 (000)-000-000"/>
                                <ErrorMessage name="phone" render={msg => <div className={css.error}><img height='20' width='20' src='/images/error-icon.png'/><span>{msg}</span></div>}/>
                        </div>

                        <button className={css.butSubmit} type="submit">{pending ? 'Loading...' : 'Send'}</button>
                    </div>
                </Form>
            </Formik>

        </Modal>
    )
}