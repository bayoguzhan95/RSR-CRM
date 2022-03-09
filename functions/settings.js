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

// Certifications

export const getAllCertifications = async () => await axios.get('/api/getAllCertifications');

export const addCertification = async (certification) =>
  await axios.post(`/api/addCertification`, {
    certification,
  });

export const deleteCertificate = async (slug) => await axios.delete(`/api/deleteCertificate/${slug}`);

export const updateCertification = async (slug, certification) =>
  await axios.put(`/api/updateCertification/${slug}`, certification);

// Countries

export const getAllCountries = async () => await axios.get('/api/getAllCountries');

export const addCountry = async (country) =>
  await axios.post(`/api/addCountry`, {
    country,
  });

export const deleteCountry = async (slug) => await axios.delete(`/api/deleteCountry/${slug}`);

export const updateCountry = async (slug, country) => await axios.put(`/api/updateCountry/${slug}`, country);

// Delivery Terms

export const getAllDeliveryTerms = async () => await axios.get('/api/getAllDeliveryTerms');

export const addDeliveryTerm = async (deliveryTerm) =>
  await axios.post(`/api/addDeliveryTerm`, {
    deliveryTerm,
  });

export const deleteDeliveryTerm = async (slug) => await axios.delete(`/api/deleteDeliveryTerm/${slug}`);

export const updateDeliveryTerm = async (slug, deliveryTerm) => await axios.put(`/api/updateDeliveryTerm/${slug}`, deliveryTerm);
