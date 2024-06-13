import React, { useState } from 'react';
import { Section, FAQContainer, FAQItem, Question, Answer, ImageContainer, FAQContent, ButtonContainer, ToggleButton } from '../styles/FAQSectionStyles';
import faqImage from '../img/faq.png';

const faqItemsPencari = [
  {
    question: 'Bagaimana cara mencari kamar kos di bangkost?',
    answer: 'Anda dapat menggunakan fitur pencarian di halaman Cari Kost untuk mencari kamar kos berdasarkan  harga, fasilitas, dan tipe kamar. Hasil pencarian akan menampilkan daftar kamar yang sesuai dengan kriteria Anda.',
  },
  {
    question: 'Bagaimana cara melakukan pemesanan kamar kos?',
    answer: 'Setelah menemukan kamar yang Anda inginkan, klik pada kamar tersebut untuk melihat detailnya. Kemudian, klik tombol "Ajukan Sewa" dan ikuti langkah-langkah pemesanan yang diberikan. Anda akan diminta untuk mengisi informasi pribadi untuk pengajuan sewa dan setelah itu mengkonfirmasi pembayaran.',
  },
  {
    question: 'Apakah saya bisa membatalkan pemesanan?',
    answer: 'Ya, Anda bisa membatalkan pemesanan kamar kos dengan menghubungi langsung admin melalui fitur “chat pemilik” pada halaman detail kamar kos atau melalui fitur “hubungi kami”.',
  },
  {
    question: 'Bagaimana saya tahu jika pemesanan saya sudah dikonfirmasi?',
    answer: 'Setelah Anda menyelesaikan proses pemesanan dan konfirmasi pembayaran, Anda akan menerima email konfirmasi dari bangkost. Email ini akan berisi detail pemesanan dan informasi kontak pemilik kos.',
  },
  {
    question: 'Apakah bangkost menyediakan layanan dukungan pelanggan?',
    answer: 'Ya, kami menyediakan layanan dukungan pelanggan yang siap membantu Anda melalui melalui fitur “chat pemilik” pada halaman detail kamar kos atau melalui fitur “hubungi kami”. Anda dapat menghubungi kami jika memiliki pertanyaan atau mengalami masalah saat menggunakan website bangkost.',
  },
];

const faqItemsPemilik = [
  {
    question: 'Bagaimana cara mendaftarkan kos saya?',
    answer: 'Anda dapat mendaftarkan kos Anda melalui halaman pendaftaran di platform kami dengan mengisi informasi lengkap tentang kos Anda.',
  },
  {
    question: 'Apakah ada biaya untuk mendaftarkan kos?',
    answer: 'Tidak, pendaftaran kos di platform kami gratis. Namun, ada biaya layanan jika kos Anda berhasil disewa melalui platform kami.',
  },
  {
    question: 'Bagaimana cara mengelola pemesanan kos?',
    answer: 'Anda dapat mengelola pemesanan kos melalui dashboard pemilik yang tersedia setelah Anda login ke akun Anda.',
  },
  {
    question: 'Bagaimana cara menghubungi penyewa potensial?',
    answer: 'Anda dapat menghubungi penyewa potensial melalui fitur pesan yang tersedia di platform kami.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqType, setFaqType] = useState('pencari');

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFaqTypeChange = type => {
    setFaqType(type);
    setActiveIndex(null);
  };

  const faqItems = faqType === 'pencari' ? faqItemsPencari : faqItemsPemilik;

  return (
    <Section>
      <h2>Frequently Asked Questions</h2>
      <br></br>
      <br></br>
      <br></br>
      <FAQContainer>
        <ImageContainer>
          <img src={faqImage} alt="FAQ" />
        </ImageContainer>
        <FAQContent>
          <p>Jika anda mengalami masalah silahkan baca FAQ dibawah ini agar masalah anda dapat teratasi.</p>
          <p>Silahkan klik menu Hubungi Kami apabila tidak menemukan solusi untuk masalah yang sedang anda alami.</p>
          <br></br>
          {faqItems.map((item, index) => (
            <FAQItem key={index}>
              <Question onClick={() => handleToggle(index)}>
                {item.question}
              </Question>
              {activeIndex === index && <Answer>{item.answer}</Answer>}
            </FAQItem>
          ))}
        </FAQContent>
      </FAQContainer>
    </Section>
  );
};

export default FAQSection;
