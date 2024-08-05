import api from "configs/api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getMyPosts = () => api.get("post/my");

const getAllPost = () => api.get("");

export { getProfile, getMyPosts, getAllPost };
