import style from "./card.module.scss";

export function Card(
  //tagColor: string,
  {
    isTitle,
    tag,
    title,
    date,
    dateTop,
    tagColor = "pink",
  }: {
    isTitle?: boolean;
    tag: string;
    title: string;
    date: string;
    dateTop?: boolean;
    tagColor?: "blue" | "pink";
  }
) {
  return (
    <div className={`${style.card} ${isTitle ? style.title : ""}`}>
      <div>
        <span className={style[tagColor]}>{tag}</span>
      </div>
      {dateTop && <span>{date}</span>}
      <p>{title}</p>
      {!dateTop && <span>{date}</span>}
    </div>
  );
}
