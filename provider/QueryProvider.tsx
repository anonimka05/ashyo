"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryCLient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            staleTime: 1000 * 60 * 5,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            casheTime: 1000 * 60 * 10,
            refetchOnWindowFocus: true,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
  );
};
