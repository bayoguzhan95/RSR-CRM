import axios from 'axios';

// Shipment Type
export const getAllShipmentType = async () => await axios.get(`/api/getAllShipmentTypes`);

export const addShipmentType = async (shipmentType) =>
  await axios.post(`/api/addShipmentType`, {
    shipmentType,
  });

export const deleteShipmentType = async (slug) => await axios.delete(`/api/deleteShipmentType/${slug}`);

export const updateShipmentType = async (slug, shiptype) => await axios.put(`/api/updateShipmentType/${slug}`, shiptype);

// Seasons

export const getAllSeasons = async () => await axios.get('/api/getAllSeasons');

export const addSeason = async (season) =>
  await axios.post(`/api/addSeason`, {
    season,
  });

export const deleteSeason = async (slug) => await axios.delete(`/api/deleteSeason/${slug}`);

export const updateSeason = async (slug, season) => await axios.put(`/api/updateSeason/${slug}`, season);
