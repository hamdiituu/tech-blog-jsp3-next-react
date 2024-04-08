import { useQuery } from "react-query";
import { TableRequest, TableResponse } from "../../../types/ApiTypes";
import { get } from "../../../config/API";
import ContactForm from "../types/ContactForm";

export const useFetchContactForms = (req: TableRequest) => {
  return useQuery<TableResponse<ContactForm>>(
    ["ContactForms", req],
    async () => {
      const res = await get<TableResponse<ContactForm>>("/api/v1/contact", {
        params: req,
      });

      return res.data;
    }
  );
};
