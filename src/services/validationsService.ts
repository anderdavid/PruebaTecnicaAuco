import axios from "axios";

const EXTERNAL_API = "https://countriesnow.space/api/v0.1/countries/currencyi";
const paramsExternalApi = {
 country: "Colombia",
};

interface IexternalResponse {
 status: number;
 data?: any;
}

export const fetchCurrencyByCoutry = async (): Promise<IexternalResponse> => {
 try {
  const response = await axios.post(EXTERNAL_API, paramsExternalApi);

  return {
   status: response.status,
   data: response.data,
  };
 } catch (error: any) {
  if (error?.response?.status) {
   return {
    status: error?.response?.status,
    data: error?.response?.data,
   };
  }
  return {
   status: 500,
   data: { msg: "unknown error" },
  };
 }
};
