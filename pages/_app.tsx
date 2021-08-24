import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import nprogress from 'nprogress' // NProgressインポート
import 'nprogress/nprogress.css' // バーのデフォルトスタイルのインポート
import { GA_TRACKING_ID, pageview } from "../analytics/gtag";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  if (process.browser) {
    // バーの表示開始
    nprogress.start()
  }

  useEffect(() => {
    // バーの表示終了
    nprogress.done()
  })

  const router = useRouter();
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}
