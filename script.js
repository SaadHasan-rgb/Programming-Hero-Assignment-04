// Job data

let jobData = [
  { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full Time", salary: "$130,000-$175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "none" },
  { id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part Time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "none" },
  { id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full Time", salary: " $125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "none" },
  { id: 4, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "none" },
  { id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full Time", salary: " $110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "none" },
  { id: 6, companyName: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full Time", salary: "$130,000 - $170,00", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "none" },
  { id: 7, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full Time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "none" },
  { id: 8, companyName: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full Time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "none" }
];

// For tracking which tab is active
let currentTab = 'all';

// Grabbing DOM elements

let cardArea = document.getElementById("cardArea");
let totalJobsAll = document.getElementById("totalJobs");
let interviewJobsAll = document.getElementById("interviewJobs");
let rejectedJobsAll = document.getElementById("rejectedJobs");
let jobCountAll = document.getElementById("jobCount");

let tabAll = document.getElementById("tabAll");
let tabInterview = document.getElementById("tabInterview");
let tabRejected = document.getElementById("tabRejected");

// Returns badge text & Color

function getBadgeInfo(status) {
  if (status === "interview") {
    return { text: "Interview", color: "bg-green-200" };
  } else if (status === "rejected") {
    return { text: "Rejected", color: "bg-red-200" };
  } else {
    return { text: "Not Applied", color: "bg-slate-200" };
  }
}


