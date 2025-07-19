import React from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import { FaFileDownload } from "react-icons/fa";

const patient = {
  id: "P123456",
  name: "Nilesh Kumar",
  age: 45,
  gender: "Male",
  dob: "1979-03-25",
  contact: "+91-9876543210",
  address: "Rampur , near govt school , M.P.",
  bloodGroup: "B+",
  allergies: "Penicillin",
  chronicConditions: "Diabetes, Hypertension",
  medications: "Metformin, Amlodipine",
  pastSurgeries: "Appendectomy (2010)",
  emergencyContact: "+91-9876543211",
  doctor: "Dr. R. Sharma",
  admissionDate: "2025-07-18",
  wardRoom: "Ward 5 / Room 102",
  diagnosis: "Type 2 Diabetes with foot infection",
  treatmentPlan: "IV antibiotics, sugar control, surgery",
  insuranceProvider: "Star Health Insurance",
  policyNumber: "SHI-456789",
};

const PatientDetailsTextPDF = () => {
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Patient Details", 14, 20);

    doc.setFontSize(12);
    let y = 30;

    Object.entries(patient).forEach(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
      const line = `${label}: ${value}`;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      doc.text(line, 14, y);
      y += 10;
    });

    doc.save("patient_details_text.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Patient Details
      </h1>

      <motion.div
        className="bg-white rounded-xl shadow-lg w-full overflow-x-auto p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full border border-gray-300 text-sm">
          <tbody>
            {Object.entries(patient).map(([key, value], idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-300 ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-3 font-semibold text-gray-700 capitalize w-1/4 border-r">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </td>
                <td className="p-3 text-gray-900">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={downloadPdf}
        className="mt-8 mx-auto  px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition cursor-pointer flex gap-2 items-center"
      >
        Download Report<FaFileDownload/>
      </motion.button>
    </div>
  );
};

export default PatientDetailsTextPDF;
