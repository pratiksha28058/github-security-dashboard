import React, { useEffect, useState } from "react";
import { fetchSecurityAlerts } from "./api";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchSecurityAlerts().then(setAlerts);
  }, []);

  const chartData = alerts.map((alert, index) => ({
    id: index + 1,
    severity: alert.rule.security_severity_level,
  }));

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Security Alerts for Employee</h2>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="severity" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default Dashboard;