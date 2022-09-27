import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
        <section className="py-[100px]" id="contact">
            <div className="container">
                <SectionTitle
                    title="Get In Touch"
                />

                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-5">
                        <div className="font-medium space-y-2">
                            <address className="not-italic">
                                North Plainfield, NJ 07060,<br/>
                                United States
                            </address>
                            <p>jdeghelshi@icloud.com </p>
                            <p>+908-251-1894</p>
                        </div>

                        <SocialMedia className="mt-6 md:mt-10"/>
                    </div>

                    <div className="col-span-7 mt-10 md:mt-0">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
