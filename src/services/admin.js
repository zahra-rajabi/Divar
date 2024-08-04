import api from "configs/api";

const addCategory = (data) => {
  api.post("category", data);
};
const getCategory = () => {
  return api.get("category");
};
const deletCategory = (id) => {
  api.delete(`category/${id}`, id);
};

export { addCategory, getCategory, deletCategory };
