import Head from "next/head";
import Link from "next/link";

function index() {
  return (
    <>
      <Head>
        <title>প্রতিদিনের জিকির</title>
        <link rel="icon" href="/title.png" />
      </Head>
      <div className="main_body">
        <div>
          <Link href="/morning">
            <button className="btn draw-border">সকালের জিকির</button>
          </Link>
        </div>
        <div className="btn_custom_mr">
          <Link href="/afternoon">
            <button className="btn draw-border">বিকেলের জিকির</button>
          </Link>
        </div>
        <div className="btn_custom_mr">
          <Link href="/evening">
            <button className="btn draw-border">সন্ধ্যের জিকির</button>
          </Link>
        </div>

        <div>
          <Link href="/night">
            <button className="btn draw-border">রাতের জিকির</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;
