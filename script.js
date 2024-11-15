function openTab(tabId) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');

  // Display the selected tab content
  document.getElementById(tabId).style.display = 'block';
}

// Initialize the first tab as visible
document.addEventListener('DOMContentLoaded', () => {
  openTab('home');
});

// Function to toggle review form visibility
function toggleReviewForm() {
const formContainer = document.getElementById("reviewFormContainer");
formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
}

function submitReview() {
const studentName = document.getElementById("studentName").value;
const courseName = document.getElementById("courseName").value;
const professorName = document.getElementById("professorName").value;
const rating = document.getElementById("rating").value;
const comments = document.getElementById("comments").value;

// Create a new review card
const reviewCard = document.createElement("div");
reviewCard.className = "review-card";

reviewCard.innerHTML = `
    <div class="review-header">
        <h3>${studentName}</h3>
        <p>${courseName} - ${professorName}</p>
        <div class="rating-stars">
    ${"&#9733;".repeat(review.rating)}${"&#9734;".repeat(5 - review.rating)}
</div>

    </div>
    <p>${comments}</p>
`;

document.getElementById("reviewsContainer").appendChild(reviewCard);

// Reset form fields
document.getElementById("reviewForm").reset();

// Hide the form after submission
toggleReviewForm();
}

function cancelForm() {
// Reset the form fields
document.getElementById("reviewForm").reset();
// Set edit mode to false in case the form was being edited
isEditMode = false;
currentReviewId = null;
// Restore the submit button text to "Submit Review"
document.getElementById("submitButton").textContent = "Submit Review";
// Hide the form
toggleReviewForm();
}



const departmentData = {
"AIBA": {
    "Adv Stat Modeling": ["A. Bhattacherjee"],
    "Adv Systems Analysis/Design": ["A. Musmar (P)"],
    "Advanced Database Management": ["C. Daniel (P)", "H. Hyman (P)"],
    "Advanced Systems Analysis & Design": ["M. Green (P)"],
    "App Dev for Analytics": ["C. Daniel (P)", "M. Agrawal (P)"],
    "Big Data for Business": ["T. Smith (P)", "K. Dutta (P)", "T. Smith (P)"],
    "Bus Analytics & Info Sys Int": ["A. Bhattacherjee"],
    "Business Analytics": ["W. Jank (P)"],
    "Data Mining": ["K. Garimella (P)","A. Ray (P)", "T. Smith (P)"],
    "Data Science Programming": ["V. Kayhan (P)", "T. Smith (P)", "T. Ma (P)"],
    "Data Visualization": ["J. Reichgelt (P)"],
    "Data Warehousing": ["D. Berndt (P)"],
    "Deep Learning for Business Anl": ["T. Ma"],
    "Independent Study": ["A. Bhattacherjee", "K. Garimella (P)", "T. Stablein (P)"],
    "Machine Learning": ["T. Smith (P)", "M. Ebrahimi (P)"],
    "Management Information Systems": ["D. Yin (P)"],
    "Project Management": ["T. Stablein (P)", "W. McNair (P)"],
    "Text Analytics": ["A. Bhattacherjee"]
},
"CIS": {
    "Information Technology Systems Security": ["H. Yi (P)"],
    "Principles of Information Security": ["J. Scott (P)", "S. Walczak"],
    "Architecting Operating System Security": ["D. Morgan (P)", "P. Mooney (P)"],
    "Cloud Computing for IT": ["S. Fang (P)"],
    "System Integration & Architecture for IT": ["P. Ventura (P)"],
    "Advanced OOP in C++": ["H. Jeanty (P)"],
    "Hardware Accelerators for ML": ["D. Alfenas Reis (P)"],
    "Comp Methods for Imaging": ["O. Murray-Bruce (P)"],
    "Smart & Connected Health": ["J. Templeton (P)"],
    "Wireless and Mobile Computing": ["Y. Ren (P)"],
    "Res Opportunities in AgeTech": ["Y. Ren (P)", "Y. Sun (P)"],
    "Senior Project in Information Technology": ["S. Fang (P)"],
    "Foundations of Cybersecurity": ["W. Gauvin Jr (P)"],
    "Penetration Testing for IT": ["M. Pazos Revilla (P)"],
    "Human Aspects of Cybersecurity": ["Y. Ren (P)"],
    "Big Data Storage & Analysis with Hadoop": ["Y. Zhang (P)"],
    "Independent Study": ["S. Katkoori (P)", "M. Andujar (P)", "A. Yavuz (P)", "A. Mali (P)"],
    "Seminar in AI": ["L. Hall (P)"],
    "Practical Hardware Security": ["R. Karam (P)"],
    "CMOS-VLSI Design": ["S. Katkoori (P)"],
    "Cryptography Theory & Practice": ["A. Yavuz (P)"],
    "Augmented Reality": ["Z. Han (P)"],
    "CREST CybSec Research Seminar": ["S. Katkoori (P)"],
    "CSE TA Training": ["S. Small (P)"]
},
"MECH": {
    "Computer Aided Design & Engineering": ["N. Baksh (P)"],
    "Programming Concepts for Mechanical Engineers": ["B. Freidkes (P)", "M. Goni Rodrigo (P)"],
    "Computational Methods": ["B. Freidkes (P)"],
    "Kinematics and Dynamics of Machinery": ["C. Lusk (P)"],
    "Mechanical Engineering Laboratory I": ["M. Goni Rodrigo (P)"],
    "Mechanics of Solids": ["N. Gallant (P)"],
    "Fluid Systems": ["W. Mao (P)"],
    "Thermal Systems & Economics": ["F. Pyrtle (P)"],
    "Heat Transfer": ["F. Pyrtle (P)"],
    "Vibrations": ["D. Hess (P)"],
    "Introduction to Composite Materials": ["A. Kaw (P)"],
    "Compliant Mechanisms": ["C. Lusk (P)"],
    "Mechanical Engineering Laboratory II": ["A. Sargolzaei (P)"],
    "Mechanical Controls": ["K. Reed (P)", "T. Yucelen (P)"],
    "Mechanical Manufacturing Processes": ["S. Wilkinson (P)"],
    "Machine Design": ["N. Baksh (P)"],
    "Sustainable Design & Materials": ["N. Diaz Elsayed (P)"],
    "Applied Finite Element Analysis": ["A. Mujumdar (P)"],
    "Capstone I - Ethics": ["N. Baksh (P)", "S. Carey (P)"],
    "Capstone II - Design": ["S. Wilkinson (P)"]
}
};


