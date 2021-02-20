import React from "react"
import Layout from "../components/layout"

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

          <div>
            <label htmlFor="name">
              Name:
              <input name="name" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Your Email:
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="enquiryType">
              Type of Enquiry:
              <select name="enquiry type">
                <option value="General Enquiry">General Enquiry</option>
                <option value="Renovation">Renovation</option>
                <option value="Partnerships">Partnerships</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Message:
              <textarea name="message" />
            </label>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}
