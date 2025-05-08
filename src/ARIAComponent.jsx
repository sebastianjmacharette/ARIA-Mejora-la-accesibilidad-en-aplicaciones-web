import React, { useState } from "react";

function ARIAComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [progress, setProgress] = useState(40);
  const [alertMessage, setAlertMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center gap-6">
      {/* Botón accesible con aria-expanded */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Ocultar menú" : "Mostrar menú"}
      </button>

      {isExpanded && (
        <div
          role="dialog"
          aria-labelledby="dialog-title"
          className="p-4 bg-white shadow-lg rounded w-80"
        >
          <h2 id="dialog-title" className="text-lg font-semibold">
            Diálogo accesible
          </h2>
          <p>Este es un cuadro de diálogo con soporte ARIA.</p>
        </div>
      )}

      {/* Casilla de verificación accesible */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          aria-checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="accent-blue-600"
        />
        <span className="text-gray-700">Activar opción</span>
      </label>

      {/* Barra de progreso accesible */}
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        className="relative w-64 h-4 bg-gray-300 rounded"
      >
        <div
          className="absolute top-0 left-0 h-4 bg-blue-500 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => setProgress(progress + 10)}
      >
        Incrementar progreso
      </button>

      {/* Alerta con aria-live */}
      <div aria-live="assertive" role="alert" className="text-red-600 font-semibold">
        {alertMessage}
      </div>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => setAlertMessage("¡Acción completada!")}
      >
        Generar alerta
      </button>

      {/* Botón deshabilitado con aria-disabled */}
      <button
        className={`px-4 py-2 rounded ${
          isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
        aria-disabled={isDisabled}
        disabled={isDisabled}
      >
        Botón deshabilitado
      </button>
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        onClick={() => setIsDisabled(!isDisabled)}
      >
        Alternar estado del botón
      </button>
    </div>
  );
}

export default ARIAComponent;
