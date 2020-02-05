import React from "react";

export function stringify(data) {
  return (
    <div style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
      {JSON.stringify(data, null, "\t")}
    </div>
  );
}
