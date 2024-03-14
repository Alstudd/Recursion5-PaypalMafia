import InfoBoxes from './InfoBoxes'
import EmailForm from './EmailForm'
import "../styles/contact.css"

export default function ContactWrapper() {
    return (
        <div>
            <section id="contact" className="contact flex justify-center">

                <div className="container">

                    <header className="section-header pb-[40px]">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </header>
                    <div className='flex lg:flex-row lg:justify-center items-center flex-col gap-10'>
                        <InfoBoxes />
                        <EmailForm />
                    </div>

                </div>

            </section>
        </div>
    )
}