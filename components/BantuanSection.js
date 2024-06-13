import React from 'react';
import { Section, Content, Heading, Paragraph } from '../styles/BantuanStyles';
import backgroundImage from '../img/bg.jpg';

const BantuanSection = () => {
  return (
    <Section backgroundImage={backgroundImage}>
      <Content>
        <Heading>Apa Yang Bisa Kami Bantu ?</Heading>
        <Paragraph>
        Jika anda mengalami masalah silahkan baca FAQ dibawah ini agar masalah anda dapat teratasi
        </Paragraph>
        <Paragraph>
        Silahkan klik menu Hubungi Kami apabila tidak menemukan solusi untuk masalah yang sedang anda alami
        </Paragraph>
      </Content>
    </Section>
  );
};

export default BantuanSection;
