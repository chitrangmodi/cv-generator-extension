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
    doc.text(name, 10, 10);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Address: ${address}`, 10, 40);
    doc.setFontSize(16);
    doc.setTextColor(29, 185, 84);
    doc.text('Professional Summary', 10, 50);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(summary, 10, 60);
    doc.setFontSize(16);
    doc.setTextColor(29, 185, 84);
    doc.text('Work Experience', 10, 80);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(experience, 10, 90);
    doc.setFontSize(16);
    doc.setTextColor(29, 185, 84);
    doc.text('Education', 10, 110);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(education, 10, 120);
    doc.setFontSize(16);
    doc.setTextColor(29, 185, 84);
    doc.text('Skills', 10, 140);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(skills, 10, 150);

    doc.save('cv.pdf');
});