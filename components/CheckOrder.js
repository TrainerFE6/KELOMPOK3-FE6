import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { OrderCard, ImageWrapper, CardContent, ButtonWrapper, CenteredMessage } from '../styles/CheckOrderStyles';

const CheckOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order: initialOrder } = location.state || {};
  const [orders, setOrders] = useState(() => {
    // Ambil data dari localStorage saat memulai komponen
    const savedOrders = localStorage.getItem('currentOrders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    // Simpan data ke localStorage setiap kali state `orders` diperbarui
    localStorage.setItem('currentOrders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    // Cek jika pesanan baru ada dan belum ada di orders, lalu tambahkan
    if (initialOrder && !orders.some(order => 
      order.fullName === initialOrder.fullName && 
      order.phone === initialOrder.phone &&
      order.kosName === initialOrder.kosName
    )) {
      setOrders((prevOrders) => [...prevOrders, initialOrder]);
    }
  }, [initialOrder, orders]);

  const handleDeleteOrder = (indexToDelete) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders];
      updatedOrders.splice(indexToDelete, 1); // Menghapus pesanan berdasarkan index
      return updatedOrders;
    });
  };

  if (orders.length === 0) {
    return (
      <Container>
        <CenteredMessage>Tidak ada pesanan untuk ditampilkan</CenteredMessage>
      </Container>
    );
  }

  return (
    <Container>
      {orders.map((order, index) => (
        <OrderCard key={index}>
          <ImageWrapper>
            <img src={order.kosImage} alt={order.kosName} />
          </ImageWrapper>
          <CardContent>
            <h2 className="kos-details">{order.kosName}</h2>
            <Card.Text className="kos-details">
              <strong>Nama Penyewa:</strong> {order.fullName}
            </Card.Text>
            <Card.Text className="kos-details">
              <strong>Jenis Kelamin:</strong> {order.gender}
            </Card.Text>
            <Card.Text className="kos-details">
              <strong>Alamat:</strong> {order.address}
            </Card.Text>
            <Card.Text className="kos-details">
              <strong>No Telepon:</strong> {order.phone}
            </Card.Text>
            <ButtonWrapper>
              <Button variant="primary" onClick={() => navigate('/confirm')}>Konfirmasi</Button>
              <Button variant="danger" onClick={() => handleDeleteOrder(index)}>Hapus Pesanan</Button>
            </ButtonWrapper>
          </CardContent>
        </OrderCard>
      ))}
    </Container>
  );
};

export default CheckOrder;
