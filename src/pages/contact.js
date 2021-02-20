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
        <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div>
            <label>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}
