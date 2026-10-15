import FormField, { inputClass } from "./FormField";
import { ChevronDown } from "lucide-react";

export default function ExpenseLiabilities({ data, errors = {}, onChange }) {
  const set = (field) => (e) => onChange({ ...data, [field]: e.target.value });
  const setToggle = (field, val) => () => onChange({ ...data, [field]: val });

  return (
    <div className="space-y-6">
      {/* Expense & Liabilities */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Expense & Liabilities
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="Monthly Share of Rent at Current Address" required error={errors.monthlyRentShare}>
              <input
                className={`${inputClass} ${errors.monthlyRentShare ? "border-red-500" : ""}`}
                value={data.monthlyRentShare}
                onChange={set("monthlyRentShare")}
                placeholder="$1200"
              />
            </FormField>
            <FormField label="Monthly Spending on Food, Entertainment, Clothing" required error={errors.monthlyLivingExpenses}>
              <input
                className={`${inputClass} ${errors.monthlyLivingExpenses ? "border-red-500" : ""}`}
                value={data.monthlyLivingExpenses}
                onChange={set("monthlyLivingExpenses")}
                placeholder="$ 800"
              />
            </FormField>
            <FormField label="Monthly Spending on Utilities, Insurance, Mobile Etc" required error={errors.monthlyUtilityExpenses}>
              <input
                className={`${inputClass} ${errors.monthlyUtilityExpenses ? "border-red-500" : ""}`}
                value={data.monthlyUtilityExpenses}
                onChange={set("monthlyUtilityExpenses")}
                placeholder="$ 400"
              />
            </FormField>
          </div>

          {/* Credit Card Info */}
          <div className="pt-6 border-t border-gray-200 space-y-6">
            <h4 className="font-bold text-text-dark">Credit Card Info</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
              <FormField label="Does The Customer Has Credit Card?" required>
                <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200">
                  <button
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                      data.hasCreditCard === "Yes"
                        ? "bg-[#596df2] text-white"
                        : "text-text-primary hover:bg-gray-50"
                    }`}
                    onClick={setToggle("hasCreditCard", "Yes")}
                  >
                    Yes
                  </button>
                  <button
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                      data.hasCreditCard === "No"
                        ? "bg-[#596df2] text-white"
                        : "text-text-primary hover:bg-gray-50"
                    }`}
                    onClick={setToggle("hasCreditCard", "No")}
                  >
                    No
                  </button>
                </div>
              </FormField>
              
              <div className="lg:col-span-3">
                <FormField label="Credit Card Provider Bank" required={data.hasCreditCard === "Yes"} error={errors.creditCardProvider}>
                  <div className="relative">
                    <select
                      className={`${inputClass} appearance-none pr-10 ${errors.creditCardProvider ? "border-red-500" : ""}`}
                      value={data.creditCardProvider}
                      onChange={set("creditCardProvider")}
                      disabled={data.hasCreditCard !== "Yes"}
                    >
                      <option value="" disabled>Select</option>
                      <option>NAB</option>
                      <option>CBA</option>
                      <option>Westpac</option>
                      <option>ANZ</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </FormField>
              </div>
            </div>

            {data.hasCreditCard === "Yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Card Limit" required error={errors.creditCardLimit}>
                  <input
                    className={`${inputClass} ${errors.creditCardLimit ? "border-red-500" : ""}`}
                    value={data.creditCardLimit}
                    onChange={set("creditCardLimit")}
                    placeholder="$1000"
                  />
                </FormField>
                <FormField label="Combined Owning" required error={errors.creditCardOwing}>
                  <div className="relative">
                    <select
                      className={`${inputClass} appearance-none pr-10 ${errors.creditCardOwing ? "border-red-500" : ""}`}
                      value={data.creditCardOwing}
                      onChange={set("creditCardOwing")}
                    >
                      <option value="" disabled>Select</option>
                      <option>$1000</option>
                      <option>$2200</option>
                      <option>$3000</option>
                      <option>$5000</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </FormField>
              </div>
            )}
          </div>

          {/* Others Loan */}
          <div className="pt-6 border-t border-gray-200 space-y-6">
            <h4 className="font-bold text-text-dark">Others Loan</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
              <FormField label="Does The Customer Has Others Loan?" required>
                <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200">
                  <button
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                      data.hasOtherLoan === "Yes"
                        ? "bg-[#596df2] text-white"
                        : "text-text-primary hover:bg-gray-50"
                    }`}
                    onClick={setToggle("hasOtherLoan", "Yes")}
                  >
                    Yes
                  </button>
                  <button
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                      data.hasOtherLoan === "No"
                        ? "bg-[#596df2] text-white"
                        : "text-text-primary hover:bg-gray-50"
                    }`}
                    onClick={setToggle("hasOtherLoan", "No")}
                  >
                    No
                  </button>
                </div>
              </FormField>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Amount Owing" required={data.hasOtherLoan === "Yes"} error={errors.otherLoanAmount}>
                  <input
                    className={`${inputClass} ${errors.otherLoanAmount ? "border-red-500" : ""}`}
                    value={data.otherLoanAmount}
                    onChange={set("otherLoanAmount")}
                    disabled={data.hasOtherLoan !== "Yes"}
                    placeholder="$5000"
                  />
                </FormField>
                <FormField label="Monthly Repayment" required={data.hasOtherLoan === "Yes"} error={errors.otherLoanRepayment}>
                  <input
                    className={`${inputClass} ${errors.otherLoanRepayment ? "border-red-500" : ""}`}
                    value={data.otherLoanRepayment}
                    onChange={set("otherLoanRepayment")}
                    disabled={data.hasOtherLoan !== "Yes"}
                    placeholder="$400"
                  />
                </FormField>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
