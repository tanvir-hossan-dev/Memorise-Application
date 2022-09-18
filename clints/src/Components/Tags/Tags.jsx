import React from "react";
import { useSelector } from "react-redux";
import Tag from "./Tag/Tag";

const Tags = () => {
  const { cards } = useSelector((state) => state.cards);

  return cards.map((card) => card.tags && <Tag key={card._id} id={card._id} tags={card.tags} />);
};

export default Tags;
