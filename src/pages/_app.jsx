import "../styles/globals.css";

import { Transition, animated } from "@react-spring/web";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
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
          keys={(item) => item.id}
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

export default MyApp;
