import FormField, { inputClass } from "./FormField";

export default function NeedsObjective({ data, errors = {}, onChange }) {
  const set = (field) => (e) => onChange({ ...data, [field]: e.target.value });
  const setToggle = (field, val) => () => onChange({ ...data, [field]: val });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Compliance Questions
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 space-y-8">
          
          {/* Question 1 */}
          <div className="space-y-4">
            <FormField label="Does The Customer Anticipate Any Changes That Could Adversely Impact His Ability To Repay This Loan?" required error={errors.anticipateChanges}>
              <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 w-full md:w-1/3">
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.anticipateChanges === "Yes"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("anticipateChanges", "Yes")}
                >
                  Yes
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.anticipateChanges === "No"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("anticipateChanges", "No")}
                >
                  No
                </button>
              </div>
            </FormField>
            
            {data.anticipateChanges === "Yes" && (
              <FormField label="Please Comment" required error={errors.anticipateChangesComment}>
                <textarea
                  className={`${inputClass} min-h-[100px] resize-y ${errors.anticipateChangesComment ? "border-red-500" : ""}`}
                  value={data.anticipateChangesComment}
                  onChange={set("anticipateChangesComment")}
                  placeholder="Leave a Comment Here"
                />
              </FormField>
            )}
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <FormField label="What is Customer's Level of Financial Experience?" required error={errors.financialExperience}>
              <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 w-full">
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.financialExperience === "Low"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50 border-r border-gray-200"
                  }`}
                  onClick={setToggle("financialExperience", "Low")}
                >
                  Low
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.financialExperience === "Medium"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50 border-r border-gray-200"
                  }`}
                  onClick={setToggle("financialExperience", "Medium")}
                >
                  Medium
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.financialExperience === "High"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("financialExperience", "High")}
                >
                  High
                </button>
              </div>
            </FormField>
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <FormField label="Does The Customer Has an Emergency Fund, Liquid Asset or Insurance to Assist With Repayment of Debt In The Event Loss of Income?" required error={errors.hasEmergencyFund}>
              <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 w-full md:w-1/3">
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.hasEmergencyFund === "Yes"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("hasEmergencyFund", "Yes")}
                >
                  Yes
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.hasEmergencyFund === "No"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("hasEmergencyFund", "No")}
                >
                  No
                </button>
              </div>
            </FormField>

            {data.hasEmergencyFund === "Yes" && (
              <FormField label="Please Comment" required error={errors.emergencyFundComment}>
                <textarea
                  className={`${inputClass} min-h-[100px] resize-y ${errors.emergencyFundComment ? "border-red-500" : ""}`}
                  value={data.emergencyFundComment}
                  onChange={set("emergencyFundComment")}
                  placeholder="Leave a Comment Here"
                />
              </FormField>
            )}
          </div>

          {/* Question 4 */}
          <div className="space-y-4">
            <FormField label="Does The Customer Ever Had Any Problems Meeting His Financial Commitments Including Mobile Phone Payments?" required error={errors.hasRepaymentProblems}>
              <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 w-full md:w-1/3">
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.hasRepaymentProblems === "Yes"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("hasRepaymentProblems", "Yes")}
                >
                  Yes
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.hasRepaymentProblems === "No"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("hasRepaymentProblems", "No")}
                >
                  No
                </button>
              </div>
            </FormField>

            {data.hasRepaymentProblems === "Yes" && (
              <FormField label="Please Comment" required error={errors.repaymentProblemsComment}>
                <textarea
                  className={`${inputClass} min-h-[100px] resize-y ${errors.repaymentProblemsComment ? "border-red-500" : ""}`}
                  value={data.repaymentProblemsComment}
                  onChange={set("repaymentProblemsComment")}
                  placeholder="Leave a Comment Here"
                />
              </FormField>
            )}
          </div>

          {/* Question 5 */}
          <div className="space-y-4">
            <FormField label="Does The Customer Has Unsatisfied Judgments In Any Court Against Him or Any Company of Which He Were A Share Holder / Officer?" required error={errors.hasUnsatisfiedJudgments}>
              <div className="flex bg-white rounded-xl overflow-hidden border border-gray-200 w-full md:w-1/3">
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.hasUnsatisfiedJudgments === "Yes"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("hasUnsatisfiedJudgments", "Yes")}
                >
                  Yes
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    data.hasUnsatisfiedJudgments === "No"
                      ? "bg-[#596df2] text-white"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                  onClick={setToggle("hasUnsatisfiedJudgments", "No")}
                >
                  No
                </button>
              </div>
            </FormField>

            {data.hasUnsatisfiedJudgments === "Yes" && (
              <FormField label="Please Comment" required error={errors.unsatisfiedJudgmentsComment}>
                <textarea
                  className={`${inputClass} min-h-[100px] resize-y ${errors.unsatisfiedJudgmentsComment ? "border-red-500" : ""}`}
                  value={data.unsatisfiedJudgmentsComment}
                  onChange={set("unsatisfiedJudgmentsComment")}
                  placeholder="Leave a Comment Here"
                />
              </FormField>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
