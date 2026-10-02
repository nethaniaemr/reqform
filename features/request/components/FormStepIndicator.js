import { Check } from "lucide-react";

const STEPS = [
  {
    step: 1,
    title: "Informasi Aplikasi",
    desc: "Pengisian informasi & kebutuhan pengembangan aplikasi",
  },
  {
    step: 2,
    title: "Kesesuaian dengan ITMP PI Group",
    desc: "Pengisian kesesuaian pengembangan aplikasi dengan ITMP",
  },
];

export default function FormStepIndicator({ currentStep }) {
  const current = STEPS[currentStep - 1];

  return (
    <div className="bg-white border border-gray-200 rounded-md px-4 sm:px-5 py-4">
      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-4 sm:gap-6">
        {STEPS.map(({ step, title, desc }, idx) => {
          const isActive = currentStep === step;
          const isDone = currentStep > step;

          return (
            <div key={step} className="flex items-center gap-4 flex-1 min-w-0">
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-md font-bold flex items-center justify-center text-lg sm:text-xl shrink-0 ${
                  isActive || isDone
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {isDone ? <Check className="w-5 h-5" /> : step}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                  {title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">
                  {desc}
                </p>
              </div>

              {idx < STEPS.length - 1 && (
                <div className="hidden sm:block text-gray-300 shrink-0">
                  &gt;
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0">
          {currentStep}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">
            {current.title}
          </h4>
        </div>
      </div>
    </div>
  );
}
