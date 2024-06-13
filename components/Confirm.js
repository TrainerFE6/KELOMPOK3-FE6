import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormWrapper, Title, FormGroup, Label, Input, Button } from '../styles/PersonalInfoStyles';

const Confirm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    rentPrice: '',
    paymentProof: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      paymentProof: file
    });
  };


  return (
    <Container>
      <FormWrapper>
        <Title>Konfirmasi Pesanan</Title>
        <FormGroup>
          <Label>Nama Lengkap</Label>
          <Input type="text" name="name" placeholder="Masukkan nama lengkap" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Alamat</Label>
          <Input type="text" name="address" placeholder="Masukkan alamat" value={formData.address} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Harga Sewa</Label>
          <Input type="harga" name="harga" placeholder="Masukkan harga" value={formData.phone} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Gambar Bukti Pembayaran</Label>
          <Input type="file" name="paymentProof" onChange={handleFileChange} />
        </FormGroup>
        <Button type="submit" onClick={() => navigate('/home2')}>Submit</Button>
      </FormWrapper>
    </Container>
  );
};

export default Confirm;
