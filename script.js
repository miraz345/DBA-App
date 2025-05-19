// Sample Data (Replace with Firebase in real app)
const routines = [
  { day: "Monday", time: "9:00 AM", course: "Marketing 101", room: "Room 302" },
  { day: "Tuesday", time: "11:00 AM", course: "Finance", room: "Room 105" }
];

const exams = [
  { subject: "Marketing", date: "2023-11-20", time: "9:00 AM", room: "Hall A" },
  { subject: "Finance", date: "2023-11-22", time: "11:00 AM", room: "Hall B" }
];

const notices = [
  { title: "Midterm Exam Schedule", date: "2023-10-15" },
  { title: "Guest Lecture on Business Ethics", date: "2023-10-20" }
];

const pdfFiles = [
  { name: "Marketing Lecture 1", url: "assets/lecture1.pdf" },
  { name: "Finance Lecture 1", url: "assets/lecture2.pdf" }
];

// DOM Elements
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginModal = document.getElementById("login-modal");
const closeBtn = document.querySelector(".close");
const submitLogin = document.getElementById("submit-login");

// Show/Hide Modal
loginBtn.addEventListener("click", () => loginModal.style.display = "flex");
closeBtn.addEventListener("click", () => loginModal.style.display = "none");

// Login Logic (Simple LocalStorage Auth)
submitLogin.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    loginModal.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    alert("Please enter email and password!");
  }
});

// Logout Logic
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  loginBtn.style.display = "block";
  logoutBtn.style.display = "none";
});

// Check if user is logged in
if (localStorage.getItem("loggedIn")) {
  loginBtn.style.display = "none";
  logoutBtn.style.display = "block";
}

// Load Data into Tables
function loadRoutines() {
  const tbody = document.querySelector("#routine-table tbody");
  tbody.innerHTML = routines.map(routine => `
    <tr>
      <td>${routine.day}</td>
      <td>${routine.time}</td>
      <td>${routine.course}</td>
      <td>${routine.room}</td>
    </tr>
  `).join("");
}

function loadExams() {
  const tbody = document.querySelector("#exam-table tbody");
  tbody.innerHTML = exams.map(exam => `
    <tr>
      <td>${exam.subject}</td>
      <td>${exam.date}</td>
      <td>${exam.time}</td>
      <td>${exam.room}</td>
    </tr>
  `).join("");
}

function loadNotices() {
  const noticeList = document.getElementById("notice-list");
  noticeList.innerHTML = notices.map(notice => `
    <div class="notice">
      <h3>${notice.title}</h3>
      <p>${notice.date}</p>
    </div>
  `).join("");
}

function loadPDFs() {
  const pdfList = document.getElementById("pdf-list");
  pdfList.innerHTML = pdfFiles.map(pdf => `
    <div class="pdf-item">
      <a href="${pdf.url}" download>${pdf.name}</a>
    </div>
  `).join("");
}

// Tab Navigation
function showTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(`${tabName}-tab`).style.display = "block";
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadRoutines();
  loadExams();
  loadNotices();
  loadPDFs();
});