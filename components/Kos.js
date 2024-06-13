import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { SearchContainer, SearchInput } from '../styles/CariKosStyles';
import { useNavigate } from 'react-router-dom';
import RoomsContext from '../context/RoomsContext';

const Kos2 = () => {
  const CardContainerStyle = {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '10px',
  };
  
  const ImageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  

  const navigate = useNavigate();
  const { rooms, loading } = useContext(RoomsContext);
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');
  const itemsPerPage = 8;

  useEffect(() => {
    // Logic for handling search and filter updates
  }, [searchTerm, searchType, activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleCardClick = (id) => {
    navigate(`/kos/${id}`); // Gunakan path URL untuk halaman detail
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const filteredKosItems = rooms?.filter(kos => {
    const matchTerm = kos.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      kos.price.toLowerCase().includes(searchTerm.toLowerCase()) ||  
                      kos.ukuran.toLowerCase().includes(searchTerm.toLowerCase());
                      
    const matchType = searchType === "" || kos.tipe.toLowerCase() === searchType.toLowerCase();

    return matchTerm && matchType;
  });

  const totalItems = filteredKosItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const currentKosItems = filteredKosItems?.slice(startIndex, endIndex);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <Container>
      <br />
      <h1 className="my-4 text-center">Cari Kamar Sesuai Seleramu</h1>
      <br />
      <SearchContainer>
        <SearchInput type="text" placeholder="Cari kamar..." value={searchTerm} onChange={handleSearchChange} />
        <select value={searchType} onChange={handleTypeChange}>
          <option value="">Semua</option>
          <option value="VVIP">VVIP</option>
          <option value="VIP">VIP</option>
          <option value="Reguler">Reguler</option>
        </select>
       
      </SearchContainer>
      <br />
      <br />
      <Row className="my-4">
        {currentKosItems.map((kos) => (
          <Col key={kos.id} md={3} className="mb-4">
          <Card onClick={() => handleCardClick(kos.id)} style={{ cursor: 'pointer', height: '100%' }}>
            <div style={CardContainerStyle}>
              <Card.Img variant="top" src={kos.url} style={ImageStyle} className="positioned-image" />
            </div>
            <Card.Body>
              <Card.Title>{kos.kode}</Card.Title>
              <Card.Text>
                <strong>Tipe:</strong> {kos.tipe}<br />
                <strong>Ukuran Kamar:</strong> {kos.ukuran}<br />
                <strong>Harga:</strong> {kos.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>        
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
        />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === activePage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === totalPages}
        />
      </Pagination>
    </Container>
  );
};

export default Kos2;
