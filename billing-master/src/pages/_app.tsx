// import AppLayout from "@/components/layout/AppLayout";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";

const AppLayout = dynamic(() => import("@/components/layout/AppLayout"), {
  ssr: false,
});
import { Toaster } from "react-hot-toast";
import { store } from "@/redux/store";
// import "tw-elements/dist/css/tw-elements.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </AppLayout>
    </Provider>
  );
}
