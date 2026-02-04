document.addEventListener('DOMContentLoaded', () => {
    
    /* --- JS Driven Navigation --- */
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    /* --- Interactive Program Accordion --- */
    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.display === "block";
            // Close all
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = "none");
            // Toggle clicked
            content.style.display = isOpen ? "none" : "block";
        });
    });

    /* --- Faculty Directory Logic (Search/Filter) --- */
    const facultyData = [
        { name: "Dr. Elena Cruz", role: "Dean", expert: "Cybersecurity" },
        { name: "Prof. Mark Santos", role: "Associate Professor", expert: "AI & ML" },
        { name: "Ms. Jean Rivera", role: "Instructor", expert: "Web Development" },
        { name: "Dr. Alan Reyes", role: "Researcher", expert: "Data Science" }
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
                    <h3>${f.name}</h3>
                    <p><strong>${f.role}</strong></p>
                    <p>${f.expert}</p>
                </div>`;
        });
    }

    if(searchBox) {
        searchBox.addEventListener('input', (e) => renderFaculty(e.target.value));
        renderFaculty();
    }

    /* --- Dynamic Announcement Board --- */
    const announcements = [
        { date: "Oct 25", title: "Global Hackathon 2023", desc: "Join us for a 48-hour coding sprint." },
        { date: "Oct 20", title: "Midterm Exam Schedule", desc: "The official schedule is now posted on portals." },
        { date: "Oct 12", title: "New AI Lab Opening", desc: "Visit the new Research wing in Building C." }
    ];

    const newsBoard = document.getElementById('news-board');
    if(newsBoard) {
        announcements.forEach(news => {
            newsBoard.innerHTML += `
                <div class="card">
                    <span style="color:var(--accent); font-weight:800">${news.date}</span>
                    <h3 style="margin: 10px 0">${news.title}</h3>
                    <p>${news.desc}</p>
                </div>`;
        });
    }

    /* --- Contact Form Validation --- */
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('form-status');

            if(!email.includes("@")) {
                feedback.innerText = "Please provide a valid email address.";
                feedback.style.color = "red";
            } else {
                feedback.innerText = "Thank you! Your inquiry has been sent.";
                feedback.style.color = "green";
                contactForm.reset();
            }
        });
    }
});