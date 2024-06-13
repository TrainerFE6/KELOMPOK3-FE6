import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormWrapper, Title, FormGroup, Label, Input, Select, Option, Button } from '../styles/PersonalInfoStyles';

const EditProfile = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <FormWrapper>
        <Title>Update Informasi Pribadi</Title>
        <FormGroup>
          <Label>Nama Lengkap</Label>
          <Input type="text" placeholder="Masukkan nama lengkap" />
        </FormGroup>
        <FormGroup>
          <Label>Jenis Kelamin</Label>
          <Select>
            <Option value="laki-laki">Laki-Laki</Option>
            <Option value="perempuan">Perempuan</Option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Masukkan email" />
        </FormGroup>
        <FormGroup>
          <Label>No Telepon</Label>
          <Input type="tel" placeholder="Masukkan no telepon" />
        </FormGroup>
        <FormGroup>
          <Label>Alamat</Label>
          <Input type="text" placeholder="Masukkan alamat" />
        </FormGroup>
        <Button type="submit" onClick={() => navigate('/home2')}>Simpan</Button>
      </FormWrapper>
    </Container>
  );
};

export default EditProfile;
