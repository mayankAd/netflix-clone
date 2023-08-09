import style from "./Section_two.module.css";

const Section_two = (props) => {
  if (props.isLeft == true)
    return (
      <div className={`${style.main}`}>
        <div className={`${style.text}`}>
          <h1>{props.heading}</h1>
          <p>{props.paragraph}</p>
        </div>
        <div className={`${style.image2}`}>
          <img src={props.imagePath} alt="" />
        </div>
      </div>
    );
  else {
    return (
      <div className={`${style.main}`}>
        <div className={`${style.image2}`}>
          <img src={props.imagePath} alt="" />
        </div>
        <div className={`${style.text}`}>
          <h1>{props.heading}</h1>
          <p>{props.paragraph}</p>
        </div>
      </div>
    );
  }
};

export default Section_two;
