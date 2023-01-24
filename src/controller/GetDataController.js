import axios from "axios";
import { baseUrl } from "../utils/utils";

export const getCarsData = async (page) => {
	const response = await axios.get(`${baseUrl}?page=${page}`);
	console.log({ response });
	if (response?.status === 200) {
		return response?.data;
	}
};
