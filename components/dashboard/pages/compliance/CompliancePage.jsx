"use client";
import { useState } from "react";
import PageHeader from "../../shared/PageHeader";
import ComplianceMetrics from "./ComplianceMetrics";
import BrokerCompliance from "./BrokerCompliance";
import CustomerCompliance from "./CustomerCompliance";
import ComplianceDetailsDrawer from "./ComplianceDetailsDrawer";

export default function CompliancePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCompliance, setSelectedCompliance] = useState(null);

  const handleOpenDetails = (item) => {
    setSelectedCompliance(item);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader
          title={"Compliance"}
          subtitle={"Monitor and manage broker credentials and customer compliance items."}
        />
      </div>

      {/* 1. Metrics */}
      <ComplianceMetrics />

      {/* 2. Broker Compliance */}
      <BrokerCompliance onSeeDetails={handleOpenDetails} />

      {/* 3. Customer Compliance */}
      <CustomerCompliance onSeeDetails={handleOpenDetails} />

      {/* Compliance Details Right Drawer / Modal */}
      <ComplianceDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        compliance={selectedCompliance}
      />
    </section>
  );
}

