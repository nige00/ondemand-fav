import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ReviewStar from "../components/atom/ReviewStar";
import { fanzaDatas } from "../json/fanzaDatas";
import { fiexdSentence } from "../json/fixedSentence";

const Allpages: NextPage = () => {
  return (
    <Layout
      title="FANZA見放題chライト対象作品全て"
      description={`存在する全てのページを表示`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/allpages`}
      type="article"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 w-11/12">
        {fanzaDatas.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block py-2 px-8 text-xl text-white bg-pink-400 rounded">{`${
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
              <h3 className="py-1 truncate">{content.title}</h3>
              <ReviewStar star={content.aveReviewPoint} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Allpages;
