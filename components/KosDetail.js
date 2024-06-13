import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import RoomsContext from '../context/RoomsContext'; // Import RoomContext
import ownerImage from '../img/owner.jpg'; 

const KosDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rooms } = useContext(RoomsContext); // Menggunakan RoomContext

  const kos = rooms.find(item => item.id === parseInt(id));

  if (!kos) {
    return <div>Kos tidak ditemukan</div>;
  }

  const handleApplyRent = () => {
    navigate(`/login`);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h2>{kos.kode}</h2>
          <h5>{kos.price}/Bulan</h5>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <img 
            src={kos.url} 
            alt={kos.kode} 
            className="img-fluid rounded w-100" 
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card style={{ backgroundColor: '#CDE8E5' }}>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Text>
                    <strong>Tipe Kamar:</strong> {kos.tipe}
                  </Card.Text>
                  <Card.Text>
                    <strong>Ukuran Kamar:</strong> {kos.ukuran}
                  </Card.Text>
                  <Card.Text>
                    <strong>Fasilitas:</strong> {kos.fasilitas}
                  </Card.Text>
                </Col>
                <Col md={6} className="text-center" style={{ backgroundColor: '#f8f9fa' }}>
                  <Card.Header>Profil Pemilik Kos</Card.Header>
                  <img
                    src={ownerImage} 
                    alt="Owner"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: "100px" }}
                  />
                  <Card.Text>
                    <strong>{kos.owner}</strong>
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="m-2"
                  >
                    Chat Pemilik
                  </Button>
                  <br />
                  <Button
                    variant="success"
                    className="m-2"
                    onClick={handleApplyRent}
                  >
                    Ajukan Sewa
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default KosDetail;
