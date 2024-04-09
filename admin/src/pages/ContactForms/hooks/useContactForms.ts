import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { TableRequest, TableResponse } from "../../../types/ApiTypes";
import { get, put } from "../../../config/API";
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

export const useSetMarkAsReadedContactForms = () => {
  const markAsReadedMutation = useMutation<string, Error, number[]>(
    async (ids) => {
      const response = await put<string>("/api/v1/contact/markAsReaded", ids);
      return response.data;
    }
  );

  const setMarkAsReaded = async (ids: number[]) => {
    try {
      const result = await markAsReadedMutation.mutateAsync(ids);
      toast.success(result);
    } catch (error: any) {
      toast.error(error?.message)
    }
  };

  return { setMarkAsReaded };
};
