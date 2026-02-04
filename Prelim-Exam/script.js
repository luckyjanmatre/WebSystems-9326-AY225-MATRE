document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');
    if(toggle) {
        toggle.addEventListener('click', () => nav.classList.toggle('active'));
    }

    // 2. Accordion Logic (Programs Page)
    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.display === "block";
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = "none");
            content.style.display = isOpen ? "none" : "block";
        });
    });

    // 3. Faculty Search (Faculty Page)
    const facultyGrid = document.getElementById('faculty-grid');
    const searchInput = document.getElementById('faculty-search');
    const faculty = [
        { name: "Dr. Elena Cruz", role: "Dean", expert: "Cybersecurity" },
        { name: "Prof. Mark Santos", role: "Associate Prof", expert: "AI & Data Science" },
        { name: "Ms. Jean Rivera", role: "Instructor", expert: "Web Development" },
        { name: "Dr. Alan Reyes", role: "Researcher", expert: "Cloud Computing" }
    ];

    if(facultyGrid) {
        const render = (str = "") => {
            facultyGrid.innerHTML = faculty
                .filter(f => f.name.toLowerCase().includes(str.toLowerCase()) || f.expert.toLowerCase().includes(str.toLowerCase()))
                .map(f => `<div class="card"><h3>${f.name}</h3><p><strong>${f.role}</strong></p><p>${f.expert}</p></div>`).join('');
        };
        render();
        searchInput.addEventListener('input', (e) => render(e.target.value));
    }

    // 4. Announcements (News Page)
    const newsBoard = document.getElementById('news-board');
    if(newsBoard) {
        const news = [
            { date: "Oct 25", title: "Hackathon 2023", desc: "Join the annual coding sprint." },
            { date: "Oct 20", title: "Midterm Schedule", desc: "Exams start next Monday." }
        ];
        newsBoard.innerHTML = news.map(n => `<div class="card"><h4>${n.date}</h4><h3>${n.title}</h3><p>${n.desc}</p></div>`).join('');
    }

    // 5. Contact Validation (Contact Page)
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('status').innerText = "Message sent successfully!";
            form.reset();
        });
    }
});