import api from "configs/api";

const addCategory = (data) => {
  return api.post("category", data);
};
const getCategory = () => {
  return api.get("category");
};
const deletCategory = (id) => {
  return api.delete(`category/${id}`, id);
};

export { addCategory, getCategory, deletCategory };
