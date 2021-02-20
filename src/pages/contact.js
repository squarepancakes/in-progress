import React from "react"
import Layout from "../components/layout"
import styles from "./contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <div>
        <h1>We'll love to help in achieving your dream home</h1>
        <p>
          <a href="mailto:forge_studio@outlook.com">Contact us now!</a>
        </p>
      </div>

      <div>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="Contact Form" />

          <div className={styles.formField}>
            <label htmlFor="name">Name:</label>
            <input className={styles.inputWidth} name="name" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email">Your Email:</label>
            <input className={styles.inputWidth} type="email" name="email" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="enquiryType">Type of Enquiry:</label>
            <select className={styles.inputWidth} name="enquiry type">
              <option value="General Enquiry">General Enquiry</option>
              <option value="Renovation">Renovation</option>
              <option value="Partnerships">Partnerships</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label htmlFor="message">Message:</label>
            <textarea className={styles.msgBox} name="message" />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}
