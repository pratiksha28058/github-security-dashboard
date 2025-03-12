import axios from "axios";

const GITHUB_ORG = "pratiksha28058"; // Example: 'mycompany'
const GITHUB_REPO = "Employee"; // Existing repo you want to monitor
const GITHUB_TOKEN = "${REACT_GITHUB_TOKEN}"; // Use GitHub Personal Access Token

export const fetchSecurityAlerts = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${GITHUB_ORG}/${GITHUB_REPO}/code-scanning/alerts`,
      {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching security alerts:", error);
    return [];
  }
};