import React, { useState } from "react";
import {
  authAPI,
  companiesAPI,
  talentsAPI,
  shortlistAPI,
  testsAPI,
  contactAPI,
  adminAPI,
  applicationsAPI,
  notificationsAPI,
} from "@/services/endpoints";

interface EndpointStatus {
  name: string;
  success: boolean | null;
  message: string;
}

const endpointsToTest = [
  { name: "Auth: Me", fn: authAPI.me },
  { name: "Companies: List", fn: companiesAPI.list },
  { name: "Talents: List", fn: talentsAPI.list },
  { name: "Shortlist: List", fn: shortlistAPI.list },
  { name: "Tests: List", fn: testsAPI.list },
  { name: "Contact: List", fn: contactAPI.list },
  { name: "Admin: Dashboard", fn: adminAPI.dashboard },
  { name: "Applications: List", fn: applicationsAPI.list },
  { name: "Notifications: List", fn: notificationsAPI.list },
];

export default function ConnectionTester() {
  const [results, setResults] = useState<EndpointStatus[]>([]);
  const [loading, setLoading] = useState(false);

  const testAll = async () => {
    setLoading(true);
    const tempResults: EndpointStatus[] = [];

    for (const endpoint of endpointsToTest) {
      try {
        console.log(`Testing: ${endpoint.name}`);
        const response = await endpoint.fn();
        console.log(`${endpoint.name} ✅`, response.data);
        tempResults.push({
          name: endpoint.name,
          success: true,
          message: "OK",
        });
      } catch (error: any) {
        console.error(`${endpoint.name} ❌`, error);
        tempResults.push({
          name: endpoint.name,
          success: false,
          message: error.message || "Failed",
        });
      }
    }

    setResults(tempResults);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🔍 Backend Connection Tester
      </h1>
      <div className="text-center mb-6">
        <button
          onClick={testAll}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg font-semibold transition"
        >
          {loading ? "Testing..." : "Run Connection Test"}
        </button>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {results.map((r, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg ${
              r.success ? "bg-green-700/30" : "bg-red-700/30"
            }`}
          >
            <div className="flex justify-between">
              <span>{r.name}</span>
              <span>
                {r.success ? "✅ Success" : "❌ Failed"} — {r.message}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