function updateCourseOptions() {
const department = document.getElementById("department").value;
const courseSelect = document.getElementById("courseName");
courseSelect.innerHTML = '<option value="">Select Course</option>';  // Reset courses dropdown
document.getElementById("professorName").innerHTML = '<option value="">Select Professor</option>'; // Reset professors dropdown

if (department && departmentData[department]) {
    // Populate courses based on selected department
    for (let course in departmentData[department]) {
        const option = document.createElement("option");
        option.value = course;
        option.textContent = course;
        courseSelect.appendChild(option);
    }
}
}

function updateProfessorOptions() {
const department = document.getElementById("department").value;
const course = document.getElementById("courseName").value;
const professorSelect = document.getElementById("professorName");
professorSelect.innerHTML = '<option value="">Select Professor</option>'; // Reset professors dropdown

if (department && course && departmentData[department][course]) {
    // Populate professors based on selected course
    departmentData[department][course].forEach(professor => {
        const option = document.createElement("option");
        option.value = professor;
        option.textContent = professor;
        professorSelect.appendChild(option);
    });
}
}
// Global variable to store the ID of the review being edited
let isEditMode = false;
let currentReviewId = null;

// Function to submit a new review or save changes to an edited review
function submitReview() {
  if (isEditMode) {
      // If in edit mode, save changes instead of creating a new review
      saveChanges(currentReviewId);
      return;
  }

  const studentName = document.getElementById("studentName").value;
  const courseName = document.getElementById("courseName").value;
  const professorName = document.getElementById("professorName").value;
  const rating = document.getElementById("rating").value;
  const difficultyLevel = document.getElementById("difficultyLevel").value;
  const comments = document.getElementById("comments").value;
  const skillsInput = document.getElementById("skills").value;

  const skills = skillsInput.split(/\n|,/).map(skill => skill.trim()).filter(skill => skill);
  const reviewId = Date.now(); // Unique ID for each review

  const review = {
      id: reviewId,
      studentName,
      courseName,
      professorName,
      rating,
      difficultyLevel,
      comments,
      skills
  };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReview(review);

  document.getElementById("reviewForm").reset();
  toggleReviewForm();
}

