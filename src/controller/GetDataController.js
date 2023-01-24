import axios from "axios";
import { baseUrl } from "../utils/utils";

export const getCarsData = async () => {
	const response = await axios.get(`${baseUrl}?page=1&limit=5`);
	console.log({ response });
	if (response?.status === 200) {
		return response?.data;
	}
};
