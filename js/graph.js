// Sample employee data (should be fetched dynamically or from the server)
const employeeNames = ["Sibongile Nkosi", "Lungile Moyo", "Thabo Molefe", "Keshav Naidoo", "Zanele Khumalo", "Sipho Zulu", "Naledi Moeketsi", "Farai Gumbo", "Karabo Dlamini", "Fatima Patel"];
const attendanceData = [5, 5, 5, 4, 5, 5, 4, 5, 4, 5]; // Sample attendance data (number of Present days)
const leaveData = [2, 2, 2, 1, 1, 1, 1, 1, 1, 1]; // Sample leave data (number of Leave days)
const performanceData = [90, 85, 80, 70, 75, 90, 85, 95, 80, 90]; // Sample performance data (percentage)

const colors = [
    '#FF5733', // Attendance color
    '#33FF57', // Leave color
    '#3357FF'  // Performance color
];

// Chart.js Configuration
const ctx = document.getElementById('leaveBarChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeNames,  // Employee names as labels
        datasets: [
            {
                label: 'Attendance (Days)',
                data: attendanceData, // Attendance data
                backgroundColor: colors[0], // Color for Attendance bars
                borderColor: '#FF5733',
                borderWidth: 1
            },
            {
                label: 'Leave (Days)',
                data: leaveData, // Leave data
                backgroundColor: colors[1], // Color for Leave bars
                borderColor: '#33FF57',
                borderWidth: 1
            },
            {
                label: 'Performance (%)',
                data: performanceData, // Performance data
                backgroundColor: colors[2], // Color for Performance bars
                borderColor: '#3357FF',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        aspectRatio: 2, // Increase aspect ratio to make the graph larger
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
                    text: 'Value'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Employees'
                }
            }
        },
        animation: {
            duration: 1000,  // Animation duration for the chart
            easing: 'easeOutBounce',  // Bounce easing for the bars
        }
    }
});

console.log("Chart.js Script Loaded!");


const data = {
    "attendanceAndLeave": [
      { "employeeId": 1, "name": "Sibongile Nkosi", "attendance": [ { "date": "2024-11-25", "status": "Present" }, { "date": "2024-11-26", "status": "Absent" }, { "date": "2024-11-27", "status": "Present" }, { "date": "2024-11-28", "status": "Present" }, { "date": "2024-11-29", "status": "Present" } ] },
      { "employeeId": 2, "name": "Lungile Moyo", "attendance": [ { "date": "2024-11-25", "status": "Present" }, { "date": "2024-11-26", "status": "Present" }, { "date": "2024-11-27", "status": "Absent" }, { "date": "2024-11-28", "status": "Present" }, { "date": "2024-11-29", "status": "Present" } ] },
      { "employeeId": 3, "name": "Thabo Molefe", "attendance": [ { "date": "2024-11-25", "status": "Present" }, { "date": "2024-11-26", "status": "Present" }, { "date": "2024-11-27", "status": "Present" }, { "date": "2024-11-28", "status": "Absent" }, { "date": "2024-11-29", "status": "Present" } ] },
      { "employeeId": 4, "name": "Keshav Naidoo", "attendance": [ { "date": "2024-11-25", "status": "Absent" }, { "date": "2024-11-26", "status": "Present" }, { "date": "2024-11-27", "status": "Present" }, { "date": "2024-11-28", "status": "Present" }, { "date": "2024-11-29", "status": "Present" } ] },
      { "employeeId": 5, "name": "Zanele Khumalo", "attendance": [ { "date": "2024-11-25", "status": "Present" }, { "date": "2024-11-26", "status": "Present" }, { "date": "2024-11-27", "status": "Absent" }, { "date": "2024-11-28", "status": "Present" }, { "date": "2024-11-29", "status": "Present" } ] }
    ]
  };

  const labels = [];
  const presentData = [];
  const absentData = [];

  // Process data for the chart
  data.attendanceAndLeave.forEach(employee => {
    labels.push(employee.name);
    let presentCount = 0;
    let absentCount = 0;
    employee.attendance.forEach(record => {
      if (record.status === "Present") presentCount++;
      if (record.status === "Absent") absentCount++;
    });
    presentData.push(presentCount);
    absentData.push(absentCount);
  });

  // Chart.js configuration
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Present Days',
          data: presentData,
          backgroundColor: 'rgba(75, 192, 192, 0.7)', // Greenish color
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Absent Days',
          data: absentData,
          backgroundColor: 'rgba(255, 99, 132, 0.7)', // Reddish color
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Employee Attendance'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Days'
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