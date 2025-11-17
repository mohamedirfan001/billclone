import api from "../api/Api.jsx";

export const getVendors = () => api.get("/vendors");
export const createVendor = (vendor) => api.post("/vendors", vendor);
export const updateVendor = (id, vendor) => api.put(`/vendors/${id}`, vendor);
export const deleteVendor = (id) => api.delete(`/vendors/${id}`);
