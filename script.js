// Job data

let jobData = [
  { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full Time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "none" },
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

// Job card & Actions

function createJobCard(job) {
  let badge = getBadgeInfo(job.status);

  let wrapper = document.createElement("div");
  wrapper.className =
    "relative bg-white rounded-xl p-5 flex flex-col md:flex-row md:justify-between gap-4";

  wrapper.innerHTML = `
    <button class="btn btn-circle btn-sm absolute top-4 right-4"
      onclick="removeJob(${job.id})">
      <i class="fa-regular fa-trash-can"></i>
    </button>

    <div>
      <h3 class="font-bold text-lg">${job.companyName}</h3>
      <p class="text-sm text-gray-500">${job.position}</p>
      <p class="text-sm text-gray-500 my-1">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <span class="inline-block text-xs px-3 py-1 rounded-full ${badge.color} mt-2">
        ${badge.text}
      </span>

      <p class="text-sm mt-3">${job.description}</p>

      <div class="flex flex-wrap gap-2 mt-4">
        <button class="btn btn-outline btn-success btn-sm w-28"
          onclick="changeStatus(${job.id}, 'interview')">
          Interview
        </button>

        <button class="btn btn-outline btn-error btn-sm w-28"
          onclick="changeStatus(${job.id}, 'rejected')">
          Rejected
        </button>
      </div>
    </div>
  `;

  return wrapper;
}

// Counts interview and rejected jobs and updating dashboard

function updateCounts() {

  let interviewCount = 0;
  let rejectedCount = 0;


  for (let job of jobData) {
    if (job.status === "interview") {
      interviewCount++;
    } else if (job.status === "rejected") {
      rejectedCount++;
    }
  }

  totalJobsAll.innerText = jobData.length;
  interviewJobsAll.innerText = interviewCount;
  rejectedJobsAll.innerText = rejectedCount;

  // Updating right side text based on active tab

  if (currentTab === "all") {
    jobCountAll.innerText = jobData.length + " jobs";
  } else if (currentTab === "interview") {
    jobCountAll.innerText =
      interviewCount + " of " + jobData.length;
  } else {
    jobCountAll.innerText =
      rejectedCount + " of " + jobData.length;
  }
}



// Rendering jobs on screen

function showJobs() {

  cardArea.innerHTML = "";

  let filtered = [];

  // Filtering based on active tab
  if (currentTab === "all") {
    filtered = jobData;
  } else {
    for (let job of jobData) {
      if (job.status === currentTab) {
        filtered.push(job);
      }
    }
  }

  //Empty State

  if (filtered.length === 0) {
    cardArea.innerHTML = `
      <div class="bg-white p-12 rounded-xl text-center">
        <i class="fa-regular fa-folder-open text-4xl mb-3"></i>
        <h3 class="font-semibold">No jobs available</h3>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities.</p>
      </div>
    `;
  } else {

    //Rendering each job card

    for (let job of filtered) {
      let card = createJobCard(job);
      cardArea.appendChild(card);
    }
  }

  updateCounts();
}



// Changing Status

function changeStatus(id, newStatus) {

  for (let job of jobData) {
    if (job.id === id) {
      job.status = newStatus;
      break;
    }
  }

  showJobs();
}

// Removes job from array

function removeJob(id) {

  let newArray = [];

  for (let job of jobData) {
    if (job.id !== id) {
      newArray.push(job);
    }
  }

  jobData = newArray;
  showJobs();
}

// Tab Switching

function setActiveTab(activeBtn) {
  tabAll.classList.remove("btn-primary");
  tabInterview.classList.remove("btn-primary");
  tabRejected.classList.remove("btn-primary");

  activeBtn.classList.add("btn-primary");
}

// All tab

tabAll.onclick = function () {
  currentTab = "all";
  setActiveTab(tabAll);
  showJobs();
};

// Interview tab

tabInterview.onclick = function () {
  currentTab = "interview";
  setActiveTab(tabInterview);
  showJobs();
};

// Rejected tab

tabRejected.onclick = function () {
  currentTab = "rejected";
  setActiveTab(tabRejected);
  showJobs();
};

// Initial Render
showJobs();
