import { useForm, ValidationError } from '@formspree/react';
import { FaSmile } from "react-icons/fa"

function ContactForm() {
    const [state, handleSubmit] = useForm("mwkgeegl");
    if (state.succeeded) {
        return <div className="info-box flex flex-col justify-center items-center">
            <FaSmile className='text-[#2196f3] text-4xl' />
            <h3>Contact Form Submitted!</h3>
            </div>;
    }
    return (
        <form onSubmit={handleSubmit} className="email-form">
            <div>
                {/* <div className="w-full flex gap-5"> */}
                <div className="pb-5">
                    <input id="name" type="text" name="name" className='w-full' placeholder="Your Name" required />
                </div>

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="email" type="email" name="email" className='w-full' placeholder="Your Email" required />
                </div>
                {/* </div> */}

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="subject" type="text" name="subject" className='w-full' placeholder="Subject" required />
                </div>

                <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <textarea id="message" name="message" rows="6" className='w-full' placeholder="Message" required></textarea>
                </div>

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button className='bg-[#2196f3] ml-[8%] sm:ml-[25%] md:ml-[30%]' type="submit" disabled={state.submitting}>Send Message</button>

            </div>
        </form>
    );
}

export default function EmailForm() {
    return (
        <div className="sm:w-[400px] md:w-[500px]">
            <ContactForm />
        </div>
    )
}