import {DefaultOptions, QueryCache, QueryClient} from "react-query";
import toast from "react-hot-toast";
import {ApiError} from "../data/ApiError.ts";

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  }
}

export const queryClient = new QueryClient(
  {
    defaultOptions: queryConfig,
    queryCache: new QueryCache({
      onError: (error) =>
        toast.error(`Something went wrong: ${(error as ApiError).message}`),
    }),
  });
