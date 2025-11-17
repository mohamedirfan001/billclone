import api from "../api/Api.jsx";

export const getBills = () => api.get("/bills");
export const createBill = (bill) => api.post("/bills", bill);
export const updateBill = (id, bill) => api.put(`/bills/${id}`, bill);
export const deleteBill = (id) => api.delete(`/bills/${id}`);
