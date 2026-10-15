import FormField, { inputClass } from "./FormField";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

export default function PersonalDetails({ data, errors = {}, onChange }) {
  const set = (field) => (e) => onChange({ ...data, [field]: e.target.value });

  return (
    <div className="space-y-6">
      {/* Loan Details */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">Loan Details</h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormField label="Loan Amount Looking to Borrow (AUD)" required error={errors.loanAmount}>
              <input
                className={`${inputClass} ${errors.loanAmount ? "border-red-500" : ""}`}
                value={data.loanAmount}
                onChange={set("loanAmount")}
                placeholder="$ 650,000"
              />
            </FormField>
            <FormField label="Type of Home Loan" required error={errors.loanType}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.loanType ? "border-red-500" : ""}`}
                  value={data.loanType}
                  onChange={set("loanType")}
                >
                  <option value="" disabled>Select</option>
                  <option>Owner Occupier</option>
                  <option>Investment</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
            <FormField label="Citizenship Status in Australia" required error={errors.citizenshipStatus}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.citizenshipStatus ? "border-red-500" : ""}`}
                  value={data.citizenshipStatus}
                  onChange={set("citizenshipStatus")}
                >
                  <option value="" disabled>Select</option>
                  <option>Citizen</option>
                  <option>Permanent Resident</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
            <FormField label="Who is Applying?" required error={errors.applyingAs}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.applyingAs ? "border-red-500" : ""}`}
                  value={data.applyingAs}
                  onChange={set("applyingAs")}
                >
                  <option value="" disabled>Select</option>
                  <option>Customer for himself</option>
                  <option>Joint Application</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Personal Information
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormField label="Full Name" required error={errors.fullName}>
              <input
                className={`${inputClass} ${errors.fullName ? "border-red-500" : ""}`}
                value={data.fullName}
                onChange={set("fullName")}
                placeholder="Sarah Jhonson"
              />
            </FormField>
            <FormField label="Email Address" required error={errors.email}>
              <input
                type="email"
                className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                value={data.email}
                onChange={set("email")}
                placeholder="Sarah.johnson@gmail.com"
              />
            </FormField>
            <FormField label="Phone Number" required error={errors.phone}>
              <div className={`flex items-center gap-2 bg-white border ${errors.phone ? "border-red-500" : "border-gray-200"} rounded-xl px-3`}>
                <span className="text-lg">🇦🇺</span>
                <input
                  className="w-full py-3 outline-none text-text-dark placeholder:text-text-primary"
                  value={data.phone}
                  onChange={set("phone")}
                  placeholder="+61 412 345 678"
                />
              </div>
            </FormField>
            <FormField label="Date of Birth" required error={errors.dob}>
              <div className="relative">
                <input
                  className={`${inputClass} ${errors.dob ? "border-red-500" : ""}`}
                  value={data.dob}
                  onChange={set("dob")}
                  placeholder="12/12/2000"
                />
                <Calendar className="w-4 h-4 text-text-primary absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
        </div>
      </div>

      {/* Current Address */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Current Address
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <FormField label="Search & Select Your Current Address" required error={errors.currentAddress}>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-text-primary absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    className={`${inputClass} pl-10 ${errors.currentAddress ? "border-red-500" : ""}`}
                    value={data.currentAddress}
                    onChange={set("currentAddress")}
                    placeholder="Sydnee, NSW Australia"
                  />
                </div>
              </FormField>
            </div>
            <FormField label="Status of Current Address" required error={errors.currentAddressStatus}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.currentAddressStatus ? "border-red-500" : ""}`}
                  value={data.currentAddressStatus}
                  onChange={set("currentAddressStatus")}
                >
                  <option value="" disabled>Select</option>
                  <option>Renting</option>
                  <option>Own</option>
                  <option>Living with Parents</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FormField label="Agency / Landlord Name" required error={errors.currentLandlord}>
              <input
                className={`${inputClass} ${errors.currentLandlord ? "border-red-500" : ""}`}
                value={data.currentLandlord}
                onChange={set("currentLandlord")}
                placeholder="Michel Beck"
              />
            </FormField>
            <FormField label="Monthly Rent" required error={errors.currentRent}>
              <input
                className={`${inputClass} ${errors.currentRent ? "border-red-500" : ""}`}
                value={data.currentRent}
                onChange={set("currentRent")}
                placeholder="$ 1200"
              />
            </FormField>
            <FormField label="Starting Date of Living on Current Address" required error={errors.currentLivingDate}>
              <div className="relative">
                <input
                  className={`${inputClass} ${errors.currentLivingDate ? "border-red-500" : ""}`}
                  value={data.currentLivingDate}
                  onChange={set("currentLivingDate")}
                  placeholder="12/10/2025"
                />
                <Calendar className="w-4 h-4 text-text-primary absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
        </div>
      </div>

      {/* Previous Address */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Previous Address
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <FormField label="Search & Select Your Previous Address" required error={errors.previousAddress}>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-text-primary absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    className={`${inputClass} pl-10 ${errors.previousAddress ? "border-red-500" : ""}`}
                    value={data.previousAddress}
                    onChange={set("previousAddress")}
                    placeholder="Sydnee, NSW Australia"
                  />
                </div>
              </FormField>
            </div>
            <FormField label="Status of Previous Address" required error={errors.previousAddressStatus}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.previousAddressStatus ? "border-red-500" : ""}`}
                  value={data.previousAddressStatus}
                  onChange={set("previousAddressStatus")}
                >
                  <option value="" disabled>Select</option>
                  <option>Renting</option>
                  <option>Own</option>
                  <option>Living with Parents</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FormField label="Agency / Landlord Name" required error={errors.previousLandlord}>
              <input
                className={`${inputClass} ${errors.previousLandlord ? "border-red-500" : ""}`}
                value={data.previousLandlord}
                onChange={set("previousLandlord")}
                placeholder="Michel Beck"
              />
            </FormField>
            <FormField label="Monthly Rent" required error={errors.previousRent}>
              <input
                className={`${inputClass} ${errors.previousRent ? "border-red-500" : ""}`}
                value={data.previousRent}
                onChange={set("previousRent")}
                placeholder="$ 1200"
              />
            </FormField>
            <FormField label="Starting Date of Living on Previous Address" required error={errors.previousLivingDate}>
              <div className="relative">
                <input
                  className={`${inputClass} ${errors.previousLivingDate ? "border-red-500" : ""}`}
                  value={data.previousLivingDate}
                  onChange={set("previousLivingDate")}
                  placeholder="12/10/2025"
                />
                <Calendar className="w-4 h-4 text-text-primary absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
        </div>
      </div>

      {/* Marital Status */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Marital Status
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FormField label="Select Your Marital Status" required error={errors.maritalStatus}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.maritalStatus ? "border-red-500" : ""}`}
                  value={data.maritalStatus}
                  onChange={set("maritalStatus")}
                >
                  <option value="" disabled>Select</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
            <FormField label="How Many Dependents" required error={errors.dependents}>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 ${errors.dependents ? "border-red-500" : ""}`}
                  value={data.dependents}
                  onChange={set("dependents")}
                >
                  <option value="" disabled>Select</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </FormField>
          </div>
        </div>
      </div>

      {/* Provide Accountant Details */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-text-dark mb-4">
          Provide Accountant Details
        </h3>
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FormField label="Full Name of Accountant">
              <input
                className={inputClass}
                value={data.accountantName}
                onChange={set("accountantName")}
                placeholder="Jhon Cooper"
              />
            </FormField>
            <FormField label="Contact Number">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3">
                <span className="text-lg">🇦🇺</span>
                <input
                  className="w-full py-3 outline-none text-text-dark placeholder:text-text-primary"
                  value={data.accountantPhone}
                  onChange={set("accountantPhone")}
                  placeholder="+61 412 345 678"
                />
              </div>
            </FormField>
            <FormField label="Email Address">
              <input
                type="email"
                className={inputClass}
                value={data.accountantEmail}
                onChange={set("accountantEmail")}
                placeholder="john.cooper@gmail.com"
              />
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
