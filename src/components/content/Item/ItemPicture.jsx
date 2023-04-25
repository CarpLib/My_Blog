import React from "react";

export default function ItemPicture(props) {
  return <img className="picture" src={props.Picture} alt={props.Alt} />;
}
