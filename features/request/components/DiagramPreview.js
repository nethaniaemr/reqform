import React from "react";
import { ArrowDown } from "lucide-react";
import { getDiagramLines } from "../constants";

export default function DiagramPreview({ text, emptyLabel = "Tidak ada diagram" }) {
  const lines = getDiagramLines(text);

  return (
    <>
      {lines.length > 0 ? (
        lines.map((lineText, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === lines.length - 1 && lines.length > 1;
          return (
            <React.Fragment key={idx}>
              <div
                className={`w-full text-center px-3 py-2 bg-white border border-primary text-xs font-medium text-primary shadow-sm ${
                  isFirst || isLast ? "rounded-full" : "rounded-md"
                }`}
              >
                {lineText}
              </div>
              {idx < lines.length - 1 && <ArrowDown className="w-4 h-4 text-primary my-0.5" />}
            </React.Fragment>
          );
        })
      ) : (
        <div className="text-xs text-gray-400 italic">{emptyLabel}</div>
      )}
    </>
  );
}