document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. JS-Driven Navigation (Mobile Toggle) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- 2. Interactive Programs (Accordion) ---
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isOpen = body.style.display === 'block';
            
            // Close others (optional)
            document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
            
            body.style.display = isOpen ? 'none' : 'block';
        });
    });

    // --- 3. Faculty Directory Search ---
    const facultyData = [
        { name: "Dr. Alan Turing", expert: "Artificial Intelligence" },
        { name: "Dr. Grace Hopper", expert: "Compilers & Languages" },
        { name: "Prof. Ada Lovelace", expert: "Algorithms" },
        { name: "Mr. Linus Torvalds", expert: "Operating Systems" }
    ];

    const facultyList = document.getElementById('faculty-list');
    const searchInput = document.getElementById('facultySearch');

    function renderFaculty(filter = "") {
        if (!facultyList) return;
        facultyList.innerHTML = "";
        const filtered = facultyData.filter(f => 
            f.name.toLowerCase().includes(filter.toLowerCase()) || 
            f.expert.toLowerCase().includes(filter.toLowerCase())
        );
        
        filtered.forEach(f => {
            facultyList.innerHTML += `
                <div class="card">
                    <h3>${f.name}</h3>
                    <p><strong>Expertise:</strong> ${f.expert}</p>
                </div>`;
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderFaculty(e.target.value));
        renderFaculty(); // Initial load
    }

    // --- 4. Dynamic Announcement Board ---
    const announcements = [
        { date: "Oct 25, 2023", text: "Final Exams starting next week. Check your portals." },
        { date: "Oct 20, 2023", text: "CCS Hackathon registration is now open!" },
        { date: "Oct 15, 2023", text: "New seminar on Blockchain Technology this Friday." }
    ];

    const newsBoard = document.getElementById('news-board');
    if (newsBoard) {
        announcements.forEach(item => {
            newsBoard.innerHTML += `
                <div class="card" style="margin-bottom: 15px;">
                    <small>${item.date}</small>
                    <p>${item.text}</p>
                </div>`;
        });
    }

    // --- 5. Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('form-feedback');

            // Basic regex validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                feedback.innerText = "Error: Please enter a valid email address.";
                feedback.style.color = "red";
            } else {
                feedback.innerText = "Success: Your inquiry has been sent!";
                feedback.style.color = "green";
                contactForm.reset();
            }
        });
    }
});