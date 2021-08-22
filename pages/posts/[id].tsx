import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import ReviewStar from "../../components/atom/ReviewStar";
import { fanzaDatas } from "../../json/fanzaDatas";
import { fiexdSentence } from "../../json/fixedSentence";

type Props = {
  fanzaData: any;
};

const Post: NextPage<Props> = ({ fanzaData }) => {
  if (!fanzaData) {
    return <div>Loading...</div>;
  }

  const appealFlag = fanzaData.aveReviewPoint.replace("点", "");

  return (
    <Layout
      title={`${fiexdSentence.date}${fanzaData.title}`}
      description={`${fiexdSentence.fanzaChLite}で${fanzaData.title}は配信されてる？配信状況を毎月チェック！あの人気AVが見放題、見逃しちゃいけません！`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/posts/${fanzaData.forUrlNumber}`}
      type="article"
    >
      <div className="flex flex-col justify-center items-center w-11/12 sm:w-8/12">
        <h1 className="text-xl sm:text-2xl text-gray-600">{`${fiexdSentence.date}${fanzaData.title}`}</h1>
        {appealFlag > 4.0 && (
          <a
            className="mt-8 hover:opacity-80 cursor-pointer"
            href={fiexdSentence.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="flex bg-yellow-100 rounded">
              <div className="flex flex-col justify-center items-center py-6 px-6 my-2 w-16 border-r border-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="py-6 px-6 my-2">{fiexdSentence.comment}</div>
            </div>
          </a>
        )}
        <div className="py-8">
          <a
            className="hover:opacity-80 cursor-pointer"
            href={fiexdSentence.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image
              src={`/package_images/${fanzaData.imgName}`}
              alt={fanzaData.title}
              width={800}
              height={538}
              objectFit="contain"
            />
          </a>
        </div>
        <div className="sm:flex sm:flex-1">
          <div className="sm:p-4 sm:w-1/2">
            <h2 className="text-xl">作品内容</h2>
            <p className="py-6 leading-relaxed">{fanzaData.desc}</p>
          </div>
          <div className="sm:p-4 sm:w-1/2">
            <h2 className="text-xl">FANZA見放題chライトの配信データ</h2>
            <div className="grid grid-cols-2 gap-y-2 py-4">
              <div className="py-2 border-b border-gray-300">
                <span>評価</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <ReviewStar star={fanzaData.aveReviewPoint} />
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>視聴デバイス</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <span className="pr-1">{fanzaData.viewDevice}</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>出演女優</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {fanzaData.actress &&
                  fanzaData.actress.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>監督</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {fanzaData.director &&
                  fanzaData.director.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>シリーズ</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {fanzaData.series &&
                  fanzaData.series.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>

              <div className="py-2 border-b border-gray-300">
                <span>メーカー</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {fanzaData.maker &&
                  fanzaData.maker.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>レーベル</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {fanzaData.label &&
                  fanzaData.label.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>ジャンル</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {fanzaData.genre &&
                  fanzaData.genre.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 sm:px-4">
          <p>{fiexdSentence.caution}</p>
        </div>
        <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
          <span className="py-1 text-sm">{fiexdSentence.microCopy}</span>
          <a
            className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
            href={fiexdSentence.affiliateLink}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            FANZA見放題chで見る
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = fanzaDatas.map((fanzaData) => {
    return {
      params: {
        id: String(fanzaData.forUrlNumber),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export interface ParamsObj {
  id: string;
}

export async function getStaticProps({ params }: { params: ParamsObj }) {
  const fanzaData = fanzaDatas.find(function (fanzaData) {
    return fanzaData.forUrlNumber === params.id;
  });

  return {
    props: {
      fanzaData,
      fanzaDatas,
    },
  };
}
