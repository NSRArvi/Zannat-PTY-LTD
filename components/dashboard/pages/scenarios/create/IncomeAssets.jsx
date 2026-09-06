import FormField, { inputClass } from "./FormField";
import { Calendar, ChevronDown } from "lucide-react";

export default function IncomeAssets({ data, errors = {}, onChange }) {
  const set = (field) => (e) => onChange({ ...data, [field]: e.target.value });
  const setToggle = (field, val) => () => onChange({ ...data, [field]: val });

  return (
    <div className="space-y-6">
      {/* Employment & Income Status */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Employment & Income Status
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-4">
              <FormField label="Current Employment Status" required error={errors.employmentStatus}>
                <div className="relative">
                  <select
                    className={`${inputClass} appearance-none pr-10 ${errors.employmentStatus ? "border-red-500" : ""}`}
                    value={data.employmentStatus}
                    onChange={set("employmentStatus")}
                  >
                    <option value="" disabled>Select</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Self Employed</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </FormField>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormField label="Occupation" required error={errors.occupation}>
              <input
                className={`${inputClass} ${errors.occupation ? "border-red-500" : ""}`}
                value={data.occupation}
                onChange={set("occupation")}
                placeholder="Title Name"
              />
            </FormField>
            <FormField label="Employers Name" required error={errors.employerName}>
              <input
                className={`${inputClass} ${errors.employerName ? "border-red-500" : ""}`}
                value={data.employerName}
                onChange={set("employerName")}
                placeholder="Wrote Name"
              />
            </FormField>
            <FormField label="Employers Phone" required error={errors.employerPhone}>
              <div className={`flex items-center gap-2 bg-white border ${errors.employerPhone ? "border-red-500" : "border-gray-200"} rounded-xl px-3`}>
                <span className="text-lg">🇦🇺</span>
                <input
                  className="w-full py-3 outline-none text-text-dark placeholder:text-text-primary"
                  value={data.employerPhone}
                  onChange={set("employerPhone")}
                  placeholder="+61 412 345 678"
                />
              </div>
            </FormField>
            <FormField label="Starting Date of The Job" required error={errors.jobStartDate}>
              <div className="relative">
                <input
                  className={`${inputClass} ${errors.jobStartDate ? "border-red-500" : ""}`}
                  value={data.jobStartDate}
                  onChange={set("jobStartDate")}
                  placeholder="10/12/2024"
                />
                <Calendar className="w-4 h-4 text-text-primary absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <FormField label="Income After Tax Per Week" required error={errors.incomeAfterTax}>
              <input
                className={`${inputClass} ${errors.incomeAfterTax ? "border-red-500" : ""}`}
                value={data.incomeAfterTax}
                onChange={set("incomeAfterTax")}
                placeholder="$9500"
              />
            </FormField>
          </div>

          {/* Additional Income */}
          <div className="pt-4 border-t border-gray-100 space-y-6">
            <h4 className="font-bold text-text-dark">Additional Income</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <FormField label="Does The Customer Has Other Income?" required>
                <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200">
                  <button
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                      data.hasOtherIncome === "Yes"
                        ? "bg-[#596df2] text-white"
                        : "text-text-primary hover:bg-gray-50"
                    }`}
                    onClick={setToggle("hasOtherIncome", "Yes")}
                  >
                    Yes
                  </button>
                  <button
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                      data.hasOtherIncome === "No"
                        ? "bg-[#596df2] text-white"
                        : "text-text-primary hover:bg-gray-50"
                    }`}
                    onClick={setToggle("hasOtherIncome", "No")}
                  >
                    No
                  </button>
                </div>
              </FormField>
              
              <div className="lg:col-span-3">
                <FormField label="Income Source" required={data.hasOtherIncome === "Yes"} error={errors.otherIncomeSource}>
                  <div className="relative">
                    <select
                      className={`${inputClass} appearance-none pr-10 ${errors.otherIncomeSource ? "border-red-500" : ""}`}
                      value={data.otherIncomeSource}
                      onChange={set("otherIncomeSource")}
                      disabled={data.hasOtherIncome !== "Yes"}
                    >
                      <option value="" disabled>Select</option>
                      <option>2nd Job</option>
                      <option>Rental Income</option>
                      <option>Investment</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </FormField>
              </div>
            </div>

            {data.hasOtherIncome === "Yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FormField label="Occupation" required error={errors.otherOccupation}>
                  <input
                    className={`${inputClass} ${errors.otherOccupation ? "border-red-500" : ""}`}
                    value={data.otherOccupation}
                    onChange={set("otherOccupation")}
                    placeholder="Title Name"
                  />
                </FormField>
                <FormField label="Employers Name" required error={errors.otherEmployerName}>
                  <input
                    className={`${inputClass} ${errors.otherEmployerName ? "border-red-500" : ""}`}
                    value={data.otherEmployerName}
                    onChange={set("otherEmployerName")}
                    placeholder="Wrote Name"
                  />
                </FormField>
                <FormField label="Employers Phone" required error={errors.otherEmployerPhone}>
                  <div className={`flex items-center gap-2 bg-white border ${errors.otherEmployerPhone ? "border-red-500" : "border-gray-200"} rounded-xl px-3`}>
                    <span className="text-lg">🇦🇺</span>
                    <input
                      className="w-full py-3 outline-none text-text-dark placeholder:text-text-primary"
                      value={data.otherEmployerPhone}
                      onChange={set("otherEmployerPhone")}
                      placeholder="+61 412 345 678"
                    />
                  </div>
                </FormField>
                <FormField label="Starting Date of The Job" required error={errors.otherJobStartDate}>
                  <div className="relative">
                    <input
                      className={`${inputClass} ${errors.otherJobStartDate ? "border-red-500" : ""}`}
                      value={data.otherJobStartDate}
                      onChange={set("otherJobStartDate")}
                      placeholder="10/12/2024"
                    />
                    <Calendar className="w-4 h-4 text-text-primary absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </FormField>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Approximate Asset Values */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Approximate Asset Values
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormField label="Real State / Land / House Value" required error={errors.realEstateValue}>
              <input
                className={`${inputClass} ${errors.realEstateValue ? "border-red-500" : ""}`}
                value={data.realEstateValue}
                onChange={set("realEstateValue")}
                placeholder="$ 650,000"
              />
            </FormField>
            <FormField label="Superannuation" required error={errors.superannuation}>
              <input
                className={`${inputClass} ${errors.superannuation ? "border-red-500" : ""}`}
                value={data.superannuation}
                onChange={set("superannuation")}
                placeholder="$ 50,000"
              />
            </FormField>
            <FormField label="Existing Vehicles Value" required error={errors.vehicleValue}>
              <input
                className={`${inputClass} ${errors.vehicleValue ? "border-red-500" : ""}`}
                value={data.vehicleValue}
                onChange={set("vehicleValue")}
                placeholder="$120,000"
              />
            </FormField>
            <FormField label="Home Contents Value" required error={errors.homeContentsValue}>
              <input
                className={`${inputClass} ${errors.homeContentsValue ? "border-red-500" : ""}`}
                value={data.homeContentsValue}
                onChange={set("homeContentsValue")}
                placeholder="$25,000"
              />
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
