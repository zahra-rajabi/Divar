import api from "configs/api";

const addCategory = (data) => {
  api.post("category", data);
};
const getCategory = () => {
  return api.get("category");
};

export { addCategory, getCategory };
