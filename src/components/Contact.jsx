import Lottie from "lottie-react";
import ContactUs from "../assets/animations/Contact Us.json";
import Success from "../assets/animations/success.json";
import Footer from "./Footer";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("myzdearn");

  return (
    <section
      id="Contact"
      className=" text-[var(--text-main-dark)]"
    >
      <div className="pt-20  space-y-12 overflow-hidden">
        <div
          data-aos="fade-up"
          className="relative mx-auto mt-16 max-w-full pt-10 lg:px-8"
        >
          {/* LightEffect */}
          <div
            aria-hidden="true"
            className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"
          ></div>
          <div
            aria-hidden="true"
            className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-10 transform-gpu 
            [background:conic-gradient(from_90deg_at_50%_50%,transparent_50%,transparent_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] 
            md:max-w-[600px]"
          ></div>
          <div className="relative isolate">
      
            {/* Info */}
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title-dark)]">
                Get In Touch
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle-dark)]">
                Have a project in mind or want to discuss a potential
                collaboration? Feel free to reach out to me.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-[3%] md:px-[10%]">
          <div data-aos="fade-up">
            <div className="bg-[var(--bg-card-dark)] space-y-5 border border-zinc-700 p-10 lg:w-[800px] rounded-2xl hover:border-cyan-500 hover:-translate-y-2 transition duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.9)]">
              <div className="space-y-5  rounded-2xl">
                <h2 className="font-bold text-2xl">Contact Information</h2>
                <div className="flex space-y-3 space-x-5 flex-wrap justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-gray-300 w-10 h-10 rounded-full">
                      <i className="fas fa-map-marker-alt text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-bold">Location</div>
                      <div>Egypt ,Fayoum City</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-gray-300 w-10 h-10 rounded-full">
                      <i className="fas fa-envelope text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-bold">Email</div>
                      <a
                        href="mailto:ziadmostafa9866@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        contact@ziadmostafa.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-gray-300 w-10 h-10 rounded-full">
                      <i className="fas fa-phone text-blue-600"></i>
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
                {state.succeeded && (
                  <div className="flex items-center gap-1">
                    <Lottie
                      className="w-10"
                      loop={false}
                      animationData={Success}
                    />
                    <p className="text-lg">
                      Your Message has been sent successfully
                    </p>{" "}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-700 text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-zinc-700 text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg  border border-zinc-700 text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-[rgb(39,96,143)] hover:bg-[rgb(32,80,119)] cursor-pointer hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(34,211,238,0.9)] transition duration-300 rounded-lg py-3 w-full"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    {state.submitting ? "submitting" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ContactAnimation */}
          <div data-aos="fade-down">
            <div className="hidden md:flex w-[500px] hover:-translate-y-2 transition duration-300">
              <Lottie animationData={ContactUs} loop={true} />
            </div>
          </div>
        </div>

        <div className="h-[5px] border border-zinc-700  rounded-full w-[80%] mx-auto"></div>

        <Footer />
      </div>
    </section>
  );
}
export default Contact;
