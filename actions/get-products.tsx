import qs from "query-string";
import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({
  colorId,
  sizeId,
  isFeatured,
  categoryId,
}: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId,
      sizeId,
      isFeatured,
      categoryId,
    },
  });
  const res = await axios(url);

  if (res) {
    return res.data;
  }

  return [];
};

export default getProducts;
