import axios from 'axios';

export const getAllShipmentType = async () => await axios.get(`http://localhost:8000/api/getAllShipmentTypes`);

export const addShipmentType = async (shipmentType) =>
  await axios.post(`/api/addShipmentType`, {
    shipmentType,
  });

export const deleteShipmentType = async (slug) => await axios.put(`/api/deleteShipmentType/${slug}`);
