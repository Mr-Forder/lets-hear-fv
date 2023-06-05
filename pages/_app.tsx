import { AppProps } from "next/app";
import { useState, useEffect } from "react";

import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo"; // apollo client hook

import { AuthProvider } from "src/auth/useAuth"; // import auth context
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const client = useApollo(); //init apollo client via our useApollo hook

  useEffect(() => {
    const item = localStorage.getItem("mode");
    if (item) {
      setDarkMode(JSON.parse(localStorage.getItem("mode") || ""));
    } else return;
  }, []);

  return (
    //all children of this provider now have access to firebase auth state
    <>
      <div className="toggle">
        {darkMode ? (
          <>
            <svg
              onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("mode", JSON.stringify(!darkMode));
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#10AEC9"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("mode", JSON.stringify(!darkMode));
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </>
        )}
      </div>

      <div className={darkMode ? "dark" : ""}>
        <AuthProvider>
          <ApolloProvider client={client}>
            <Head>
              <title>Let's Hear</title>
              <link rel="icon" href="/favicon.ico" />
              <link
                href="https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Component {...pageProps} />
          </ApolloProvider>
        </AuthProvider>
      </div>
    </>
  );
}
