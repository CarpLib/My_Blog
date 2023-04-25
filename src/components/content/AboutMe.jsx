import ItemTitle from "./Item/ItemTitle";
import ItemPicture from "./Item/ItemPicture";
import ItemDesciption from "./Item/ItemDescription";

export default function AboutMe(props) {
  return (
    <>
      <ItemTitle Title={props.Title} />
      <div className="aboutMe">
        <ItemPicture Picture={props.Picture} Alt={props.Alt} />
        <ItemDesciption Description={props.Description} />
      </div>
    </>
  );
}
