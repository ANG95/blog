import React, { Fragment } from 'react';
import { Label } from 'reactstrap';
import yo from "./assets/img/yo.jpg"
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container-fluid portada">
        <div className="row">
          <div className="col-sm-5 text-center">
            <img src={yo} alt="yo german apaza " className="rounded rounded-circle" width="200em" />
            <br />
            <Label
              style={{
                fontSize: "4rem",
                color: "white",
                fontFamily: "monospace",
                borderBottom: "1px dashed #189aa2",
                borderTop: "1px dashed #189aa2",
              }}>GERMÁN APAZA</Label>

            <p style={{
              fontSize: "1.5rem",
              color: "wheat",
              fontFamily: "courier new"
            }}>Programador Web Fullstack</p>

            <div style={{ textAlign: "justify",color: "#40fffc" }}>
              <p>
                Soy Programador Web Fulltack y Diseñador Gráfico aficionado, estudié la carrera de Ingeniería de Sistemas y me especialicé en aquello que me apasionó, la programación.
                En los últimos 3 años he desarrollado aplicaciones para escritorio y app moviles con javascript y reactjs asi tambien sitios web que generan valor y aumenta el desempeño de las empresas.
              </p>
              <p>
                Lo que me gusta de hacer esto es ésa sensación gratificante de crear y resolver, principalmente ver la satisfacción del cliente y haberlo apoyado para seguir triunfando,
                Todo lo que tenga que ver con programación y diseño me interesa. Trato de aprender siempre lo que mas puedo ya que la tecnologia no espera.
              </p>
            </div>
          </div>
          <div className="col-sm-5 text-center"
            style={{
              backgroundColor: "rgba(10, 9, 40, 0.75)",
              height: "calc(100vh)",
              boxShadow: "#0a0928 7px -1px 97px 30px"
            }}>
            <Label
              style={{
                fontSize: "2rem",
                color: "white",
                fontFamily: "monospace",
                borderBottom: "1px dashed #189aa2",
                borderTop: "1px dashed #189aa2",
              }}>Mi experiencia</Label>
          </div>
          <div className="col-sm-2 d-flex flex-column">
            {/* <div className=""> */}
            <button className="botones" style={{ marginTop: "auto" }}>ACERCA DE MI</button>
            <button className="botones">MI TRABAJO</button>
            <button className="botones">CONTACTAME</button>
            <button className="botones">TUTORIALES</button>
            {/* </div> */}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
