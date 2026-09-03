export default function PageHeader({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-text-dark text-[28px] font-bold tracking-tight mb-1 flex items-center gap-2">
        {title}
      </h1>
      <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
    </div>
  );
}
