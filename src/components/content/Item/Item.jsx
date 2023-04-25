import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

export default function Item(props) {
  return (
    <div className="item">
      <ItemTitle Title={props.Title} />
      <ItemSubtitle Subtitle={props.Subtitle} />
      <ItemPicture Picture={props.Picture} Alt={props.Alt} />
      <ItemDescription Description={props.Description} />
    </div>
  );
}
