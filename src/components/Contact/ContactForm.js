import Button from "../UI/Button"

const ContactForm = () => {
    return <form>
        <div className="row">
          
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Your name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type="email" className="form-control" id="Email" />
            </div>
            <div className="col-md-12">
            <label htmlFor="message" className="form-label">Your message</label>
            <textarea className="form-control" id="message"/>
            </div>
           <Button class="mt-5">send message</Button>
        </div>
    </form>
}
export default ContactForm