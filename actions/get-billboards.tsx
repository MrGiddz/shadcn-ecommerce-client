import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string) : Promise<Billboard> => {
    try {
        const res = await axios(`${URL}/${id}`)
        return res.data;
    } catch (error) {
        return { 
            id: "",
            label: "",
            imageUrl: "",
        }
    }
}

export default getBillboard