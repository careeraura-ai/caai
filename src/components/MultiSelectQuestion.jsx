import React, { useState } from "react";

export default function MultiSelectQuestion({ q, onSubmit }) {
  const [selected, setSelected] = useState([]);

  function toggle(opt) {
    if (selected.includes(opt)) {
      setSelected(selected.filter(x => x !== opt));
    } else {
      setSelected([...selected, opt]);
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => toggle(opt)}
            className={`p-3 rounded 
              ${selected.includes(opt) ? "bg-accent text-black" : "bg-gray-700"}
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-500 rounded text-black font-bold"
        onClick={() => onSubmit(selected)}
      >
        Next
      </button>
    </div>
  );
}
