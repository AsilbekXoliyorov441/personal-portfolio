import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendMessageToTelegram = async (data) => {
    const BOT_TOKEN = "7516580543:AAFI_Ftb9JTQCEBFA6U2V1gGIGc5I5wdOWw";
    const CHAT_ID = "6713537237";
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const text = `
      📩 *Yangi xabar!*
      👤 *Ism:* ${data.user_name}
      📧 *Email:* ${data.user_email}
      📝 *Xabar:* ${data.message}
    `;

    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      const result = await response.json();
      console.log("Telegram javobi:", result);

      if (result.ok) {
        setDone(true);
        toast.success("Ma'lumot muvaffaqiyatli jo'natildi!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: darkMode ? "dark" : "light",
        });
      } else {
        toast.error("Xatolik yuz berdi! Iltimos, qayta urinib ko'ring.");
      }
    } catch (error) {
      console.error("Telegramga jo‘natishda xatolik:", error);
      toast.error("Xabar jo‘natilmadi! Internet aloqasini tekshiring.");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    sendMessageToTelegram(data);
    form.current.reset();
  };

  return (
    <div className="contact-form container" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
