import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { FormWrapper, Input, Select, Option, ButtonWrapper, ImageWrapper } from '../styles/ApplyRentStyles';

const ApplyRent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const kos = state?.kos;

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    address: '',
    phone: '',
    ktpPhoto: ''
  });

  if (!kos) {
    return <div>Kos tidak ditemukan</div>;
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'ktpPhoto') {
      setFormData((prevData) => ({ ...prevData, [name]: URL.createObjectURL(files[0]) }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      kosName: kos.kode,
      kosType: kos.tipe,
      kosImage: kos.url,
      ...formData
    };
    navigate('/check-order', { state: { order } });
  };

  return (
    <Container>
      <FormWrapper>
        <h2>{kos.kode}</h2>
        <h5>Kos : {kos.tipe}</h5>
        <ImageWrapper>
          <img src={kos.url} alt={kos.kode} className="img-fluid rounded" />
        </ImageWrapper>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label>Nama Lengkap</Form.Label>
            <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Masukkan nama lengkap" required />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Jenis Kelamin</Form.Label>
            <Select name="gender" value={formData.gender} onChange={handleChange} required>
              <Option value="">Pilih</Option>
              <Option value="laki-laki">Laki-Laki</Option>
              <Option value="perempuan">Perempuan</Option>
            </Select>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Alamat</Form.Label>
            <Input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Masukkan alamat" required />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>No Telepon</Form.Label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Masukkan no telepon" required />
          </Form.Group>
          <Form.Group controlId="ktp">
            <Form.Label>Foto KTP</Form.Label>
            <Input type="file" name="ktpPhoto" onChange={handleChange} required />
          </Form.Group>
          <ButtonWrapper>
            <Button variant="primary" type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default ApplyRent;
