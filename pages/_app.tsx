import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { NextComponentType } from "next";
import AuthGuard from "../components/AuthGuard";

export type CustomProps = AppProps & {
  Component: NextComponentType & { requireAuth?: boolean };
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomProps) {
  return (
    <>
      <SessionProvider
        session={session}
        refetchInterval={5 * 60}
        refetchOnWindowFocus
      >
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}
