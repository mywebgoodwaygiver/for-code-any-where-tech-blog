import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface CommonRequestParams {
  method: string;
  url: string;
  body?: any;
  header?: Record<string, string>;
}

export const commonrequest = async ({
  method,
  url,
  body,
  header,
}: CommonRequestParams): Promise<AxiosResponse<any> | string> => {
  const config: AxiosRequestConfig = {
    method: method,
    url: url,
    headers: header
      ? header
      : {
          'Content-Type': 'application/json',
        },
    data: body,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error: any) {
    // Use type assertion to tell TypeScript that 'error' is a string
    return (error as Error).message;
};
};
