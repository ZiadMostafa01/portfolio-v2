import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import ContactUs from "../../assets/animations/Contact Us.json";
import Success from "../../assets/animations/success.json";
import Footer from "../layouts/Footer";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_skk9tqm";
    const TEMPLATE_ID = "template_lbd499q";
    const PUBLIC_KEY = "tLtZXpMo6W2BJJ3bB";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSucceeded(true);
          setIsSubmitting(false);
          form.current.reset(); 
          setTimeout(() => setIsSucceeded(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section id="Contact" className=" text-[var(--text-main)]">
      <div className="pt-20 space-y-12 overflow-hidden">
        <div data-aos="fade-up" className="relative mx-auto mt-16 max-w-full pt-10 lg:px-8">
          <div aria-hidden="true" className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
          <div aria-hidden="true" className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-10 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,transparent_50%,transparent_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]"></div>
          <div className="relative isolate">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">Get In Touch</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle)]">
                Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-[3%] md:px-[10%]">
          <div data-aos="fade-up">
            <div className="bg-[var(--bg-card)] space-y-5 border border-[var(--border)] p-10 lg:w-[800px] rounded-2xl hover:border-[var(--primary)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] hover:-translate-y-2 transition duration-300 ">
              <div className="space-y-5 rounded-2xl">
                <h2 className="font-bold text-2xl">Contact Information</h2>
                <div className="flex space-y-3 space-x-5 flex-wrap justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-[var(--bg-card)] w-10 h-10 rounded-full">
                      <i className="fas fa-map-marker-alt text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <div className="font-bold">Location</div>
                      <div>Egypt ,Fayoum City</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-[var(--bg-card)] w-10 h-10 rounded-full">
                      <i className="fas fa-envelope text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <div className="font-bold">Email</div>
                      <a href="mailto:ziadmostafa9866@gmail.com" className="text-blue-500 hover:underline">
                        contact@ziadmostafa.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-[var(--bg-card)] w-10 h-10 rounded-full">
                      <i className="fas fa-phone text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <div className="font-bold">Phone</div>
                      <div>+201027797648</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="font-bold text-2xl">Send Me a Message</h2>
                
                {isSucceeded && (
                  <div className="flex items-center gap-1 bg-green-500/10 p-2 rounded-lg border border-green-500/20">
                    <Lottie className="w-12" loop={false} animationData={Success} />
                    <p className="text-lg text-green-400">Your Message has been sent successfully!</p>
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name" // تعديل: ليطابق {{name}} في الصورة
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-purple-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email" // تعديل: ليطابق {{email}} في الصورة
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-purple-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message" // تأكد أن {{message}} موجودة بنفس الاسم في محتوى القالب
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-purple-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#57379C] hover:bg-[#6d4bc2] text-white cursor-pointer hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(168,85,247,0.9)] transition duration-300 rounded-lg py-3 w-full flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div data-aos="fade-down">
            <div className="hidden md:flex w-[500px] hover:-translate-y-2 transition duration-300">
              <Lottie animationData={ContactUs} loop={true} />
            </div>
          </div>
        </div>

        <div className="h-[5px] border border-[var(--border)] rounded-full w-[80%] mx-auto"></div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;