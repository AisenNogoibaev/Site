import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Contact us using the form below</h2>
        <p>If you see my potential or want to talk to me feel free to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:aisennogoibaev999@gmail.com">aisennogoibaev999@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+996709660415">+996709660415</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}