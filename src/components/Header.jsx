import React from "react";
import printerx from "../assets/img/printerxLogo.jpg";
import {Button} from "react-bootstrap"
import {Link}  from 'react-router-dom'
export default function Header() {
  return (
    <>
    <div>
      header <img src={printerx} alt="logo" />
    </div>

    <Button as={Link} to={'/consulta'} variant="primary" >Consulta</Button>
    </>
  );
}
