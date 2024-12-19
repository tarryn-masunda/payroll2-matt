// Displaying my dummy data onto a table
const employeeInformation = [
    {
        employeeId: 1,
        name: "Sibongile Nkosi",
        position: "Software Engineer",
        department: "Development",
        salary: 70000,
        employmentHistory: "Joined in 2015, promoted to Senior in 2018",
        contact: "sibongile.nkosi@moderntech.com"
    },
    {
        employeeId: 2,
        name: "Lungile Moyo",
        position: "HR Manager",
        department: "HR",
        salary: 80000,
        employmentHistory: "Joined in 2013, promoted to Manager in 2017",
        contact: "lungile.moyo@moderntech.com"
    },
    {
        employeeId: 3,
        name: "Thabo Molefe",
        position: "Quality Analyst",
        department: "QA",
        salary: 55000,
        employmentHistory: "Joined in 2018",
        contact: "thabo.molefe@moderntech.com"
    },
    {
        employeeId: 4,
        name : "Keshav Naidoo",
        position : "Sales Representative",
        department : "Sales",
        salary : 60000,
        employmentHistory : "Joined in 2020",
        contact : "keshav.naidoo@moderntech.com"
    },
    {
        employeeId: 5,
        name: "Zanele Khumalo",
        position: "Marketing Specialist",
        department: "Marketing",
        salary: 58000,
        employmentHistory: "Joined in 2019",
        contact: "zanele.khumalo@moderntech.com"
    },
    {
        employeeId: 6,
        name: "Sipho Zulu",
        position: "UI/UX Designer",
        department: "Design",
        salary: 65000,
        employmentHistory: "Joined in 2016",
        contact: "sipho.zulu@moderntech.com"
    },
    {
        employeeId: 7,
        name: "Naledi Moeketsi",
        position: "DevOps Engineer",
        department: "IT",
        salary: 72000,
        employmentHistory: "Joined in 2017",
        contact: "naledi.moeketsi@moderntech.com"
    },
    {
        employeeId: 8,
        name: "Farai Gumbo",
        position: "Content Strategist",
        department: "Marketing",
        salary: 56000,
        employmentHistory: "Joined in 2021",
        contact: "farai.gumbo@moderntech.com"
    },
    {
        employeeId: 9,
        name: "Karabo Dlamini",
        position: "Accountant",
        department: "Finance",
        salary: 62000,
        employmentHistory: "Joined in 2018",
        contact: "karabo.dlamini@moderntech.com"
    },
    {
        employeeId: 10,
        name: "Fatima Patel",
        position: "Customer Support Lead",
        department: "Support",
        salary: 58000,
        employmentHistory: "Joined in 2016",
        contact: "fatima.patel@moderntech.com"
    }
]
window.addEventListener('load', function() {

})


employeeInformation.forEach((employee, index) =>{
    
        tbody.innerHTML += `
        <tr>
                        <td>${employee.employeeId}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'name', this.textContent)">${employee.name}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'department', this.textContent)">${employee.department}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'position', this.textContent)">${employee.position}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'employmentHistory', this.textContent)">${employee.employmentHistory}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'contact', this.textContent)">${employee.contact}</td>
                        <td>
                            <button class="btn btn-primary"onclick="deleteEmployee(${index})">Delete</button>
                        </td>
            </tr>
        `
})

// Function to render the table
function renderTable() {
     tbody.innerHTML = ""; // Clear existing rows
    employeeInformation.forEach((employee, index) => {
        tbody.innerHTML += `
            <tr>
                        <td>${employee.employeeId}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'name', this.textContent)">${employee.name}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'department', this.textContent)">${employee.department}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'position', this.textContent)">${employee.position}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'employmentHistory', this.textContent)">${employee.employmentHistory}</td>
                        <td contenteditable="true" onblur="editCell(${index}, 'contact', this.textContent)">${employee.contact}</td>
                        <td>
                            <button class="btn btn-primary" onclick="deleteEmployee(${index})">Delete</button>
                        </td>
            </tr>
        `;
    });
}

// Function to delete an employee
function deleteEmployee(index) {
    if (index < 0 || index >= employeeInformation.length) {
        alert("Invalid index. No employee was deleted.");
        return;
    }
    const confirmation = confirm("Are you sure you want to delete this employee?");
    if (confirmation) {
        tbody.innerHTML = ""
        setTimeout(() => {
            employeeInformation.splice(index, 1);
            alert("Employee has been deleted successfully.");
            renderTable(); // Update the table
        }, 100);
    } else {
        alert("Deletion cancelled.");
    }
}
 // Function to add a new employee
function addNewEmployee() {
    const proceed = confirm("Do you want to add a new employee?");
    if (!proceed) {
        console.log("Operation cancelled by the user.");
        return;
    }

    // Gather employee details
    const newEmployee = {
        employeeId: employeeInformation.length + 1, // Dynamic ID based on length
        name: prompt("Enter employee name:"),
        department: prompt("Enter employee department:"),
        position: prompt("Enter employee position:"),
        salary: parseInt(prompt("Enter the employee salary:"), 10),
        employmentHistory: prompt("Enter when the employee joined the company:"),
        contact: prompt("Enter employee email:")
    };

    // Validate input
    if (!newEmployee.name || !newEmployee.department || !newEmployee.position ||
        isNaN(newEmployee.salary) || !newEmployee.employmentHistory || !newEmployee.contact) {
        alert("You cancelled or provided invalid input. Employee was not added.");
        return;
    }

    // Add the new employee to the array
    tbody.innerHTML = ""
    setTimeout(() => {
        employeeInformation.push(newEmployee);
        alert("New employee added successfully.");
        renderTable(); // Update the table
    }, 100);
}
 // Function to edit a specific cell
 function editCell(index, key, value) {
    // Trim input to prevent accidental whitespace
    const trimmedValue = value.trim();

    // Update the employeeInformation array
    if (trimmedValue) {
        employeeInformation[index][key] = trimmedValue;
        alert(`${key.charAt(0).toUpperCase() + key.slice(1)} updated successfully.`);
    } else {
        alert("Invalid input. No changes were made.");
        renderTable(); // Re-render table to reset the cell
    }
}
// Initial render of the table
renderTable();