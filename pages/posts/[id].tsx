import { fanzaDatas } from "../../json/fanzaDatas";
import { fiexdSentence } from "../../json/fixedSentence";
import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Image from "next/image";
import ReviewStar from "../../components/atom/ReviewStar";

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
      <div className="flex flex-col justify-center items-center sm:w-8/12 w-11/12">
        <h1 className="sm:text-2xl text-xl text-gray-600">{`${fiexdSentence.date}${fanzaData.title}`}</h1>
        {appealFlag > 4.0 && (
          <a
            className="cursor hover:opacity-80"
            href={fiexdSentence.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="flex bg-yellow-100 rounded mt-8">
              <div className="flex justify-center items-center flex-col w-16 border-r border-yellow-500 px-6 py-6 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500"
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
              <div className="px-6 py-6 my-2">{fiexdSentence.comment}</div>
            </div>
          </a>
        )}
        <div className="py-8">
          <a
            className="cursor hover:opacity-80"
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
          <div className="sm:w-1/2 sm:p-4">
            <h2 className="text-xl">作品内容</h2>
            <p className="leading-relaxed py-6">{fanzaData.desc}</p>
          </div>
          <div className="sm:w-1/2 sm:p-4">
            <h2 className="text-xl">FANZA見放題chライトの配信データ</h2>
            <div className="grid grid-cols-2 gap-y-2 py-4">
              <div className="border-b py-2 border-gray-300">
                <span>評価</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <ReviewStar star={fanzaData.aveReviewPoint} />
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>視聴デバイス</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <span className="pr-1">{fanzaData.viewDevice}</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>出演女優</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {fanzaData.actress &&
                  fanzaData.actress.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>監督</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {fanzaData.director &&
                  fanzaData.director.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>

              <div className="border-b py-2 border-gray-300">
                <span>シリーズ</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {fanzaData.series &&
                  fanzaData.series.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>

              <div className="border-b py-2 border-gray-300">
                <span>メーカー</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {fanzaData.maker &&
                  fanzaData.maker.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>レーベル</span>
              </div>
              <div className="border-b py-2 border-gray-300">
                {fanzaData.label &&
                  fanzaData.label.map((data: string) => (
                    <span className="pr-1" key={data}>
                      {data}
                    </span>
                  ))}
              </div>
              <div className="border-b py-2 border-gray-300">
                <span>ジャンル</span>
              </div>
              <div className="border-b py-2 border-gray-300">
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
        <div className="sm:px-4 py-4">
          <p>{fiexdSentence.caution}</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer py-4">
          <span className="text-sm py-1">{fiexdSentence.microCopy}</span>
          <a
            className="bg-pink-500 text-xl text-white px-8 py-3 rounded hover:bg-pink-400 transition"
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

export async function getServerSidePaths() {
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

export async function getServerSideProps({ params }: { params: ParamsObj }) {
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
