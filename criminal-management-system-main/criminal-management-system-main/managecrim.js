// Sample data array to store criminals (replace with actual data handling logic)
let criminalsData = [];


// JavaScript to toggle footer visibility based on scroll position
window.onscroll = function() {
    var footer = document.querySelector('footer');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        footer.style.display = "flex"; // Show the footer
    } else {
        footer.style.display = "none"; // Hide the footer
    }
};

// Function to open the register criminal modal
function openRegisterCriminalModal() {
    document.getElementById("registerCriminalModal").style.display = "block";
}

// Function to close the register criminal modal
function closeRegisterCriminalModal() {
    document.getElementById("registerCriminalModal").style.display = "none";
    clearRegisterCriminalForm();
}

// Function to register a new criminal
function registerCriminal() {
    const criminalID = document.getElementById("criminalID").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const fingerprint = document.getElementById("fingerprint").files[0]; // File object
    const photo = document.getElementById("photo").files[0]; // File object

    // Example: Handle file uploads (you may need additional logic to handle file uploads)
    // Here, just log the file details for demonstration
    console.log("Fingerprint file:", fingerprint);
    console.log("Photo file:", photo);

    // Assuming validation and data handling logic here

    // Example: Adding to data array (replace with actual logic)
    criminalsData.push({
        criminalID,
        firstName,
        lastName,
        dob,
        gender
        // Add fingerprint and photo handling logic as needed
    });

    // Example: Adding row to table (replace with actual logic)
    renderCriminalsTable();

    // Close modal and clear form
    closeRegisterCriminalModal();
}

// Function to clear register criminal form
function clearRegisterCriminalForm() {
    document.getElementById("criminalID").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "male"; // Assuming default value
    document.getElementById("fingerprint").value = ""; // Clear file input (if needed)
    document.getElementById("photo").value = ""; // Clear file input (if needed)
}

// Function to render criminals table
function renderCriminalsTable() {
    const tableBody = document.getElementById("criminalsTableBody");
    tableBody.innerHTML = "";
    criminalsData.forEach((criminal, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${criminal.firstName} ${criminal.lastName}</td>
                <td>${criminal.criminalID}</td>
                <td class="actions">
                    <span class="edit-icon" onclick="editCriminal(${index})">&#9998;</span>
                    <span class="view-icon" onclick="viewCriminal(${index})">&#128196;</span>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Function to open the edit criminal modal
function openEditCriminalModal(index) {
    const criminalData = criminalsData[index];
    document.getElementById("criminalIDEdit").value = criminalData.criminalID;
    document.getElementById("firstNameEdit").value = criminalData.firstName;
    document.getElementById("lastNameEdit").value = criminalData.lastName;
    document.getElementById("dobEdit").value = criminalData.dob;
    document.getElementById("genderEdit").value = criminalData.gender;
    document.getElementById("editCriminalModal").style.display = "block";
}

// Function to close the edit criminal modal
function closeEditCriminalModal() {
    document.getElementById("editCriminalModal").style.display = "none";
}

// Function to save edited criminal details
function saveEditedCriminal() {
    const criminalID = document.getElementById("criminalIDEdit").value.trim();
    const firstName = document.getElementById("firstNameEdit").value.trim();
    const lastName = document.getElementById("lastNameEdit").value.trim();
    const dob = document.getElementById("dobEdit").value.trim();
    const gender = document.getElementById("genderEdit").value.trim();
    // Handle file uploads if needed (fingerprintEdit, photoEdit)

    // Assuming validation and data handling logic here

    // Example: Update criminalsData (replace with actual logic)
    const index = criminalsData.findIndex(criminal => criminal.criminalID === criminalID);
    if (index !== -1) {
        criminalsData[index] = { criminalID, firstName, lastName, dob, gender };
        renderCriminalsTable(); // Example function to update table (replace with actual function)
    }

    closeEditCriminalModal();
}

// Function to open the view criminal details modal
function openViewCriminalModal(index) {
    const criminalData = criminalsData[index];
    document.getElementById("criminalIDView").textContent = criminalData.criminalID;
    document.getElementById("criminalNameView").textContent = `${criminalData.firstName} ${criminalData.lastName}`;
    document.getElementById("dobView").textContent = criminalData.dob;
    document.getElementById("genderView").textContent = criminalData.gender;

    // Display fingerprint image
    const fingerprintImg = document.getElementById("fingerprintView");
    fingerprintImg.src = criminalData.fingerprintURL; // Assuming fingerprintURL is the URL to the fingerprint image

    // Display photo image
    const photoImg = document.getElementById("photoView");
    photoImg.src = criminalData.photoURL; // Assuming photoURL is the URL to the photo image

    document.getElementById("viewCriminalModal").style.display = "block";
}

// Function to close the view criminal details modal
function closeViewCriminalModal() {
    document.getElementById("viewCriminalModal").style.display = "none";
}

// Function to download criminal report
function downloadCriminalReport() {
    const criminalID = document.getElementById("criminalIDView").textContent;
    const firstName = criminalsData.find(criminal => criminal.criminalID === criminalID).firstName;
    const lastName = criminalsData.find(criminal => criminal.criminalID === criminalID).lastName;
    const dob = criminalsData.find(criminal => criminal.criminalID === criminalID).dob;
    const gender = criminalsData.find(criminal => criminal.criminalID === criminalID).gender;

    // Example: Create a report content (replace with actual report format)
    const reportContent = `
        Criminal Report
        Criminal ID: ${criminalID}
        Name: ${firstName} ${lastName}
        Date of Birth: ${dob}
        Gender: ${gender}
    `;

    // Example: Create a Blob and download link (replace with actual download logic)
    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `criminal_report_${criminalID}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Function to initialize table with sample data (replace with actual data retrieval logic)
function initializeCriminalsTable() {
    // Sample data initialization
    criminalsData = [
        { criminalID: "CR001", firstName: "John", lastName: "Doe", dob: "1990-05-15", gender: "male", fingerprintURL: "path/to/fingerprint.jpg", photoURL: "path/to/photo.jpg" },
        { criminalID: "CR002", firstName: "Jane", lastName: "Smith", dob: "1985-12-20", gender: "female", fingerprintURL: "path/to/fingerprint.jpg", photoURL: "path/to/photo.jpg" },
        { criminalID: "CR003", firstName: "Sam", lastName: "Johnson", dob: "1993-08-10", gender: "male", fingerprintURL: "path/to/fingerprint.jpg", photoURL: "path/to/photo.jpg" }
    ];

    // Example: Render initial table (replace with actual rendering function)
    renderCriminalsTable();
}

// Function to render criminals table
function renderCriminalsTable() {
    const tableBody = document.getElementById("criminalsTableBody");
    tableBody.innerHTML = "";
    criminalsData.forEach((criminal, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${criminal.firstName} ${criminal.lastName}</td>
                <td>${criminal.criminalID}</td>
                <td class="actions">
                    <span class="edit-icon" onclick="openEditCriminalModal(${index})">&#9998;</span>
                    <span class="view-icon" onclick="openViewCriminalModal(${index})">&#128196;</span>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Initialize table on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeCriminalsTable();
});