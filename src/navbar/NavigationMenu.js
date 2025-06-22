import { LOCATION_TITLE, CONFIRM_PRESENCE } from "../constants";
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
        <NavigationItem ref={"#location"} title={LOCATION_TITLE} />
        <NavigationItem ref={"#meal"} title={CONFIRM_PRESENCE} />
      </ul>
    </nav>
  );
};

// const NavigationMenu = () => {
//   return (
//     <div className="upbar-nav">
//       <div class="upbar-containers">
//         {/* <h3>Conteúdos</h3> */}
//         <NavigationItem ref={"#location"} title={LOCATION_TITLE} />
//         <NavigationItem ref={"#meal"} title={"Confirma a tua presença"} />
//       </div>
//     </div>
//   );
// };

export default NavigationMenu;
