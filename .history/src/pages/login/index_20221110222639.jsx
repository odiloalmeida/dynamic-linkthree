import { React } from "react";
import { useState } from "react";
import "./login.css";
import { Logo } from "../../components/Logo";

export default function Login() {
  const [email, setEmail] = useState("a");
//  const [password, setPassword] = useState("a");

  return(
    <div className="login-container">
      <Logo />

      <form className="forms">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          autocomplete
        />

        <input
          type="password"
          name="password"
          placeholder="*******"
          autocomplete="on"
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}
