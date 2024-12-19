document.addEventListener('DOMContentLoaded', function(){

      let errorMessage = document.getElementById('error-message');

  // document.getElementById('navbar').style.backgroundColor = "linear-gradient(135deg, #405766, #5F7C8A, #ffffff, black)";
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.height = '100vh';
})

// Step 1: Add an event listener to the form
document.addEventListener("DOMContentLoaded", () => {
  // Get the form, input fields, and error message element
  let loginForm = document.getElementById("login-form");
  let userIDInput = document.getElementById("userID");
  let passwordInput = document.getElementById("password");
  let errorMessage = document.getElementById("error-message");

  // Predefined valid credentials (for demonstration purposes)
  let validUserCredentials = {
    userID: "HRX-45312",
    password: "WorkFlow#789",
  };

  // Step 2: Handle form submission
  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    let enteredUserID = userIDInput.value.trim();
    let enteredPassword = passwordInput.value.trim();

    // Step 3: Validate credentials
    if (
      enteredUserID === validUserCredentials.userID &&
      enteredPassword === validUserCredentials.password
    ) {
      // Successful login
      errorMessage.style.display = "none";
      alert("Login successful!");
      // Redirect to another page 
      window.location.href = "./dashboard.html";
    } else {
      // Invalid login
      errorMessage.style.display = "block";
      errorMessage.textContent = "Invalid Login Credentials. Please try again.";
    }
  });
});


// let timeOffCard = document.querySelector('.time-off')

  // Chart container inside the card 
    
      // Data: 15 present, 5 absent
      let data = [
        { label: "Present", value: 15, color: "#4CAF50" },
        { label: "Absent", value: 5, color: "#F44336" }
    ];

    // Set dimensions of the chart
    let width = 200; // Adjust to fit inside the card
    let height = 200;
    let radius = Math.min(width, height) / 2;

    // Create an SVG container inside the chart div
    let svg = d3.select(".chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create a pie layout
    let pie = d3.pie()
        .value(d => d.value);

    // Define the arc generator
    let arc = d3.arc()
        .innerRadius(0) // Full pie (no hole)
        .outerRadius(radius);

    // Add pie slices
    svg.selectAll("path")
        .data(pie(data))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", d => d.data.color)
        .attr("stroke", "#fff")
        .attr("stroke-width", "2px");
        
        

    // Add labels to the slices
    svg.selectAll("text")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#000")
        .text(d => d.data.label);


// Fetch the JSON file and process its contents
fetch('employee_info.json')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        console.log(data); // Log the data to the console
        // Perform operations with the data here
        displayEmployees(data); // Example function to handle the data
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

// Example function to display employee data
function displayEmployees(employees) {
    employees.forEach(employee => {
        console.log(`Name: ${employee.name}, Role: ${employee.role}`);
    });
}

const employeeInformation = [
    { employeeId: 1, name: "Sibongile Nkosi" },
    { employeeId: 2, name: "Lungile Moyo" },
    { employeeId: 3, name: "Thabo Molefe" },
    { employeeId: 4, name: "Keshav Naidoo" },
    { employeeId: 5, name: "Zanele Khumalo" },
    { employeeId: 6, name: "Sipho Zulu" },
    { employeeId: 7, name: "Naledi Moeketsi" },
    { employeeId: 8, name: "Farai Gumbo" },
    { employeeId: 9, name: "Karabo Dlamini" },
    { employeeId: 10, name: "Fatima Patel" }
];

// Generate random leave days for employees
const leaveDays = employeeInformation.map(() => Math.floor(Math.random() * 31)); // Random days (0-30)

// Get employee names
const employeeNames = employeeInformation.map(emp => emp.name);

// Chart.js configuration
const ctx = document.getElementById('leaveBarChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeNames, // Employee names as labels
        datasets: [{
            label: 'Leave Days Taken',
            data: leaveDays, // Random leave days
            backgroundColor: 'rgba(64, 87, 102, 0.6)', // Bar color
            borderColor: '#405766', // Border color
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Leave Days'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Employees'
                }
            }
        }
    }
});

// Performance code

document.getElementById("submit-performance-review").addEventListener("click", function (event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Collect form values
    const employeeName = document.getElementById("employee-name").value.trim();
    const employeeId = document.getElementById("employee-id").value.trim();
    const jobTitle = document.getElementById("job-title").value.trim();
    const reviewPeriod = document.getElementById("review-period").value.trim();
    const overallPerformance = document.getElementById("overall-performance").value;

    // Check if all required fields are filled
    if (!employeeName || !employeeId || !jobTitle || !reviewPeriod || !overallPerformance) {
        alert("Please fill out all required fields before submitting the review.");
    } else {
        // Display confirmation alert with input values
        alert(`Performance Review Submitted!\n\nEmployee Name: ${employeeName}\nEmployee ID: ${employeeId}\nJob Title: ${jobTitle}\nReview Period: ${reviewPeriod}\nOverall Performance: ${overallPerformance}`);
    }
});