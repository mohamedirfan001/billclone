import api from "../api/Api.jsx";

export const getPayments = () => api.get("/payments");
export const createPayment = (payment) => api.post("/payments", payment);