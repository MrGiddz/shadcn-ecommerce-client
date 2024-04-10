import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async () : Promise<Category[]> => {
    try {
        const res = await axios(URL)
        return res.data;
    } catch (error) {
        return []
    }
}

export default getCategories