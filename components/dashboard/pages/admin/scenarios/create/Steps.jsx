import { Check } from "lucide-react";

export default function Steps({ currentStep = 1 }) {
  const steps = [
    { id: 1, label: "Personal Details" },
    { id: 2, label: "Income & Assets" },
    { id: 3, label: "Expense & Liabilities" },
    { id: 4, label: "Needs & Objectives" },
    { id: 5, label: "Documents" },
  ];

  return (
    <div className="flex items-center mb-8">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isDone = step.id < currentStep;
        return (
          <div
            key={step.id}
            className="flex items-center flex-1 last:flex-none"
          >
            <div className="flex items-center gap-3 shrink-0">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm ${
                  isActive
                    ? "bg-primary text-white"
                    : isDone
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-text-primary"
                }`}
              >
                {isDone ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span
                className={`font-semibold ${isActive ? "text-primary" : "text-text-primary"}`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-px bg-gray-200 mx-6" />
            )}
          </div>
        );
      })}
    </div>
  );
}
