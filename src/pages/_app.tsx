import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Transition, animated } from "@react-spring/web";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

import type { NextPage } from "next";

export type NextPageWithLayout<T> = NextPage<T> & {
  Layout?: React.FC<React.PropsWithChildren<unknown>>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<Readonly<unknown>>;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];

  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <Transition
          items={items}
          keys={(item: any) => item.id}
          from={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, position: "absolute" }}
        >
          {(styles, { pageProps, Component }) => (
            <animated.div style={{ ...styles, width: "100%" }}>
              <Component {...pageProps} />
            </animated.div>
          )}
        </Transition>
      </div>
    </Layout>
  );
}
