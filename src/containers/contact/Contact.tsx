
function Contact() {
  return (
    <>
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      
      <form action="#"> 
        <div className="input-box">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Your Number" />
          <input type="text" placeholder="Your Subject" />
        </div>
        <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
      </section></>
  )
}

export default Contact