// Function to display a review on the page
function displayReview(review) {
  const reviewCard = document.createElement("div");
  reviewCard.className = "review-card";
  reviewCard.dataset.id = review.id; // Unique ID for each review card

  reviewCard.innerHTML = `
      <div class="review-header">
          <div class="review-name">${review.studentName}</div>
        <div class="rating-stars">${"&#9733;".repeat(review.rating)}${"&#9734;".repeat(5 - review.rating)}</div>
      </div>
      <div class="review-course">${review.courseName}</div>
      <div class="review-professor">${review.professorName}</div>
      <div class="review-comment"><em>${review.comments}</em></div>
      <ul class="review-skills">
          <li>Difficulty Level: ${review.difficultyLevel}</li>
      </ul>
      <ul class="review-skills">
          <strong>Skills:</strong>
          ${review.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
      <button onclick="editReview(${review.id})">Edit</button>
      <button onclick="deleteReview(${review.id})">Delete</button>
  `;

  document.getElementById("reviewsContainer").appendChild(reviewCard);
}

// Function to load all reviews from Local Storage when the page loads
function loadReviews() {
  // Array of hardcoded reviews
  const hardcodedReviews = [
    {
      id: 1,
      studentName: "Enola",
      courseName: "Machine Learning",
      professorName: "T. Smith (P)",
      rating: 4,
      difficultyLevel: 5,
      comments: "Interactive lectures. Assignments cover all the technology skilling.",
      skills: ["Python", "Machine learning", "NumPy", "Pandas"]
    },
    {
      id: 2,
      studentName: "Alex",
      courseName: "Data Mining",
      professorName: "K. Garimella (P)",
      rating: 5,
      difficultyLevel: 4,
      comments: "Thoroughly engaging with real-world case studies.",
      skills: ["SQL", "Data Analysis", "Machine Learning"]
    },
    {
      id: 3,
      studentName: "Maria",
      courseName: "Advanced Database Management",
      professorName: "H. Hyman (P)",
      rating: 3,
      difficultyLevel: 5,
      comments: "Challenging content but rewarding.",
      skills: ["Database Management", "SQL", "Oracle"]
    },
    {
      id: 4,
      studentName: "John",
      courseName: "Deep Learning for Business Analytics",
      professorName: "T. Ma",
      rating: 4,
      difficultyLevel: 4,
      comments: "Practical applications make learning easy.",
      skills: ["Python", "TensorFlow", "Data Processing"]
    },
    {
      id: 5,
      studentName: "Sophia",
      courseName: "Project Management",
      professorName: "W. McNair (P)",
      rating: 3,
      difficultyLevel: 3,
      comments: "Good for learning PM fundamentals, a bit theoretical.",
      skills: ["Project Management", "Team Collaboration", "Communication"]
    }
  ];

  // Display each hardcoded review
  hardcodedReviews.forEach(displayReview);

  // Load any additional reviews from Local Storage
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach(displayReview);
}


// Function to delete a review
function deleteReview(reviewId) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews = reviews.filter(review => review.id !== reviewId); // Remove the review by ID
  localStorage.setItem("reviews", JSON.stringify(reviews)); // Update Local Storage

  const reviewCard = document.querySelector(`.review-card[data-id='${reviewId}']`);
  if (reviewCard) reviewCard.remove();
}

// Function to edit a review
function editReview(reviewId) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const review = reviews.find(review => review.id === reviewId);

  // Populate form with review data
  document.getElementById("studentName").value = review.studentName;
  document.getElementById("courseName").value = review.courseName;
  document.getElementById("professorName").value = review.professorName;
  document.getElementById("rating").value = review.rating;
  document.getElementById("difficultyLevel").value = review.difficultyLevel;
  document.getElementById("comments").value = review.comments;
  document.getElementById("skills").value = review.skills.join(', ');

  toggleReviewForm();

  // Set edit mode and store the ID of the review being edited
  isEditMode = true;
  currentReviewId = reviewId;

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Save Changes";
}

