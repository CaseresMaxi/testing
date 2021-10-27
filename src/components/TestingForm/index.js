import React, { useState } from "react";
import { CODE_EXAMPLE } from "../../constants";
import { halstead, calcularComplejidadCiclomatica } from "../../util";
import CodeInput from "../CodeInput";
import Result from "../Result";
import Results from "../Results";
import SubmitButton from "../SubmitButton";
import Title from "../Title";

import "./index.scss";

const FORM_STATES = {
  WAITING_INPUT: 1,
  INPUT_LOADED: 2,
  SHOW_RESULTS: 3,
};

export default function TestingForm() {
  const [cantLineasTotales, setcantLineasTotales] = useState(0);
  const [complejidadCiclomatica, setcomplejidadCiclomatica] = useState(0);
  const [longitudHalstead, setlongitudHalstead] = useState(0);
  const [volumenHalstead, setvolumenHalstead] = useState(0);
  const [comentariosSimples, setcomentariosSimples] = useState(0);
  const [type, settype] = useState("both")
  const [currentState, setCurrentState] = useState(FORM_STATES.INPUT_LOADED);

  const outputs = [
    {
      name: "cantidad de líneas",
      value: cantLineasTotales,
      type: "both"
    },
    {
      name: "cantidad de líneas de código",
      value: cantLineasTotales - comentariosSimples,
      type: "both"
    },
    {
      name: "cantidad de líneas comentadas",
      value: comentariosSimples,
      type: "both"
    },
    {
      name: "porcentaje de líneas comentadas",
      value:
        comentariosSimples > 0 && cantLineasTotales > 0
          ? parseFloat(comentariosSimples / cantLineasTotales).toFixed(3) * 100
          : 0,
      type: "both"
    },
    {
      name: "complejidad ciclomática",
      value: complejidadCiclomatica,
      type: "McCabe"
    },
    {
      name: "longitud de Halstead",
      value: longitudHalstead,
      type: "Halstead"
    },
    {
      name: "volumen de Halstead",
      value: volumenHalstead,
      type: "Halstead"
    },
  ];

  const [code, setCode] = useState(CODE_EXAMPLE);
  const handleCodeChange = (e) => {
    setCode(e.target.value);

    if (e.target.value.length) setCurrentState(FORM_STATES.INPUT_LOADED);
    else setCurrentState(FORM_STATES.WAITING_INPUT);
  };

  const handleHalsteadResult = (
    cantidadOperadoresUnicos,
    cantidadOperandosUnicos,
    cantidadOperadoresTotales,
    cantidadOperandosTotales
  ) => {
    setlongitudHalstead(
      cantidadOperadoresUnicos <= 0 || cantidadOperandosUnicos <= 0
        ? "-"
        : parseInt(
            cantidadOperadoresUnicos * Math.log2(cantidadOperadoresUnicos) +
              cantidadOperandosUnicos * Math.log2(cantidadOperandosUnicos)
          )
    );
    setvolumenHalstead(
      cantidadOperadoresUnicos + cantidadOperandosUnicos <= 0
        ? "-"
        : parseFloat(
            (cantidadOperadoresTotales + cantidadOperandosTotales) *
              Math.log2(cantidadOperadoresUnicos + cantidadOperandosUnicos)
          ).toFixed(1)
    );
  };

  const handleComplejidadCiclomaticaResult = (result) => {
    setcomplejidadCiclomatica(result + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setcantLineasTotales(code.split("\n").length);
    setcomentariosSimples(code.split("//").length - 1);

    calcularComplejidadCiclomatica(code, handleComplejidadCiclomaticaResult);
    halstead(code, handleHalsteadResult);

    setCurrentState(FORM_STATES.SHOW_RESULTS);
  };

  return (
    <>
      <Title>Herramienta de testing</Title>

      <CodeInput code={code} onCodeChange={handleCodeChange} />
      
      <div style={{display:"flex"}}>
      <button className={type=== "McCabe" ? "checked-button" : "unchecked-button"} onClick={()=>{settype("McCabe")}}>McCabe</button>
      <button className={type=== "Halstead" ? "checked-button" : "unchecked-button"} onClick={()=>{settype("Halstead")}}>Halstead</button>
      <button className={type=== "both" ? "checked-button" : "unchecked-button"} onClick={()=>{settype("both")}}>Ambos</button>
      </div>
      <Results
        className={
          currentState === FORM_STATES.SHOW_RESULTS ? "div-show" : "div-hide"
        }
      >
        {outputs.map((output) => (
          (type===output.type ||  output.type === "both" || type==="both") && <Result key={output.name} {...output} />
        ))}
      </Results>
      {currentState === FORM_STATES.INPUT_LOADED && (
        <SubmitButton style={{ marginTop: "20px" }} onClick={handleSubmit}>
          Calcular
        </SubmitButton>
      )}
    </>
  );
}
