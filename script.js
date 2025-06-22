document.getElementById('generateCV').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const cvContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    document.getElementById('cvPreview').innerHTML = cvContent;
});

document.getElementById('downloadPDF').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const marginLeft = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxLineWidth = pageWidth - 2 * marginLeft;

    const lineHeight = 7; // approx line height in jsPDF units
    let y = 10;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    doc.setFontSize(20);
    doc.setTextColor(29, 185, 84);
    doc.text(name, marginLeft, y);
    y += 10;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Helper function to add label and text with wrapping
    function addSection(title, text) {
      doc.setFontSize(16);
      doc.setTextColor(29, 185, 84);
      doc.text(title, marginLeft, y);
      y += lineHeight;

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      const splitText = doc.splitTextToSize(text, maxLineWidth);
      doc.text(splitText, marginLeft, y);
      y += splitText.length * lineHeight + 5;
    }

    // Add contact details
    const contactDetails = [
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Address: ${address}`
    ];
    contactDetails.forEach(line => {
      const splitLine = doc.splitTextToSize(line, maxLineWidth);
      doc.text(splitLine, marginLeft, y);
      y += splitLine.length * lineHeight;
    });
    y += 5; // extra spacing after contact

    // Sections
    if (summary.trim()) addSection('Professional Summary', summary);
    if (experience.trim()) addSection('Work Experience', experience);
    if (education.trim()) addSection('Education', education);
    if (skills.trim()) addSection('Skills', skills);

    doc.save('cv.pdf');
});

