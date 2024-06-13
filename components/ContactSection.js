import React from 'react';
import { Section, ImageContainer, FormWrapper, FormContainer, Form, Label, Input, TextArea, SubmitButton, Header, Description, PhoneNumber, ContactInfo } from '../styles/ContactSectionStyles';
import contactImage from '../img/contact.png';
import emailIcon from '../img/email-icon.png';
import whatsappIcon from '../img/whatsapp-icon.png';

const ContactSection = () => {
  return (
    <Section>
      <FormWrapper>
        <Header>Yuk, Tanya Bang Kost</Header>
        <Description>
        Kirimkan kendala yang anda alami dengan mengisi  formulir dibawah ini !
        </Description>
        <br></br>
        <FormContainer>
          <Form>
            <Label htmlFor="name">Nama</Label>
            <Input type="text" id="name" name="name" required />

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />

            <Label htmlFor="phone">Nomor HP</Label>
            <Input type="tel" id="phone" name="phone" required />

            <Label htmlFor="message">Pesan</Label>
            <TextArea id="message" name="message" required></TextArea>

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormContainer>
      </FormWrapper>
      <ImageContainer>
        <img src={contactImage} alt="Contact Us" />
        <ContactInfo>
          <a href="mailto:Support@BangKost.com">
            <img src={emailIcon} alt="Email" />
            Support@BangKost.com
          </a>
          <a href="https://wa.me/6282112327701">
            <img src={whatsappIcon} alt="WhatsApp" />
            082112327701 (WhatsApp Only)
          </a>
        </ContactInfo>
      </ImageContainer>
    </Section>
  );
};

export default ContactSection;
