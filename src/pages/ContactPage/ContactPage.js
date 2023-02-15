import { Fragment } from 'react';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import Title from "../../components/Title/Title";
import classes from './ContactPage.module.css'
export const ContactPage = () => {
    const title = "Contact";
    return (
        <Fragment>
        <Title title={title} />
        <div className='container my-5'>
            <div className='row'>
                <div className='col-sm-5'>
                    <ContactInfo />
                </div>
                <div className='col-sm-7'>
                    <h1 className={classes['title-page']}>Get in touch!</h1>
                    <ContactForm />
                </div>

            </div>
        </div>
        </Fragment>
    )
}