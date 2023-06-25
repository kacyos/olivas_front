import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import style from "./page.module.scss";

interface INotices {
  id: number;
  type: string;
  yoast_head_json: {
    title: string;
    description: string;
    og_image: [{ url: string }];
    article_published_time: string;
  };
}

export default async function Home() {
  const postsView = 4;

  const response = await fetch(
    "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373"
  );

  const notices: INotices[] = await response.json();

  const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleDateString("pt-BR");
    return newDate;
  };

  return (
    <main>
      <NavBar />
      <section id={style.contents}>
        <figure className={style.banner}>
          <img src="/images/contents.png" alt="pessoas usando o celular" />
        </figure>

        <div className={style.title}>
          <h1>
            Conteúdos <span>para Você</span>
          </h1>
          <div className={style.line}></div>
        </div>

        <div className={style.content_container}>
          <div className={style.content_for_you}>
            <aside className={style.left_container}>
              <div className={style.post}>
                {notices.slice(0, 1).map((notice) => (
                  <>
                    <figure className="content_image">
                      <img
                        src={notice.yoast_head_json.og_image[0].url}
                        alt=""
                      />
                    </figure>
                    <Card
                      isTitle={true}
                      dateTop={true}
                      key={notice.id}
                      tag={notice.type}
                      title={notice.yoast_head_json.title}
                      date={formatDate(
                        notice.yoast_head_json.article_published_time
                      )}
                    />
                    <p>{notice.yoast_head_json.description}</p>
                  </>
                ))}
              </div>
            </aside>

            <aside className={style.right_container}>
              <h2>Últimas notícias</h2>
              <div>
                {notices.slice(0, postsView).map((notice) => (
                  <>
                    <Card
                      key={notice.id}
                      tag={notice.type}
                      title={notice.yoast_head_json.title}
                      date={formatDate(
                        notice.yoast_head_json.article_published_time
                      )}
                    />
                  </>
                ))}
                <button className={style.load_more_posts}>carregar mais</button>
              </div>
            </aside>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
