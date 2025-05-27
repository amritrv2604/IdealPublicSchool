// Teacher data (class-wise)
const teacherData = {
    
    1: "Mr. Avinash Sir",
    2: "Riya Miss",
    3: "Mr. Kundan Singh Sir",
    4: "Mr. Naveen Jha Sir",
    5: "Mr. Saroj Sir",
    6: "Mr. Pramod Sir",
    8: "Mr. Vikas Kr. Singh Sir"
    
};

// Timetable images (match filenames in /images/)
const timetableData = {
    1: { image: "images/PW-1.jpg" },
    2: { image: "images/PW-2.jpg" },
    3: { image: "images/PW- 3.jpg" },
    4: { image: "images/PW- 4.jpg" },
    5: { image: "images/PW-5.jpg" },
    6: { image: "images/PW-6.jpg" },
    8: { image: "images/PW-8.jpg" }
};


function showTimetable() {
    const classSelect = document.getElementById("class-select");
    const displayDiv = document.getElementById("timetable-display");
    const selectedClass = classSelect.value;

    if (selectedClass && timetableData[selectedClass]) {
        displayDiv.innerHTML = `
            <h3>Class: ${selectedClass.toUpperCase()}</h3>
            <p><strong>Class Teacher:</strong> ${teacherData[selectedClass]}</p>
            <img src="${timetableData[selectedClass].image}" alt="Timetable" class="timetable-img">
        `;
    } else {
        displayDiv.innerHTML = "<p>Select a class to view the Project work.</p>";
    }
}

function downloadTimetable() {
    const selectedClass = document.getElementById("class-select").value;
    if (selectedClass && timetableData[selectedClass]) {
        const link = document.createElement("a");
        link.href = timetableData[selectedClass].image;
        link.download = `Project work-${selectedClass}.jpg`;
        link.click();
    } else {
        alert("Please select a class first!");
    }
}