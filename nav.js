<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hadley Bell | Ag Business & Digital Strategy</title>
    <style>
        :root {
            --primary-color: #006633; /* Iowa State Ag Green */
            --primary-dark: #004d26;
            --background-color: #f8f9fa;
            --card-background: #ffffff;
            --text-color: #212529;
            --border-color: #e9ecef;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            margin: 0;
            padding: 0;
        }

        /* Target container replaced by JS nav */
        #nav-placeholder {
            width: 100%;
        }

        /* Navigation Bar - Horizontal Left to Right */
        .main-navbar {
            background-color: var(--primary-color);
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .nav-wrapper {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1.5rem;
        }

        .nav-brand {
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 700;
            text-decoration: none;
            letter-spacing: 0.5px;
        }

        .nav-menu {
            list-style: none;
            display: flex; /* Forces items in a horizontal row from left to right */
            flex-direction: row;
            margin: 0;
            padding: 0;
        }

        .nav-item {
            margin: 0;
        }

        .nav-link {
            display: block;
            color: #ffffff;
            text-decoration: none;
            padding: 1.1rem 1.2rem;
            font-weight: 500;
            font-size: 0.95rem;
            transition: background-color 0.2s ease, color 0.2s ease;
            cursor: pointer;
        }

        .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }

        .nav-link.active {
            background-color: var(--primary-dark);
            border-bottom: 3px solid #ffffff;
        }

        /* Page Layout & Sections */
        .container {
            max-width: 850px;
            margin: 0 auto;
            padding: 2.5rem 1.5rem;
        }

        section {
            background: var(--card-background);
            padding: 2rem 2.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            margin-bottom: 2rem;
        }

        h1, h2, h3 {
            color: var(--primary-color);
        }

        h2 {
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 0.5rem;
            margin-top: 0;
        }

        /* Tab Switcher Display State */
        .section-view {
            display: none;
        }

        .section-view.active {
            display: block;
        }

        footer {
            text-align: center;
            color: #6c757d;
            font-size: 0.9rem;
            padding-top: 1rem;
        }
    </style>
</head>
<body>

    <!-- Placeholder element that JavaScript will completely replace -->
    <div id="nav-placeholder"></div>

    <div class="container">
        
        <!-- SECTION 1: ABOUT ME -->
        <main id="about-me" class="section-view active">
            <section>
                <h1>Hadley Bell</h1>
                <p><strong>Agricultural Studies | Ag Business, Communications & Marketing</strong><br>
                <em>Iowa State University</em></p>
                <p>Hi, I'm Hadley Bell, an Agricultural Studies junior at Iowa State University specializing in Ag Communications, Ag Business, and Marketing.</p>
                <p>With hands-on experience running a business and managing digital marketing strategies, I focus on brand promotion, audience engagement, and strategic communication. I thrive at the intersection of business and agriculture, where innovation and strong relationships drive long-term growth for the industry.</p>
            </section>
        </main>

        <!-- SECTION 2: SCHOOLING -->
        <main id="schooling" class="section-view">
            <section>
                <h2>Schooling & Education</h2>
                <h3>Iowa State University</h3>
                <p><strong>Degree:</strong> Bachelor of Science in Agricultural Studies</p>
                <p><strong>Class Standing:</strong> Junior</p>
                <p><strong>Areas of Emphasis:</strong></p>
                <ul>
                    <li>Agricultural Business</li>
                    <li>Agricultural Communications</li>
                    <li>Marketing</li>
                </ul>
            </section>
        </main>

        <!-- SECTION 3: WORK EXPERIENCE -->
        <main id="work-experience" class="section-view">
            <section>
                <h2>Work Experience</h2>
                <h3>Business Owner & Entrepreneur</h3>
                <p><em>Independent Enterprise</em></p>
                <ul>
                    <li>Founded and manage an independent business, overseeing daily operations, financial tracking, and client relations.</li>
                    <li>Execute custom marketing plans that increase client reach and brand awareness.</li>
                </ul>

                <h3>Digital Marketing & Social Media Manager</h3>
                <ul>
                    <li>Developed and executed targeted social media strategies for regional ag businesses.</li>
                    <li>Designed multimedia assets, promotional copy, and newsletters tailored to agricultural audiences.</li>
                </ul>
            </section>
        </main>

        <!-- SECTION 4: PERSONAL -->
        <main id="personal" class="section-view">
            <section>
                <h2>Personal & Leadership</h2>
                <p>Outside of academics and business operations, I am passionate about leadership development, staying involved in industry associations, and continuous skill building in multimedia design.</p>
                <ul>
                    <li><strong>Location:</strong> Ames, Iowa</li>
                    <li><strong>Interests:</strong> Agricultural Innovation, Visual Storytelling, Strategic Leadership</li>
                    <li><strong>Contact:</strong> <a href="mailto:your.email@iastate.edu">your.email@iastate.edu</a></li>
                </ul>
            </section>
        </main>

        <footer>
            <p>&copy; Hadley Bell. All rights reserved.</p>
        </footer>
    </div>

    <!-- JavaScript Navigation Script -->
    <script>
        // 1. Navigation items config array
        const navigationConfig = [
            { id: 'about-me', label: 'About Me' },
            { id: 'schooling', label: 'Schooling' },
            { id: 'work-experience', label: 'Work Experience' },
            { id: 'personal', label: 'Personal' }
        ];

        // 2. Render Navigation HTML programmatically and replace placeholder
        function renderNavigationBar() {
            const navElement = document.createElement('nav');
            navElement.className = 'main-navbar';

            // Build menu items string
            const linksMarkup = navigationConfig.map((item, idx) => {
                const activeClass = idx === 0 ? 'active' : '';
                return `
                    <li class="nav-item">
                        <a href="#${item.id}" 
                           class="nav-link ${activeClass}" 
                           data-target="${item.id}">
                           ${item.label}
                        </a>
                    </li>
                `;
            }).join('');

            // Full navbar interior layout
            navElement.innerHTML = `
                <div class="nav-wrapper">
                    <a href="#about-me" class="nav-brand" data-target="about-me">Hadley Bell</a>
                    <ul class="nav-menu">
                        ${linksMarkup}
                    </ul>
                </div>
            `;

            // Replace the HTML placeholder node entirely
            const placeholder = document.getElementById('nav-placeholder');
            if (placeholder) {
                placeholder.replaceWith(navElement);
            }

            // Attach event listeners to new elements
            attachNavEventListeners(navElement);
        }

        // 3. Tab navigation switcher logic
        function attachNavEventListeners(navContainer) {
            navContainer.addEventListener('click', (event) => {
                const targetLink = event.target.closest('[data-target]');
                if (!targetLink) return;

                event.preventDefault();
                const targetId = targetLink.getAttribute('data-target');

                // Toggle section visibility
                document.querySelectorAll('.section-view').forEach(section => {
                    section.classList.toggle('active', section.id === targetId);
                });

                // Update tab active state styles
                document.querySelectorAll('.nav-link').forEach(link => {
                    const isSelected = link.getAttribute('data-target') === targetId;
                    link.classList.toggle('active', isSelected);
                });
            });
        }

        // Initialize menu on DOM load
        document.addEventListener('DOMContentLoaded', renderNavigationBar);
    </script>
</body>
</html>
