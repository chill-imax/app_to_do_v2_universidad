import { useState } from "react";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <form>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Write your e-mail"
        />
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="Write your password"
        />
      </form>
    </div>
  );
}
