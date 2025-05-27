function downloadCalendar() {
    const link = document.createElement("a");
    link.href = "images/documents/academic-calendar.pdf";
    link.download = "academic-calendar.pdf";
    link.click();
}