import { ChevronDown } from "lucide-react";

export default function Performance() {
  const data = [
    { label: "Conversion rate", value: 80, color: "#6366f1" },
    { label: "Settlements", value: 70, color: "#14b8a6" },
    { label: "Compliance", value: 40, color: "#ec4899" },
    { label: "Application", value: 80, color: "#f5876c" },
  ];

  // hexagon vertices, angle 0 = right, clockwise
  const cx = 350,
    cy = 350,
    R = 250;
  const pt = (deg) => {
    const rad = (Math.PI / 180) * deg;
    return [cx + R * Math.cos(rad), cy + R * Math.sin(rad)];
  };
  const [v0, v1, v2, v3, v4, v5] = [0, 60, 120, 180, 240, 300].map(pt);
  const hexPath = `M${[v0, v1, v2, v3, v4, v5].map((p) => p.join(",")).join(" L")} Z`;

  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-text-dark">Your Performance</h2>
        <button className="flex items-center gap-1 text-primary font-semibold hover:underline">
          Lifetime <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
        {/* Isometric hex graphic */}
        <div className="relative flex-1 w-full max-w-[420px]">
          <svg viewBox="60 60 580 580" className="w-full h-auto">
            <defs>
              <linearGradient id="panelApplication" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff" />
                <stop
                  offset="100%"
                  stopColor={data[3].color}
                  stopOpacity="0.35"
                />
              </linearGradient>
              <linearGradient id="panelConversion" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff" />
                <stop
                  offset="100%"
                  stopColor={data[0].color}
                  stopOpacity="0.3"
                />
              </linearGradient>
              <linearGradient id="panelCompliance" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff" />
                <stop
                  offset="100%"
                  stopColor={data[2].color}
                  stopOpacity="0.25"
                />
              </linearGradient>
              <linearGradient id="panelSettlements" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff" />
                <stop
                  offset="100%"
                  stopColor={data[1].color}
                  stopOpacity="0.3"
                />
              </linearGradient>
            </defs>

            {/* dashed outer guide */}
            <path
              d={hexPath}
              fill="none"
              stroke="#d1d5db"
              strokeDasharray="6 6"
              strokeWidth="1.5"
            />
            {/* dashed axis lines through center */}
            <line
              x1={v0[0]}
              y1={v0[1]}
              x2={v3[0]}
              y2={v3[1]}
              stroke="#e5e7eb"
              strokeDasharray="4 6"
            />
            <line
              x1={v1[0]}
              y1={v1[1]}
              x2={v4[0]}
              y2={v4[1]}
              stroke="#e5e7eb"
              strokeDasharray="4 6"
            />
            <line
              x1={v2[0]}
              y1={v2[1]}
              x2={v5[0]}
              y2={v5[1]}
              stroke="#e5e7eb"
              strokeDasharray="4 6"
            />

            {/* colored panels (center -> two adjacent vertices) */}
            <polygon
              points={`${cx},${cy} ${v4[0]},${v4[1]} ${v5[0]},${v5[1]}`}
              fill="url(#panelApplication)"
            />
            <polygon
              points={`${cx},${cy} ${v5[0]},${v5[1]} ${v0[0]},${v0[1]}`}
              fill="url(#panelConversion)"
            />
            <polygon
              points={`${cx},${cy} ${v0[0]},${v0[1]} ${v1[0]},${v1[1]}`}
              fill="url(#panelCompliance)"
            />
            <polygon
              points={`${cx},${cy} ${v2[0]},${v2[1]} ${v3[0]},${v3[1]}`}
              fill="url(#panelSettlements)"
            />

            {/* colored edges */}
            <line
              x1={v4[0]}
              y1={v4[1]}
              x2={v5[0]}
              y2={v5[1]}
              stroke={data[3].color}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1={v5[0]}
              y1={v5[1]}
              x2={v0[0]}
              y2={v0[1]}
              stroke={data[0].color}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1={v0[0]}
              y1={v0[1]}
              x2={v1[0]}
              y2={v1[1]}
              stroke={data[2].color}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1={v2[0]}
              y1={v2[1]}
              x2={v3[0]}
              y2={v3[1]}
              stroke={data[1].color}
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* accent vertical bars at left/right vertices */}
            <line
              x1={v0[0]}
              y1={v0[1] - 90}
              x2={v0[0]}
              y2={v0[1] + 90}
              stroke={data[0].color}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <line
              x1={v3[0]}
              y1={v3[1] - 90}
              x2={v3[0]}
              y2={v3[1] + 90}
              stroke={data[1].color}
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          {/* floating tooltip */}
          <div className="absolute top-[8%] left-[6%] bg-gradient-to-br from-[#818cf8] to-secondary text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
            {data[3].value}% {data[3].label}
            <div className="absolute -bottom-1.5 left-8 w-3 h-3 bg-secondary rotate-45" />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-6 w-full lg:w-56 shrink-0">
          {data.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span
                className="w-1 self-stretch rounded-full min-h-[48px]"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-text-primary">{item.label}</p>
                <p className="text-2xl font-bold text-text-dark">
                  {item.value}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
