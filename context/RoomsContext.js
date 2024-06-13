import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/room');
        setRooms(response.data);
      } catch (error) {
        console.error('Failed to fetch rooms', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const addRoom = (room) => {
    setRooms([...rooms, room]);
  };

  return (
    <RoomsContext.Provider value={{ rooms, loading, addRoom }}>
      {children}
    </RoomsContext.Provider>
  );
};

export default RoomsContext;
