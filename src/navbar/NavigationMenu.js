import { sectionsNameId } from "../constants";
import "./NavigationManu.css";

const NavigationItem = (props) => {
  return (
    <li>
      <a href={props.ref}>{props.title}</a>
    </li>
  );
};

const NavigationMenu = () => {
  return (
    <nav className="sidebar">
      <ul>
        {sectionsNameId.map(({title, id}) => <NavigationItem ref={`#${id}`} title={title}/>)}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
