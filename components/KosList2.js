import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const KosList2 = () => {
const [rooms, setRooms] = useState([]);

const navigate = useNavigate();

useEffect(() => {
  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/room");
      setRooms(response.data);
    } catch (error) {
      console.error("There was an error fetching the room data!", error);
    }
  };

  getRooms();
}, []);

// Menentukan ID yang ingin Anda tampilkan
const selectedIds = [54, 58, 59];

// Filter ruangan berdasarkan ID yang dipilih
const selectedRooms = rooms.filter((room) => selectedIds.includes(room.id));

const handleCardClick = (id) => {
  navigate(`/kos2/${id}`);
};

return (
  <Container>
    <br></br>
    <h1 className="my-4 text-center">Rekomendasi Kamar</h1>
    <br></br>
    <Row>
      {selectedRooms.map((kos) => (
        <Col key={kos.id} md={4} className="mb-4">
          <Card onClick={() => handleCardClick(kos.id)} style={{ cursor: "pointer" }}>
            <Card.Img variant="top" src={kos.url} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{kos.kode}</Card.Title>
              <Card.Text>
                <strong>Tipe:</strong> {kos.tipe}
                <br />
                <strong>Ukuran Kamar:</strong> {kos.ukuran}
                <br />
                <strong>Harga:</strong> {kos.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <br></br>
  </Container>
);
};

export default KosList2;
