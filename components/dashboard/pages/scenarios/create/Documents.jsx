import { UploadCloud } from "lucide-react";

const FileUploadArea = ({ label, required, error, file, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-text-dark">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div
        className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 transition-colors bg-[#f8f9fa] ${
          error ? "border-red-500 bg-red-50" : "border-primary/50 hover:bg-primary/5"
        }`}
      >
        <UploadCloud className="w-8 h-8 text-primary mb-3" />
        <p className="text-sm text-text-dark font-medium mb-3">
          Drag and drop files here
        </p>
        <label className="border border-primary text-primary px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-primary/5 transition-colors">
          Browse File
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                onChange(e.target.files[0]);
              }
            }}
          />
        </label>
        {file && (
          <p className="mt-4 text-sm text-green-600 font-medium text-center truncate max-w-full px-4">
            {file.name}
          </p>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default function Documents({ data, errors = {}, onChange }) {
  const set = (field) => (file) => onChange({ ...data, [field]: file });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-text-dark mb-6">Documents</h3>
        
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <FileUploadArea
              label="Driver License(Front)"
              required
              error={errors.driverLicenseFront}
              file={data.driverLicenseFront}
              onChange={set("driverLicenseFront")}
            />
            <FileUploadArea
              label="Driver License(Rear)"
              required
              error={errors.driverLicenseRear}
              file={data.driverLicenseRear}
              onChange={set("driverLicenseRear")}
            />
            <FileUploadArea
              label="Medicare/Passport"
              required
              error={errors.medicarePassport}
              file={data.medicarePassport}
              onChange={set("medicarePassport")}
            />
            <FileUploadArea
              label="Last Payslip"
              required
              error={errors.lastPayslip}
              file={data.lastPayslip}
              onChange={set("lastPayslip")}
            />
            <FileUploadArea
              label="Second Last Payslip"
              required
              error={errors.secondLastPayslip}
              file={data.secondLastPayslip}
              onChange={set("secondLastPayslip")}
            />
          </div>

          <p className="text-gray-400 text-sm font-medium mt-8">
            Max file size: 10MB per file.
          </p>
        </div>
      </div>
    </div>
  );
}
