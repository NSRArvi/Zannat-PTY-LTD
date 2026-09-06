"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Steps from "./Steps";
import PersonalDetails from "./PersonalDetails";
import IncomeAssets from "./IncomeAssets";
import ExpenseLiabilities from "./ExpenseLiabilities";
import NeedsObjective from "./NeedsObjective";
import Documents from "./Documents";

export default function CreateScenarioPage() {
  const [personalDetails, setPersonalDetails] = useState({
    loanAmount: "",
    loanType: "",
    citizenshipStatus: "",
    applyingAs: "",
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    currentAddress: "",
    currentAddressStatus: "",
    currentLandlord: "",
    currentRent: "",
    currentLivingDate: "",
    previousAddress: "",
    previousAddressStatus: "",
    previousLandlord: "",
    previousRent: "",
    previousLivingDate: "",
    maritalStatus: "",
    dependents: "",
    accountantName: "",
    accountantPhone: "",
    accountantEmail: "",
  });

  const [incomeAssets, setIncomeAssets] = useState({
    employmentStatus: "",
    occupation: "",
    employerName: "",
    employerPhone: "",
    jobStartDate: "",
    incomeAfterTax: "",
    hasOtherIncome: "No",
    otherIncomeSource: "",
    otherOccupation: "",
    otherEmployerName: "",
    otherEmployerPhone: "",
    otherJobStartDate: "",
    realEstateValue: "",
    superannuation: "",
    vehicleValue: "",
    homeContentsValue: "",
  });

  const [expenseLiabilities, setExpenseLiabilities] = useState({
    monthlyRentShare: "",
    monthlyLivingExpenses: "",
    monthlyUtilityExpenses: "",
    hasCreditCard: "No",
    creditCardProvider: "",
    creditCardLimit: "",
    creditCardOwing: "",
    hasOtherLoan: "No",
    otherLoanAmount: "",
    otherLoanRepayment: "",
  });

  const [needsObjectives, setNeedsObjectives] = useState({
    anticipateChanges: "No",
    anticipateChangesComment: "",
    financialExperience: "Low",
    hasEmergencyFund: "No",
    emergencyFundComment: "",
    hasRepaymentProblems: "No",
    repaymentProblemsComment: "",
    hasUnsatisfiedJudgments: "No",
    unsatisfiedJudgmentsComment: "",
  });

  const [documents, setDocuments] = useState({
    driverLicenseFront: null,
    driverLicenseRear: null,
    medicarePassport: null,
    lastPayslip: null,
    secondLastPayslip: null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!personalDetails.loanAmount) newErrors.loanAmount = "Required field";
      if (!personalDetails.loanType) newErrors.loanType = "Required field";
      if (!personalDetails.citizenshipStatus)
        newErrors.citizenshipStatus = "Required field";
      if (!personalDetails.applyingAs) newErrors.applyingAs = "Required field";
      if (!personalDetails.fullName) newErrors.fullName = "Required field";
      if (!personalDetails.email) newErrors.email = "Required field";
      if (!personalDetails.phone) newErrors.phone = "Required field";
      if (!personalDetails.dob) newErrors.dob = "Required field";
      if (!personalDetails.currentAddress)
        newErrors.currentAddress = "Required field";
      if (!personalDetails.currentAddressStatus)
        newErrors.currentAddressStatus = "Required field";
      if (!personalDetails.currentLandlord)
        newErrors.currentLandlord = "Required field";
      if (!personalDetails.currentRent)
        newErrors.currentRent = "Required field";
      if (!personalDetails.currentLivingDate)
        newErrors.currentLivingDate = "Required field";
      if (!personalDetails.previousAddress)
        newErrors.previousAddress = "Required field";
      if (!personalDetails.previousAddressStatus)
        newErrors.previousAddressStatus = "Required field";
      if (!personalDetails.previousLandlord)
        newErrors.previousLandlord = "Required field";
      if (!personalDetails.previousRent)
        newErrors.previousRent = "Required field";
      if (!personalDetails.previousLivingDate)
        newErrors.previousLivingDate = "Required field";
      if (!personalDetails.maritalStatus)
        newErrors.maritalStatus = "Required field";
      if (!personalDetails.dependents) newErrors.dependents = "Required field";
    } else if (currentStep === 2) {
      if (!incomeAssets.employmentStatus)
        newErrors.employmentStatus = "Required field";
      if (!incomeAssets.occupation) newErrors.occupation = "Required field";
      if (!incomeAssets.employerName) newErrors.employerName = "Required field";
      if (!incomeAssets.employerPhone)
        newErrors.employerPhone = "Required field";
      if (!incomeAssets.jobStartDate) newErrors.jobStartDate = "Required field";
      if (!incomeAssets.incomeAfterTax)
        newErrors.incomeAfterTax = "Required field";
      if (incomeAssets.hasOtherIncome === "Yes") {
        if (!incomeAssets.otherIncomeSource)
          newErrors.otherIncomeSource = "Required field";
        if (!incomeAssets.otherOccupation)
          newErrors.otherOccupation = "Required field";
        if (!incomeAssets.otherEmployerName)
          newErrors.otherEmployerName = "Required field";
        if (!incomeAssets.otherEmployerPhone)
          newErrors.otherEmployerPhone = "Required field";
        if (!incomeAssets.otherJobStartDate)
          newErrors.otherJobStartDate = "Required field";
      }
      if (!incomeAssets.realEstateValue)
        newErrors.realEstateValue = "Required field";
      if (!incomeAssets.superannuation)
        newErrors.superannuation = "Required field";
      if (!incomeAssets.vehicleValue) newErrors.vehicleValue = "Required field";
      if (!incomeAssets.homeContentsValue)
        newErrors.homeContentsValue = "Required field";
    } else if (currentStep === 3) {
      if (!expenseLiabilities.monthlyRentShare)
        newErrors.monthlyRentShare = "Required field";
      if (!expenseLiabilities.monthlyLivingExpenses)
        newErrors.monthlyLivingExpenses = "Required field";
      if (!expenseLiabilities.monthlyUtilityExpenses)
        newErrors.monthlyUtilityExpenses = "Required field";
      if (expenseLiabilities.hasCreditCard === "Yes") {
        if (!expenseLiabilities.creditCardProvider)
          newErrors.creditCardProvider = "Required field";
        if (!expenseLiabilities.creditCardLimit)
          newErrors.creditCardLimit = "Required field";
        if (!expenseLiabilities.creditCardOwing)
          newErrors.creditCardOwing = "Required field";
      }
      if (expenseLiabilities.hasOtherLoan === "Yes") {
        if (!expenseLiabilities.otherLoanAmount)
          newErrors.otherLoanAmount = "Required field";
        if (!expenseLiabilities.otherLoanRepayment)
          newErrors.otherLoanRepayment = "Required field";
      }
    } else if (currentStep === 4) {
      if (!needsObjectives.financialExperience)
        newErrors.financialExperience = "Required field";
      if (
        needsObjectives.anticipateChanges === "Yes" &&
        !needsObjectives.anticipateChangesComment
      )
        newErrors.anticipateChangesComment = "Required field";
      if (
        needsObjectives.hasEmergencyFund === "Yes" &&
        !needsObjectives.emergencyFundComment
      )
        newErrors.emergencyFundComment = "Required field";
      if (
        needsObjectives.hasRepaymentProblems === "Yes" &&
        !needsObjectives.repaymentProblemsComment
      )
        newErrors.repaymentProblemsComment = "Required field";
      if (
        needsObjectives.hasUnsatisfiedJudgments === "Yes" &&
        !needsObjectives.unsatisfiedJudgmentsComment
      )
        newErrors.unsatisfiedJudgmentsComment = "Required field";
    } else if (currentStep === 5) {
      if (!documents.driverLicenseFront)
        newErrors.driverLicenseFront = "Required field";
      if (!documents.driverLicenseRear)
        newErrors.driverLicenseRear = "Required field";
      if (!documents.medicarePassport)
        newErrors.medicarePassport = "Required field";
      if (!documents.lastPayslip) newErrors.lastPayslip = "Required field";
      if (!documents.secondLastPayslip)
        newErrors.secondLastPayslip = "Required field";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(5, prev + 1));
      setErrors({});
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateStep()) {
      // wire up to API later
      console.log({
        personalDetails,
        incomeAssets,
        expenseLiabilities,
        needsObjectives,
        documents,
      });
      alert("Scenario created successfully!");
    }
  };

  const getNextText = () => {
    if (currentStep === 1) return "Next Income & Assets";
    if (currentStep === 2) return "Next Expense & Liabilities";
    if (currentStep === 3) return "Next Needs & Objectives";
    if (currentStep === 4) return "Next Documents";
    return "Next Step";
  };

  return (
    <div>
      <Steps currentStep={currentStep} />

      {currentStep === 1 && (
        <div className="w-full mt-8">
          <PersonalDetails
            data={personalDetails}
            errors={errors}
            onChange={setPersonalDetails}
          />
        </div>
      )}

      {currentStep === 2 && (
        <div className="w-full mt-8">
          <IncomeAssets
            data={incomeAssets}
            errors={errors}
            onChange={setIncomeAssets}
          />
        </div>
      )}

      {currentStep === 3 && (
        <div className="w-full mt-8">
          <ExpenseLiabilities
            data={expenseLiabilities}
            errors={errors}
            onChange={setExpenseLiabilities}
          />
        </div>
      )}

      {currentStep === 4 && (
        <div className="w-full mt-8">
          <NeedsObjective
            data={needsObjectives}
            errors={errors}
            onChange={setNeedsObjectives}
          />
        </div>
      )}

      {currentStep === 5 && (
        <div className="w-full mt-8">
          <Documents data={documents} errors={errors} onChange={setDocuments} />
        </div>
      )}

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 border border-gray-200 text-text-dark font-semibold px-5 py-3 rounded-xl transition-colors ${
            currentStep === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />{" "}
          {currentStep === 1 ? "Cancel" : "Previous"}
        </button>
        <div className="flex items-center gap-3">
          <button className="border border-primary text-primary font-semibold px-5 py-3 rounded-xl hover:bg-primary/5 transition-colors">
            Save as Draft
          </button>

          {currentStep < 5 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-[#596df2] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#4b5cdc] transition-colors"
            >
              {getNextText()} <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-[#596df2] text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#4b5cdc] transition-colors"
            >
              Create Scenario <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
