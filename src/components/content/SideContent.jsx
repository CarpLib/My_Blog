import AboutMe from "./AboutMe";
import Picture from "../../assets/img/me.jpg";

export default function SideContent() {
  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo modi corporis nostrum illum, quas quisquam. Temporibus natus veniam quidem dicta!";
  return (
    <>
      <AboutMe
        Title="About Me"
        Picture={Picture}
        Alt="Photo Personnel"
        Description={description}
      />
    </>
  );
}
