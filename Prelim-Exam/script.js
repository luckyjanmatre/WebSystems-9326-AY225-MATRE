document.addEventListener('DOMContentLoaded', () => {
    
    // NAVIGATION LOGIC
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // ACCORDION LOGIC
    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.display === "block";
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = "none");
            content.style.display = isOpen ? "none" : "block";
        });
    });

    // FACULTY DATA (Expanded Content)
    const facultyData = [
        { name: "Dr. Elena Cruz", role: "Dean", expert: "Cybersecurity & Cryptography" },
        { name: "Prof. Mark Santos", role: "Department Head", expert: "Machine Learning & Big Data" },
        { name: "Ms. Jean Rivera", role: "Senior Instructor", expert: "Full-Stack Web Engineering" },
        { name: "Dr. Alan Reyes", role: "Research Coordinator", expert: "Natural Language Processing" },
        { name: "Prof. Sofia Lim", role: "Industry Liaison", expert: "UX/UI Design & Human-Computer Interaction" },
        { name: "Mr. David Choi", role: "Assistant Professor", expert: "Game Engine Development" },
        { name: "Dr. Thomas Wright", role: "Professor Emeritus", expert: "Theoretical Computing" },
        { name: "Ms. Angela Gomez", role: "Instructor", expert: "Mobile App Development" }
    ];

    const facultyGrid = document.getElementById('faculty-grid');
    const searchBox = document.getElementById('faculty-search');

    function renderFaculty(filter = "") {
        if(!facultyGrid) return;
        facultyGrid.innerHTML = "";
        const filtered = facultyData.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()) || f.expert.toLowerCase().includes(filter.toLowerCase()));
        
        filtered.forEach(f => {
            facultyGrid.innerHTML += `
                <div class="card">
                    <h3 style="color:var(--navy)">${f.name}</h3>
                    <p style="font-weight:700; color:var(--accent)">${f.role}</p>
                    <p style="font-size: 0.9rem;">Specialization: ${f.expert}</p>
                    <button style="margin-top:15px; background:none; border:1px solid #ddd; padding:5px 10px; cursor:pointer;">View Profile</button>
                </div>`;
        });
    }

    if(searchBox) {
        searchBox.addEventListener('input', (e) => renderFaculty(e.target.value));
        renderFaculty();
    }

    // ANNOUNCEMENTS DATA (Expanded Content)
    const announcements = [
        { date: "NOV 10", title: "National Cyber Security Summit", desc: "CCS will host the annual summit featuring speakers from the FBI and private tech firms." },
        { date: "NOV 15", title: "Semester Finals Schedule", desc: "The final exam schedule for Fall 2023 has been finalized. Check your student portal for seat assignments." },
        { date: "DEC 01", title: "Project Capstone Expo", desc: "Come see the innovative software solutions built by our graduating seniors in the main hall." },
        { date: "JAN 05", title: "Summer Internship Fair", desc: "20+ tech companies will be on campus to interview prospective interns. Bring your CV!" }
    ];

    const newsBoard = document.getElementById('news-board');
    if(newsBoard) {
        announcements.forEach(news => {
            newsBoard.innerHTML += `
                <div class="card" style="border-left: 5px solid var(--accent)">
                    <span style="background:var(--accent-soft); color:var(--accent); padding:5px 10px; border-radius:5px; font-weight:800">${news.date}</span>
                    <h3 style="margin: 15px 0">${news.title}</h3>
                    <p>${news.desc}</p>
                </div>`;
        });
    }

    // FORM VALIDATION
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-status');
            feedback.innerText = "Processing your message...";
            setTimeout(() => {
                feedback.innerText = "Message sent successfully! Our department will contact you soon.";
                feedback.style.color = "green";
                contactForm.reset();
            }, 1000);
        });
    }
});