import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState([]);

  return (
    <div>
      <FormInput user={user} setUser={setUser} />
      <List setUser={setUser} user={user} />
    </div>
  );
};
export default UserChallenge;

function FormInput({ user, setUser }) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setUser(() => {
      return [...user, name];
    });
    setName("");
    // console.log(user);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Add User</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
}

function List({ user, setUser }) {
  return (
    <div>
      {user.map((ele) => {
        return (
          <div>
            <h5>{ele}</h5>
            <button
              onClick={() => {
                const newUser = user.filter((person) => {
                  console.log(ele, person);
                  return person !== ele;
                });
                setUser(newUser);
              }}
            >
              clear
            </button>
          </div>
        );
      })}
    </div>
  );
}
