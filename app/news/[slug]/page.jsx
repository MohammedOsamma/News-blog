import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import ImagePage from "./image/page";
import Link from "next/link";

const NewsDetailPage = ({ params }) => {
  const newsSlug = params.slug;
  //Compare The newsItem Slug un Dummay Data to newsSlug which extract from Url
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <h1>{newsItem.title}</h1>
          <time datetime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
};

export default NewsDetailPage;
