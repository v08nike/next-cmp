import { useCookies } from "react-cookie";

const Login = () => {
  const [cookie, setCookie] = useCookies(["user"]);

  const handleSignIn = async () => {
    try {
      const data = {
        username: "welcome",
        userid: document.getElementById("welcome"),
      };

      setCookie("user", JSON.stringify(data), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <label htmlFor="username">
        <input type="text" id="welcome" placeholder="enter username" />
        <button onClick={handleSignIn}>save cookies</button>
      </label>
    </>
  );
};

export default Login;
