let casesData = []; // Example cases data array

        // Function to open the add case modal
        function openAddCaseModal() {
            document.getElementById("addCaseModal").style.display = "block";
        }

        // Function to close the add case modal
        function closeAddCaseModal() {
            document.getElementById("addCaseModal").style.display = "none";
            clearAddCaseForm();
        }

        // Function to open the edit case modal
        function openEditCaseModal(index) {
            const caseData = casesData[index];
            document.getElementById("caseIdEdit").value = caseData.caseId;
            document.getElementById("caseDateEdit").value = caseData.date;
            document.getElementById("crimeCategoryEdit").value = caseData.crimeCategory;
            document.getElementById("criminalNameEdit").value = caseData.criminalName;
            document.getElementById("caseLocationEdit").value = caseData.location;
            document.getElementById("editCaseModal").style.display = "block";
        }

        // Function to close the edit case modal
        function closeEditCaseModal() {
            document.getElementById("editCaseModal").style.display = "none";
        }

        // Function to open the view case report modal
        function openViewCaseReportModal(index) {
            const caseData = casesData[index];
            const modal = document.getElementById("viewCaseReportModal");
            const modalContent = document.getElementById("caseReportContent");
            modalContent.innerHTML = `
                <p><strong>Case ID:</strong> ${caseData.caseId}</p>
                <p><strong>Date:</strong> ${caseData.date}</p>
                <p><strong>Crime Category:</strong> ${caseData.crimeCategory}</p>
                <p><strong>Criminal Name:</strong> ${caseData.criminalName}</p>
                <p><strong>Location:</strong> ${caseData.location}</p>
            `;
            modal.style.display = "block";
        }

        // Function to close the view case report modal
        function closeViewCaseReportModal() {
            document.getElementById("viewCaseReportModal").style.display = "none";
        }

        // Function to save a new case
        function saveCase() {
            const caseId = document.getElementById("caseIdModal").value.trim();
            const date = document.getElementById("caseDateModal").value.trim();
            const crimeCategory = document.getElementById("crimeCategoryModal").value.trim();
            const criminalName = document.getElementById("criminalNameModal").value.trim();
            const location = document.getElementById("caseLocationModal").value.trim();

            // Assuming validation and data handling logic here

            // Example: Adding to data array (replace with actual logic)
            casesData.push({
                caseId,
                date,
                crimeCategory,
                criminalName,
                location
            });

            // Example: Adding row to table (replace with actual logic)
            renderCasesTable();

            // Close modal and clear form
            closeAddCaseModal();
        }

        // Function to update an existing case
        function updateCase() {
            const caseId = document.getElementById("caseIdEdit").value.trim();
            const date = document.getElementById("caseDateEdit").value.trim();
            const crimeCategory = document.getElementById("crimeCategoryEdit").value.trim();
            const criminalName = document.getElementById("criminalNameEdit").value.trim();
            const location = document.getElementById("caseLocationEdit").value.trim();

            // Assuming validation and data handling logic here

            // Example: Updating data array (replace with actual logic)
            const index = casesData.findIndex(c => c.caseId === caseId);
            if (index !== -1) {
                casesData[index] = {
                    caseId,
                    date,
                    crimeCategory,
                    criminalName,
                    location
                };
            }

            // Example: Re-rendering table (replace with actual logic)
            renderCasesTable();

            // Close modal
            closeEditCaseModal();
        }

        // Function to render cases table
        function renderCasesTable() {
            const tableBody = document.getElementById("casesTableBody");
            tableBody.innerHTML = "";
            casesData.forEach((caseData, index) => {
                const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${caseData.caseId}</td>
                        <td>${caseData.date}</td>
                        <td class="actions">
                            <span class="edit-icon" onclick="openEditCaseModal(${index})">&#9998;</span>
                            <span class="view-icon" onclick="openViewCaseReportModal(${index})">&#128196;</span>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }

        // Example function for downloading case report (dummy function)
        function downloadCaseReport() {
            const caseData = casesData[0]; // Assuming downloading first case report
            const content = `
                Case ID: ${caseData.caseId}
                Date: ${caseData.date}
                Crime Category: ${caseData.crimeCategory}
                Criminal Name: ${caseData.criminalName}
                Location: ${caseData.location}
            `;
            const blob = new Blob([content], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Case_Report_${caseData.caseId}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Function to clear add case form
        function clearAddCaseForm() {
            document.getElementById("caseIdModal").value = "";
            document.getElementById("caseDateModal").value = "";
            document.getElementById("crimeCategoryModal").value = "";
            document.getElementById("criminalNameModal").value = "";
            document.getElementById("caseLocationModal").value = "";
        }

        // Example initialization (replace with actual data retrieval logic)
        // Assuming casesData is populated initially or retrieved from backend
        casesData = [
            { caseId: "C001", date: "2024-06-15", crimeCategory: "Burglary", criminalName: "John Doe", location: "Main Street" },
            { caseId: "C002", date: "2024-06-16", crimeCategory: "Robbery", criminalName: "Jane Smith", location: "Park Avenue" },
            { caseId: "C003", date: "2024-06-17", crimeCategory: "Assault", criminalName: "Sam Johnson", location: "Broadway" }
        ];

        // Initial rendering of cases table
        renderCasesTable();
        // Example data structure (replace this with your actual data)

// Function to populate the table with data
function populateCasesTable() {
    let tableBody = document.getElementById('casesTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    casesData.forEach((caseItem, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${caseItem.caseId}</td>
            <td>${caseItem.date}</td>
            <td>${caseItem.status === 'completed' ? 'Completed' : 'Pending'}</td>
            <td class="actions">
                <span class="edit-icon" onclick="openEditCaseModal(${index})">&#9998;</span>
                <span class="view-icon" onclick="openViewCaseReportModal(${index})">&#128196;</span>
            </td>
        `;
    });
}

// Call the function to populate the table initially
populateCasesTable();
