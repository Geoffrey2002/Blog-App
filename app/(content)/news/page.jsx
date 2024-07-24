import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
function page() {
  return (
    <div>
      <h1>News page </h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}

export default page;
