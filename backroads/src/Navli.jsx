const nav = ["home", "about", "services", "tours"];
const Navli = (props) => {
  const { class_name } = props;

  return (
    <>
      {nav.map((ele) => {
        return (
          <li>
            <a href={`#${ele}`} className={class_name}>
              {ele}
            </a>
          </li>
        );
      })}
    </>
  );
};
export default Navli;
