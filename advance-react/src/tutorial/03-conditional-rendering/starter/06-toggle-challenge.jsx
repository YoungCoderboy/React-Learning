import { useState } from "react";

const ToggleChallenge = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
    setUser({ name: "john" });
  };
  const handleLogout = () => {
    setIsLogin(false);
    setUser(null);
  };
  return (
    <>
      {isLogin ? (
        // <h1>Hello</h1>
        <Logout handleLogout={handleLogout} />
      ) : (
        // <h1>Hello2</h1>
        <div>
          <h1>Please Login</h1>{" "}
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default ToggleChallenge;

function Logout({ handleLogout }) {
  return (
    <div>
      <h1>hello {user.name}</h1>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
