import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import classes from './ContactPage.module.css'
export const ContactPage = () => {
    return (
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
    )
}