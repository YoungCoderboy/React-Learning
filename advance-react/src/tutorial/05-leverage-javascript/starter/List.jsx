import { people } from "../../../data.js";
const List = () => {
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;

function Person({ name, nickName, images }) {
  //   const img = images[0].small.url;
  return (
    <div>
      <img src="" alt={name} />
      <h4>{name}</h4>

      <p>NickName : {nickName || "Default Value"} </p>
    </div>
  );
}
