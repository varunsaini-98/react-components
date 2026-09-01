import "./forms.css";
import { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");
  return (
    <div>
      <form className="form-box">
        <p>Input Text Here: </p>
        <input
          className="in"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        <p>The button below are not connected with this form.</p>
      </form>
    </div>
  );
}
