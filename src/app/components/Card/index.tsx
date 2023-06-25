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
    <div
      className={`${style.card} ${isTitle ? style.title : ""} ${
        style[tagColor]
      }`}
    >
      {dateTop && <span>{date}</span>}
      <div>
        <span className={style[tagColor]}>{tag}</span>
      </div>

      <p>{title}</p>
      {!dateTop && <span>{date}</span>}
    </div>
  );
}
