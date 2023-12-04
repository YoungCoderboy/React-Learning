import { link_icon } from "./data";
const Links = (props) => {
  const { class_name2, class_name1 } = props;
  return (
    <>
      <ul className={class_name2}>
        {link_icon.map((ele) => {
          return (
            <li key={ele.id}>
              <a href={ele.link} className={class_name1}>
                <i className={ele.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Links;
