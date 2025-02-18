import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import styles, { layout } from "../style"
import { email, phone } from "../assets"
import { contactInfo } from "../constants"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      '',
      '',
      {
        from_name: form.name,
        to_name: '',
        from_email: form.email,
        to_email: '',
        message: form.message,
      },
      ''
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. We will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.')
    })
  }

  return (
    <section id="contact" className={layout.section}>

      <div className="flex flex-1 flex-col md:mb-0 mb-4">
        <p className={`${styles.paragraph} small-text-gradient-gold`}>Get in touch</p>
        <h2 className={`${styles.heading2} `}>Contact.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {contactInfo.description}
        </p>
        <div className="mt-16 flex items-center space-x-2">
          <img src={email} alt="icon" className={`text-white w-[22px] h-[22px]`}/>
          <p className={`${styles.paragraph} text-white text-[22px]`}>{contactInfo.email}</p>
        </div>

        <div className="mt-4 flex items-center space-x-2">
          <img src={phone} alt="icon" className={`text-white w-[22px] h-[22px]`}/>
          <p className={`${styles.paragraph} text-white text-[22px]`}>{contactInfo.number}</p>
        </div>
      </div>

      <div className={`flex-1 flex bg-tertiary p-8 rounded-2xl`}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex-1 flex-col gap-8"
        >
          <label className="flex flex-col mb-3">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-quaternary py-4 px-6 placeholder:text-dimWhite text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col mb-3">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-quaternary py-4 px-6 placeholder:text-dimWhite text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col mb-3">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
            rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-quaternary py-4 px-6 placeholder:text-dimWhite text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-quaternary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact