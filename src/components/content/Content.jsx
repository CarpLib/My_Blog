import MainContent from "./MainContent";
import SideContent from "./SideContent";

export default function Content() {
  return (
    <div className="content">
      <div>
        <MainContent />
      </div>
      <div>
        <SideContent />
      </div>
    </div>
  );
}
