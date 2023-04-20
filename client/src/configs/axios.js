import axios from "axios";
const instance = axios.create({
	baseURL:
		process.env.REACT_APP_NODE_ENV === "production"
			? "https://youtube-fullstack-384218.de.r.appspot.com/api"
			: "http://localhost:5000/api",
	withCredentials: true,
});
export default instance;
