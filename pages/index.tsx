import type { NextPage } from "next";
import { fanzaDatas } from "../json/fanzaDatas";
import { fiexdSentence } from "../json/fixedSentence";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import ReviewStar from "../components/atom/ReviewStar";

const Home: NextPage = () => {
  const popularAv = fanzaDatas.filter((fanzaData) => {
    return (
      Number(fanzaData.aveReviewPoint.replace("点", "")) >= 4.5 &&
      Number(fanzaData.aveReviewPoint.replace("点", "")) != 5
    );
  });

  popularAv.sort(function (a, b) {
    if (
      a.aveReviewPoint.replace("点", "") > b.aveReviewPoint.replace("点", "")
    ) {
      return -1;
    } else {
      return 1;
    }
  });

  const contents = popularAv.splice(0, 100);

  return (
    <Layout
      title="FANZAでAVが見放題！｜見放題chライト対象のAV作品まとめ"
      description={`${fiexdSentence.fanzaChLite}で見放題の人気作品を毎月チェック！人気作品を一括で確認するのにおすすめです。`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/`}
      type="website"
    >
      <h1 className="sm:text-2xl text-xl text-gray-600">
        FANZAでAVが見放題！｜見放題chライト対象のAV作品まとめ
      </h1>
      <div className="flex flex-col items-center justify-center cursor-pointer py-4">
        <span className="text-sm py-1">＼FANZA見放題chライトとは？／</span>
        <a
          className="bg-pink-500 text-xl text-white px-8 py-3 rounded hover:bg-pink-400 transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          詳しくはこちらから
        </a>
      </div>
      <div className="my-16 text-lg">{`現在の見放題対象作品数：${fanzaDatas.length}本`}</div>
      <h2 className="text-3xl">今見れる！見放題chライトで人気の作品集</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 pt-6">
        {contents.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex justify-center items-center flex-col">
                <span className="text-xl rounded bg-pink-400 inline-block px-8 py-2 text-white">{`${
                  index + 1
                }位`}</span>
              </div>
              <div className="pt-4">
                <Link href={`/posts/${content.forUrlNumber}`} passHref>
                  <a>
                    <Image
                      src={`/package_images/${content.imgName}`}
                      alt={content.title}
                      width={800}
                      height={538}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
              <Link href={`/posts/${content.forUrlNumber}`} passHref>
                <a>
                  <h3 className="truncate py-1">{content.title}</h3>
                </a>
              </Link>
              <ReviewStar star={content.aveReviewPoint} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer py-4">
        <span className="text-sm py-1">{fiexdSentence.microCopy}</span>
        <a
          className="bg-pink-500 text-xl text-white px-8 py-3 rounded hover:bg-pink-400 transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          見放題対象作品をもっと見る
        </a>
      </div>
    </Layout>
  );
};

export default Home;
