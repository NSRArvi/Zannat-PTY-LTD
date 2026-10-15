"use client";
import { useState, useMemo } from "react";
import PageHeader from "../../../shared/PageHeader";
import Pagination from "../../../shared/Pagination";
import LendersFilters from "./LendersFilters";
import LendersTable from "./LendersTable";

const initialLenders = [
  {
    id: 1,
    name: "ANZ Bank",
    logoText: "ANZ",
    logoBg: "bg-[#004165]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 2,
    name: "NAB",
    logoText: "N",
    logoBg: "bg-black",
    productCount: "8 Products",
    status: "Inactive",
    detailsUrl: "#",
  },
  {
    id: 3,
    name: "ANZ Bank",
    logoText: "W",
    logoBg: "bg-white border border-gray-200",
    logoTextColor: "text-[#da1710]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 4,
    name: "ANZ Bank",
    logoText: "ANZ",
    logoBg: "bg-[#004165]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 5,
    name: "ANZ Bank",
    logoText: "W",
    logoBg: "bg-white border border-gray-200",
    logoTextColor: "text-[#da1710]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 6,
    name: "NAB",
    logoText: "N",
    logoBg: "bg-black",
    productCount: "8 Products",
    status: "Inactive",
    detailsUrl: "#",
  },
  {
    id: 7,
    name: "ANZ Bank",
    logoText: "ANZ",
    logoBg: "bg-[#004165]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 8,
    name: "ANZ Bank",
    logoText: "W",
    logoBg: "bg-white border border-gray-200",
    logoTextColor: "text-[#da1710]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 9,
    name: "ANZ Bank",
    logoText: "ANZ",
    logoBg: "bg-[#004165]",
    productCount: "8 Products",
    status: "Active",
    detailsUrl: "#",
  },
  {
    id: 10,
    name: "NAB",
    logoText: "N",
    logoBg: "bg-black",
    productCount: "8 Products",
    status: "Inactive",
    detailsUrl: "#",
  },
];

export default function LendersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [product, setProduct] = useState("All Product");

  const handleClearFilters = () => {
    setSearch("");
    setStatus("All Status");
    setProduct("All Product");
  };

  const filteredLenders = useMemo(() => {
    return initialLenders.filter((lender) => {
      const matchesSearch =
        lender.name.toLowerCase().includes(search.toLowerCase()) ||
        lender.productCount.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All Status" || lender.status.toLowerCase() === status.toLowerCase();

      const matchesProduct =
        product === "All Product" || lender.productCount.toLowerCase() === product.toLowerCase();

      return matchesSearch && matchesStatus && matchesProduct;
    });
  }, [search, status, product]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader
          title={"Lenders"}
          subtitle={"Browse and manage all partner lenders and product offerings."}
        />
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-sm">
        {/* Filters */}
        <LendersFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          product={product}
          setProduct={setProduct}
          onClearFilters={handleClearFilters}
        />

        {/* Lenders Table */}
        <LendersTable lenders={filteredLenders} />

        {/* Pagination */}
        <Pagination text="Showing 1 to 10 of 248 scenarios" />
      </div>
    </section>
  );
}