// Function to save changes to the edited review
function saveChanges(reviewId) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const index = reviews.findIndex(review => review.id === reviewId);

  // Update review data with form values
  reviews[index].studentName = document.getElementById("studentName").value;
  reviews[index].courseName = document.getElementById("courseName").value;
  reviews[index].professorName = document.getElementById("professorName").value;
  reviews[index].rating = document.getElementById("rating").value;
  reviews[index].difficultyLevel = document.getElementById("difficultyLevel").value;
  reviews[index].comments = document.getElementById("comments").value;
  reviews[index].skills = document.getElementById("skills").value.split(/\n|,/).map(skill => skill.trim()).filter(skill => skill);

  localStorage.setItem("reviews", JSON.stringify(reviews)); // Save updated reviews to Local Storage

  // Clear and reload reviews to reflect changes
  document.getElementById("reviewsContainer").innerHTML = "";
  loadReviews();

  // Reset form and edit mode
  document.getElementById("reviewForm").reset();
  isEditMode = false;
  currentReviewId = null;
  document.getElementById("submitButton").textContent = "Submit Review";
  toggleReviewForm();
}

// Load reviews when the page loads
document.addEventListener("DOMContentLoaded", loadReviews);


//////////////////////////////////////////////////////

// Average Rating by Course (Bar Chart)
const avgRatingData = {
  labels: ["App Dev for Analytics","Machine Learning", "Data Mining", "ADBMS", "Deep Learning", "Project Management"],
  datasets: [{
      label: "Average Rating",
      data: [4.9, 4.5, 4.7, 3.8, 4.2, 3.6],
      //backgroundColor: "#4caf50"
      backgroundColor: "#80B0A6", // Set bar color
            borderColor: "#80B0A6", // Set border color to match
            borderWidth: 1 // Optional: Adjust border width
  }]
};

new Chart(document.getElementById("avgRatingChart"), {
  type: "bar",
  data: avgRatingData,
  options: {
      plugins: { title: { display: true, text: "Average Rating by Course" } },
      responsive: true,
      scales: { y: { beginAtZero: true, max: 5 } }
  }
});



// Difficulty Level Data by Course
const difficultyLevelData = {
  "App Dev for Analytics": [2, 4, 19, 9, 14],
  "Machine Learning": [2, 3, 10, 20, 15],
  "Data Mining": [3, 5, 12, 18, 10],
  "ADBMS": [1, 2, 7, 15, 25],
  "Deep Learning": [4, 6, 8, 10, 12],
  "Project Management": [5, 10, 8, 15, 5]
};

// Initialize Polar Area Chart
let polarChart;
function createPolarChart(data) {
  const ctx = document.getElementById("difficultyPolarChart").getContext("2d");
  polarChart = new Chart(ctx, {
      type: "polarArea",
      data: {
          labels: ["Very Easy", "Easy", "Moderate", "Hard", "Very Hard"],
          datasets: [{
              data: data,
              backgroundColor: ["#4bc0c0", "#36a2eb", "#ffcd56", "#ff6384", "#c9cbcf"]
          }]
      },
      options: {
          plugins: {
              title: { display: true, text: "Difficulty Level Distribution by Course" },
              legend: { position: "top" }
          }
      }
  });
}

// Function to Update Polar Chart Based on Selected Course
function updatePolarChart() {
  const selectedCourse = document.getElementById("courseSelect").value;
  const data = difficultyLevelData[selectedCourse];

  if (polarChart) {
      polarChart.data.datasets[0].data = data;
      polarChart.update();
  } else {
      createPolarChart(data);
  }
}

// Load initial chart for the default selected course
document.addEventListener("DOMContentLoaded", () => {
  updatePolarChart();  // Initialize with the first course's data
});


// Top Skills Gained (Horizontal Bar Chart)
const skillsData = {
  labels: ["C#", "Python", "Machine Learning", "Data Analysis", "SQL", "Project Management"],
  datasets: [
      {
          label: "Frequency of Skills Gained",
          data: [80, 50, 35, 45, 30, 20],
          backgroundColor: "#DBE442", // Set bar color to #006484
          borderColor: "#DBE442", // Set border color to match
          borderWidth: 1 // Optional: Adjust border width if desired
      }
  ]
};

new Chart(document.getElementById("skillsBarChart"), {
  type: "bar",
  backgroundColor: "#DBE442", // Set bar color
  data: skillsData,
  options: {
      indexAxis: 'y',
      plugins: { title: { display: true, text: "Top Skills Gained from Courses" } },
      responsive: true,
      scales: { x: { beginAtZero: true } }
  }
});
