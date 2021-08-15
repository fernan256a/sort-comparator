import React from "react";
import efficiency from "../assets/img/efficiency.png"
import {Media} from "reactstrap";

const Header = () => {
  return (
    <div className="d-flex mb-4">
      <div className="align-self-center me-2">
        <Media width={50} src={efficiency} alt="Logo"/>
      </div>
      <h1 className="m-0">Sort comparator</h1>
    </div>
  )
}

export default Header;
