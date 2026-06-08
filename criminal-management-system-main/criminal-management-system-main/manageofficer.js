// Sample data array to store officers (replace with actual data handling logic)
let officersData = [];

// Function to open the add officer modal
function openAddOfficerModal() {
    document.getElementById("addOfficerModal").style.display = "block";
}

// Function to close the add officer modal
function closeAddOfficerModal() {
    document.getElementById("addOfficerModal").style.display = "none";
}

// Function to save a new officer
function saveOfficer() {
    const officerID = document.getElementById("officerID").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const photo = document.getElementById("photo").files[0]; // Assuming only one file is selected

    // Assuming validation and data handling logic here

    // Example: Adding to data array (replace with actual logic)
    officersData.push({
        officerID,
        firstName,
        lastName,
        dob,
        email,
        address,
        phone,
        photo: URL.createObjectURL(photo) // Example URL for previewing photo
    });

    // Example: Render updated table (replace with actual rendering function)
    renderOfficersTable();

    closeAddOfficerModal();
}

// Function to open the edit officer modal
function openEditOfficerModal(index) {
    const officerData = officersData[index];
    document.getElementById("officerIDEdit").value = officerData.officerID;
    document.getElementById("firstNameEdit").value = officerData.firstName;
    document.getElementById("lastNameEdit").value = officerData.lastName;
    document.getElementById("dobEdit").value = officerData.dob;
    document.getElementById("emailEdit").value = officerData.email;
    document.getElementById("addressEdit").value = officerData.address;
    document.getElementById("phoneEdit").value = officerData.phone;
    // Display existing photo (if available)
    const photoView = document.getElementById("photoView");
    photoView.src = officerData.photo;
    document.getElementById("editOfficerModal").style.display = "block";
}

// Function to close the edit officer modal
function closeEditOfficerModal() {
    document.getElementById("editOfficerModal").style.display = "none";
}

// Function to update officer details
function updateOfficer() {
    const officerID = document.getElementById("officerIDEdit").value.trim();
    const firstName = document.getElementById("firstNameEdit").value.trim();
    const lastName = document.getElementById("lastNameEdit").value.trim();
    const dob = document.getElementById("dobEdit").value.trim();
    const email = document.getElementById("emailEdit").value.trim();
    const address = document.getElementById("addressEdit").value.trim();
    const phone = document.getElementById("phoneEdit").value.trim();
    const photoEdit = document.getElementById("photoEdit").files[0]; // Assuming only one file is selected

    // Assuming validation and data handling logic here

    // Update officer data (replace with actual logic)
    officersData.forEach((officer, index) => {
        if (officer.officerID === officerID) {
            officersData[index] = {
                officerID,
                firstName,
                lastName,
                dob,
                email,
                address,
                phone,
                photo: URL.createObjectURL(photoEdit) // Example URL for previewing photo
            };
        }
    });

    // Example: Render updated table (replace with actual rendering function)
    renderOfficersTable();

    closeEditOfficerModal();
}

// Function to open the view officer details modal
function openViewOfficerModal(index) {
    const officerData = officersData[index];
    document.getElementById("officerIDView").textContent = officerData.officerID;
    document.getElementById("officerNameView").textContent = `${officerData.firstName} ${officerData.lastName}`;
    document.getElementById("dobView").textContent = officerData.dob;
    document.getElementById("emailView").textContent = officerData.email;
    document.getElementById("addressView").textContent = officerData.address;
    document.getElementById("phoneView").textContent = officerData.phone;
    const photoView = document.getElementById("photoView");
    photoView.src = officerData.photo; // Display photo in view modal
    document.getElementById("viewOfficerModal").style.display = "block";
}

// Function to close the view officer details modal
function closeViewOfficerModal() {
    document.getElementById("viewOfficerModal").style.display = "none";
}

// Function to download officer report
function downloadOfficerReport() {
    const officerID = document.getElementById("officerIDView").textContent;
    const officer = officersData.find(officer => officer.officerID === officerID);

    // Example: Create a report content (replace with actual report format)
    const reportContent = `
        Officer Report
        Officer ID: ${officer.officerID}
        Name: ${officer.firstName} ${officer.lastName}
        Date of Birth: ${officer.dob}
        Email: ${officer.email}
        Address: ${officer.address}
        Phone: ${officer.phone}
    `;

    // Example: Create a Blob and download link (replace with actual download logic)
    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `officer_report_${officer.officerID}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Function to initialize table with sample data (replace with actual data retrieval logic)
function initializeOfficersTable() {
    // Sample data initialization
    officersData = [
        { officerID: "OF001", firstName: "John", lastName: "Doe", dob: "1990-05-15", email: "john.doe@example.com", address: "123 Main St, City", phone: "123-456-7890", photo: "path/to/photo.jpg" },
        { officerID: "OF002", firstName: "Jane", lastName: "Smith", dob: "1985-12-20", email: "jane.smith@example.com", address: "456 Elm St, Town", phone: "987-654-3210", photo: "path/to/photo.jpg" },
        { officerID: "OF003", firstName: "Sam", lastName: "Johnson", dob: "1993-08-10", email: "sam.johnson@example.com", address: "789 Oak St, Village", phone: "456-789-0123", photo: "path/to/photo.jpg" }
    ];

    // Example: Render initial table (replace with actual rendering function)
    renderOfficersTable();
}

// Function to render officers table
function renderOfficersTable() {
    const tableBody = document.getElementById("officerTableBody");
    tableBody.innerHTML = "";
    officersData.forEach((officer, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${officer.officerID}</td>
                <td>${officer.firstName} ${officer.lastName}</td>
                <td class="actions">
                    <span class="edit-icon" onclick="openEditOfficerModal(${index})">&#9998;</span>
                    <span class="view-icon" onclick="openViewOfficerModal(${index})">&#128196;</span>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Initialize table on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeOfficersTable();
});
