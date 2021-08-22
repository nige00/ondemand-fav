import type { NextPage } from "next";
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
          <div className="container md:flex py-3 px-6 mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/" passHref>
                  <a className="font-mono text-2xl lg:text-2xl text-gray-600 hover:opacity-90">
                    FanzaのAVが見放題
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center my-4 w-screen min-h-screen text-gray-600">
        {children}
      </main>
      <footer className="flex flex-row flex-wrap justify-center items-center py-4 px-6 w-screen bg-white border-t">
        <Link href="/" passHref>
          <a className="font-mono text-2xl lg:text-2xl text-gray-600 hover:opacity-90">
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
