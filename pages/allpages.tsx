import type { NextPage } from "next";
import { fanzaDatas } from "../json/fanzaDatas";
import { fiexdSentence } from "../json/fixedSentence";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import ReviewStar from "../components/atom/ReviewStar";

const Allpages: NextPage = () => {
  return (
    <Layout
      title="FANZA見放題chライト対象作品全て"
      description={`存在する全てのページを表示`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/allpages`}
      type="article"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 pt-6">
        {fanzaDatas.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex justify-center items-center flex-col">
                <span className="text-xl rounded bg-pink-400 inline-block px-8 py-2 text-white">{`${
                  index + 1
                } / ${fanzaDatas.length}`}</span>
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
              <h3 className="truncate py-1">{content.title}</h3>
              <ReviewStar star={content.aveReviewPoint} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Allpages;
