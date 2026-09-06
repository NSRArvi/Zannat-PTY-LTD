import { Plus } from "lucide-react";
import Link from "next/link";

export default function CustomLink({ href, title }) {
  return (
    <Link
      href={href}
      className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-gradient-start to-secondary hover:from-secondary hover:to-gradient-end text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm"
    >
      <Plus className="w-5 h-5" />
      {title}
    </Link>
  );
}
