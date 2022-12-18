import classes from './ContactInfo.module.css';

const ContactInfo=()=>{
return <section>
    <ul className={classes['ul-contact']}>
        <li>
            <div className={classes['contact-info']}>
                <div><i className='fa fa-envelope'></i></div>
                <div>
                    <h5>Chat to us</h5>
                    <span>Our friendly team is here to help</span>
                    <a href='skype:dramshop?chat'>start chat</a>
                </div>
            </div>
        </li>
        <li>
            <div className={classes['contact-info']}>
                <div><i className='fa fa-map-marker'></i></div>
                <div>
                    <h5>Visit us</h5>
                    <span>You can find our store here</span>
                    <strong>1225, Main Street, Iran, 38000</strong>
                </div>
            </div>
        </li>
        <li>
            <div className={classes['contact-info']}>
                <div><i className='fa fa-phone'></i></div>
                <div>
                    <h5>Call us</h5>
                    <span>Mon-Fri from 8am-9pm</span>
                    <a href='tel:8888333120'>8888-333-120</a>
                </div>
            </div>
        </li>
    </ul>
</section>
}
export default ContactInfo