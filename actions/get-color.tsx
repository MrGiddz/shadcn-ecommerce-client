import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async () : Promise<Color[]> => {
    const res = await axios(URL)
    return res.data;
}

export default getColors