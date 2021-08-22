import type { NextPage } from "next";
import { fiexdSentence } from "../json/fixedSentence";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  keyword: string;
  url: string;
  type: string;
};

const Layout: NextPage<Props> = ({
  children,
  title = "Dafault Title",
  description,
  keyword,
  url,
  type,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta
          property="og:site_name"
          content="FANZAでAVが見放題！｜見放題chライト対象のAV作品まとめ"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="google-site-verification"
          content="7_ZHDHb9q5QDql9_JbvC0SIN8Ti_Eepkv-l4hBr03Eg"
        />
        <link rel="canonical" href={url} />
      </Head>
      <header className="w-screen">
        <nav className="bg-pink-200">
          <div className="container px-6 py-3 mx-auto md:flex">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" passHref>
                  <a className="font-mono text-2xl text-gray-600 lg:text-2xl hover:opacity-90">
                    FanzaのAVが見放題
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-screen min-h-screen flex justify-center flex-col items-center my-4 text-gray-600">
        {children}
      </main>
      <footer className="flex items-center justify-center w-screen px-6 py-4 bg-white border-t flex-row flex-wrap">
        <Link href="/" passHref>
          <a className="font-mono text-2xl text-gray-600 lg:text-2xl hover:opacity-90">
            FanzaのAVが見放題
          </a>
        </Link>
        <Link href="/allpages" passHref>
          <a className="px-4 font-sans text-gray-600">全てのページ</a>
        </Link>
      </footer>
    </>
  );
};

export default Layout;
