import { useEffect, useState } from "react";
import mockResponse from "./mockResponse.json";

type Item = (typeof mockResponse)["items"][0];

type Api = { data: Item[]; total: number; loading: boolean };

const useApi = (search?: string, page?: number, perPage: number = 10): Api => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const searchRegex = new RegExp(search ?? "", "i");
    const result = mockResponse.items.filter(
      (x) =>
        Boolean(x.title.match(searchRegex)?.length) ||
        Boolean(x.description.match(searchRegex)?.length)
    );
    const start = page ? (page - 1) * perPage : undefined;
    const end = start !== undefined ? start + perPage : undefined;
    const paginatedResult = result.slice(start, end);

    setData(paginatedResult);
    setTotal(result.length);
    setLoading(false);
  }, [search, page]);

  return { data, total, loading };
};

export { useApi };
