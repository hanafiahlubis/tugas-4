import H3 from "./H3";
import H4 from "./H4";
import Img from "./Img";
import "./Contents.css";
import { useState } from "react";
import P from "./P";
import Tombol from "./Tombol";
export default function Contents(props) {
  const [showMore, setShowMore] = useState({});
  const [showLike, setShowLike] = useState({});

  function handleMoreClick(index) {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  function handleLikeClick(index) {
    setShowLike((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  return (
    <div className="content">
      {props.children.map((l, index) => (
        <div key={index}>
          <Img src={l.urlImage} alt={l.productName} />
          <H4>{l.productName}</H4>
          <H3>{l.productPrice}</H3>
          <P>{showMore[index] && l.deskripsi}</P>
          <Tombol
            onClick={() => handleMoreClick(index)}
            className={showMore[index] ? "button" : "batal"}
          >
            {showMore[index] ? "Sembunyikan" : "Tampilkan"}
          </Tombol>

          <Tombol
            onClick={() => handleLikeClick(index)}
            className={showLike[index] ? "button" : "batal"}
          >
            {showLike[index] ? "like" : "Batal Like"}
          </Tombol>
        </div>
      ))}
    </div>
  );
}
