
        // Initialize Lucide icons
        lucide.createIcons();

        // Data
        const skills = [
            'JavaScript', 'Python', 'Git', 'HTML', 'Tailwind CSS'
        ];

        const specialties = [
            {
                icon: 'code-2',
                title: 'Frontend Development',
                description: 'Building responsive, interactive user interfaces with modern frameworks and libraries.',
                tech: ['HTML', 'JavaScript', 'Tailwind CSS']
            },
            {
                icon: 'database',
                title: 'Backend Development',
                description: 'Designing scalable APIs and robust server-side applications with best practices.',
                tech: ['Python', 'Django']
            }
        ];

        const projects = [
        {
                id: 1,
                title: 'WebSimples.mz',
                description: 'Website made for my web design/development business called WebSimples.mz.',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
                tech: ['HTML', 'TailwindCSS', 'JavaScript'],
                category: 'frontend',
                liveUrl: 'https://websimplesmz.vercel.app',
                githubUrl: 'https://github.com/Thiyane24/WebSimples.Mz-Website',
                featured: true
            },
            {
                id: 2,
                title: 'Clínica Saúde Maputo',
                description: 'A full-stack Hospital solution with appointment reservation',
                image: 'https://media.istockphoto.com/id/2211325498/photo/people-and-doctors-walking-at-the-hospitals-entrance-hall.webp?a=1&b=1&s=612x612&w=0&k=20&c=8ugh78Mbn1SwpWQNb0ZzeHQh5kfA_d1_DAYrWTg_-34=',
                tech: ['HTML', 'TailwindCSS', 'JavaScript', 'Node.js'],
                category: 'frontend',
                liveUrl: 'https://Thiyane24.github.io/ClinicaSaudeMpt/',
                githubUrl: 'https://github.com/Thiyane24/ClinicaSaudeMpt',
                featured: false
            },
            
          
            {
                id: 3,
                title: 'Agrishop Nampula',
                description: 'Landing page for an Agrishop in Mozambique, displaying the products they sell and direct link to whatsapp',
                image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D',
                tech: ['HTML', 'CSS', 'JavaScript'],
                category: 'frontend',
                liveUrl: 'https://agrishopnampula.vercel.app',
                githubUrl: 'https://github.com/Thiyane24/AgriShop-Nampula',
                featured: false
            },
            {
                id: 4,
                title: 'Olhos de Maputo',
                description: 'Landing page for a photography agency in Mozambique, displaying the services they offer and direct link to whatsapp',
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
                tech: ['HTML', 'CSS', 'JavaScript'],
                category: 'frontend',
                liveUrl: 'https://fotografo-website.vercel.app',
                githubUrl: 'https://github.com/Thiyane24/fotografo-website',
                featured: false
            },
            {
                id: 5,
                title: 'MozMecanica',
                description: 'Website for a mechanical shop in Mozambique, displaying the services they offer and direct link to whatsapp',
                image: 'https://images.unsplash.com/photo-1646807607702-7ca7a82abc52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lY2hhbmljYWwlMjBzaG9wfGVufDB8fDB8fHww',
                tech: ['HTML', 'CSS', 'JavaScript'],
                category: 'frontend',
                liveUrl: 'https://Thiyane24.github.io/MozMecanica/',
                githubUrl: 'https://github.com/Thiyane24/MozMecanica',
                featured: false
            }
        ];

        const categories = [
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full Stack' },
            { id: 'frontend', label: 'Frontend' }
        ];

        const experiences = [
            {
                id: 1,
                title: 'CEO',
                company: 'WebSimples.mz',
                location: 'Maputo, Mozambique',
                period: '2025 - Present',
                type: 'work',
                description: 'Enhancing the image, credibility and professionalism of mozambican businesses with professional websites',
                tech: ['HTML', 'Node.js', 'TailwindCSS', 'JavaScript', 'Python'],
                achievements: [
                    'Built and launched multiple client websites',
                    'Improved client online presence and sales',
                    'Developed custom solutions for business needs'
                ]
            }
        ];

        const certifications = [
            { name: 'Learn HTML and CSS', issuer: 'CodeCademy', year: '2025' },
            { name: 'Introduction to CyberSecurity', issuer: 'Cisco Networking Academy', year: '2025' },
            { name: 'Certificate in Full-stack development', issuer: 'FNB APP Academy', year: '2025' }
        ];

        const contactInfo = [
            {
                icon: 'mail',
                label: 'Email',
                value: 'thiyane24@gmail.com',
                href: 'mailto:thiyane24@gmail.com'
            },
            {
                icon: 'phone',
                label: 'Phone',
                value: '+258 843334793',
                href: 'tel:+258843334793'
            },
            {
                icon: 'map-pin',
                label: 'Location',
                value: 'Maputo, Mozambique',
                href: '#'
            }
        ];

        const socialLinks = [
            { icon: 'github', href: 'https://github.com/Thiyane24', label: 'GitHub' },
            { icon: 'linkedin', href: 'https://www.linkedin.com/in/thiyane-xavier-9aa09a345/', label: 'LinkedIn' },
            { icon: 'instagram', href: 'https://www.instagram.com/thiyanedevs?utm_source=ig_web_button_share_sheet&igsh=MWJ6NGoydWdqajd5OQ==', label: 'Instagram' },
            { icon: 'mail', href: '#contact', label: 'Email' }
        ];

        const skillsProgress = [
            { skill: 'JavaScript', level: 70 },
            { skill: 'HTML&CSS', level: 90 },
            { skill: 'Python', level: 85 },
            { skill: 'TailwindCSS', level: 70 },
            { skill: 'Git/Github', level: 75 }
        ];

        // Current active filter
        let activeFilter = 'all';

        // Typing animation
        function initTypingAnimation() {
            const titles = [
                'Web Developer',
            ];
            
            let currentIndex = 0;
            let displayText = '';
            let charIndex = 0;
            let isDeleting = false;
            const typingElement = document.getElementById('typing-text');

            function typeEffect() {
                const currentTitle = titles[currentIndex];
                
                if (!isDeleting && charIndex < currentTitle.length) {
                    displayText = currentTitle.slice(0, charIndex + 1);
                    charIndex++;
                    setTimeout(typeEffect, 100);
                } else if (!isDeleting && charIndex === currentTitle.length) {
                    setTimeout(() => {
                        isDeleting = true;
                        typeEffect();
                    }, 2000);
                } else if (isDeleting && charIndex > 0) {
                    displayText = currentTitle.slice(0, charIndex - 1);
                    charIndex--;
                    setTimeout(typeEffect, 50);
                } else if (isDeleting && charIndex === 0) {
                    currentIndex = (currentIndex + 1) % titles.length;
                    isDeleting = false;
                    setTimeout(typeEffect, 500);
                }
                
                typingElement.textContent = displayText;
            }

            typeEffect();
        }

        // Navigation
        function updateActiveNavLink() {
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                    }
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-blue-400', 'glow-primary', 'bg-blue-500/10');
                link.classList.add('text-slate-400');
                
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-slate-400');
                    link.classList.add('text-blue-400', 'glow-primary', 'bg-blue-500/10');
                }
            });
        }

        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Mobile menu toggle
        function initMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    scrollToSection(href.substring(1));
                });
            });
        }

        // Populate skills
        function populateSkills() {
            const container = document.getElementById('skills-container');
            container.innerHTML = skills.map((skill, index) => `
                <span class="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full hover-scale transition-all duration-300" 
                      style="animation-delay: ${index * 0.1}s;">
                    ${skill}
                </span>
            `).join('');
        }

        // Populate specialties
        function populateSpecialties() {
            const container = document.getElementById('specialties-container');
            container.innerHTML = specialties.map((specialty, index) => `
                <div class="glass p-6 rounded-xl hover-scale hover-glow transition-all duration-300" 
                     style="animation-delay: ${index * 0.2}s;">
                    <div class="text-center space-y-4">
                        <div class="inline-flex p-3 rounded-xl bg-gradient-primary">
                            <i data-lucide="${specialty.icon}" class="w-6 h-6 text-white"></i>
                        </div>
                        
                        <h3 class="text-lg font-semibold">${specialty.title}</h3>
                        
                        <p class="text-sm text-slate-400 leading-relaxed">
                            ${specialty.description}
                        </p>
                        
                        <div class="flex flex-wrap gap-1 justify-center">
                            ${specialty.tech.map(tech => `
                                <span class="text-xs border border-blue-500/30 text-blue-400 px-2 py-1 rounded">
                                    ${tech}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // Populate filter buttons
        function populateFilterButtons() {
            const container = document.getElementById('filter-buttons');
            container.innerHTML = categories.map(category => `
                <button class="filter-btn ${activeFilter === category.id ? 'btn-primary' : 'btn-outline'} hover-scale transition-all duration-300 px-4 py-2 rounded-lg flex items-center space-x-2" 
                        data-filter="${category.id}">
                    <i data-lucide="filter" class="w-4 h-4"></i>
                    <span>${category.label}</span>
                </button>
            `).join('');
            
            // Add event listeners
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    activeFilter = btn.dataset.filter;
                    populateFilterButtons();
                    populateProjects();
                });
            });
            
            lucide.createIcons();
        }

        // Populate projects
        function populateProjects() {
            const container = document.getElementById('projects-container');
            const filteredProjects = activeFilter === 'all' 
                ? projects 
                : projects.filter(project => project.category === activeFilter);

            container.innerHTML = filteredProjects.map((project, index) => `
                <div class="project-card glass overflow-hidden hover-scale hover-glow transition-all duration-500 rounded-xl ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}" 
                     style="animation-delay: ${index * 0.1}s;">
                    <div class="relative group">
                        <img src="${project.image}" alt="${project.title}" 
                             class="project-image w-full h-48 object-cover transition-transform duration-500">
                        <div class="project-overlay absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        
                        <!-- Project Links Overlay -->
                        <div class="project-overlay absolute inset-0 flex items-center justify-center">
                            <div class="flex space-x-3">
                                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" 
                                   class="btn-primary p-3 rounded-lg">
                                    <i data-lucide="external-link" class="w-4 h-4"></i>
                                </a>
                                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                                   class="btn-outline p-3 rounded-lg">
                                    <i data-lucide="github" class="w-4 h-4"></i>
                                </a>
                            </div>
                        </div>

                        ${project.featured ? '<span class="absolute top-4 right-4 bg-gradient-accent px-3 py-1 rounded-full text-sm font-medium">Featured</span>' : ''}
                    </div>

                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                            ${project.title}
                        </h3>
                        
                        <p class="text-slate-400 mb-4 leading-relaxed">
                            ${project.description}
                        </p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.tech.map(tech => `
                                <span class="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-2 py-1 rounded">
                                    ${tech}
                                </span>
                            `).join('')}
                        </div>

                        <div class="flex space-x-3 pt-2">
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" 
                               class="flex-1 btn-primary hover-scale px-4 py-2 rounded-lg text-center flex items-center justify-center space-x-2">
                                <i data-lucide="external-link" class="w-4 h-4"></i>
                                <span>Live Demo</span>
                            </a>
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                               class="btn-outline p-2 rounded-lg">
                                <i data-lucide="github" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');
            
            lucide.createIcons();
        }

        // Populate experience timeline
        function populateExperience() {
            const container = document.getElementById('experience-timeline');
            container.innerHTML = experiences.map((exp, index) => `
                <div class="glass ml-12 hover-scale hover-glow transition-all duration-300 rounded-xl relative" 
                     style="animation-delay: ${index * 0.2}s;">
                    <!-- Timeline Dot -->
                    <div class="absolute -left-8 top-6 w-4 h-4 rounded-full bg-gradient-primary glow-primary"></div>

                    <div class="p-6">
                        <div class="flex flex-wrap items-start justify-between mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">${exp.title}</h3>
                                <div class="flex items-center space-x-4 text-slate-400">
                                    <div class="flex items-center space-x-1">
                                        <i data-lucide="${exp.type === 'work' ? 'building-2' : 'graduation-cap'}" class="w-4 h-4"></i>
                                        <span>${exp.company}</span>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <i data-lucide="map-pin" class="w-4 h-4"></i>
                                        <span>${exp.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-1 text-blue-400 font-medium">
                                <i data-lucide="calendar-days" class="w-4 h-4"></i>
                                <span>${exp.period}</span>
                            </div>
                        </div>

                        <p class="text-slate-400 mb-4 leading-relaxed">
                            ${exp.description}
                        </p>

                        <div class="space-y-2 mb-4">
                            ${exp.achievements.map(achievement => `
                                <div class="flex items-start space-x-2">
                                    <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                                    <span class="text-sm text-slate-400">${achievement}</span>
                                </div>
                            `).join('')}
                        </div>

                        <div class="flex flex-wrap gap-2">
                            ${exp.tech.map(tech => `
                                <span class="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-2 py-1 rounded">
                                    ${tech}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
            
            lucide.createIcons();
        }

        // Populate certifications
        function populateCertifications() {
            const container = document.getElementById('certifications-container');
            container.innerHTML = certifications.map((cert, index) => `
                <div class="p-4 rounded-lg bg-slate-700/20 border border-blue-500/10 hover-scale transition-all duration-300" 
                     style="animation-delay: ${index * 0.1}s;">
                    <h4 class="font-semibold text-sm mb-1">${cert.name}</h4>
                    <p class="text-xs text-slate-400 mb-2">${cert.issuer}</p>
                    <div class="flex items-center space-x-1 text-blue-400">
                        <i data-lucide="calendar-days" class="w-3 h-3"></i>
                        <span class="text-xs font-medium">${cert.year}</span>
                    </div>
                </div>
            `).join('');
            
            lucide.createIcons();
        }

        // Populate skills progress
        function populateSkillsProgress() {
            const container = document.getElementById('skills-progress-container');
            container.innerHTML = skillsProgress.map((item, index) => `
                <div style="animation-delay: ${index * 0.1}s;">
                    <div class="flex justify-between text-sm mb-2">
                        <span class="font-medium">${item.skill}</span>
                        <span class="text-blue-400">${item.level}%</span>
                    </div>
                    <div class="w-full bg-slate-700/30 rounded-full h-2">
                        <div class="skill-bar h-2 rounded-full transition-all duration-1000" 
                             style="width: ${item.level}%"></div>
                    </div>
                </div>
            `).join('');
        }

        // Populate contact info
        function populateContactInfo() {
            const container = document.getElementById('contact-info');
            container.innerHTML = contactInfo.map((info, index) => `
                <a href="${info.href}" 
                   class="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/5 transition-colors group" 
                   style="animation-delay: ${index * 0.1}s;">
                    <div class="p-2 rounded-lg bg-gradient-primary">
                        <i data-lucide="${info.icon}" class="w-5 h-5 text-white"></i>
                    </div>
                    <div>
                        <p class="text-sm text-slate-400">${info.label}</p>
                        <p class="font-medium group-hover:text-blue-400 transition-colors">
                            ${info.value}
                        </p>
                    </div>
                </a>
            `).join('');
            
            lucide.createIcons();
        }

        // Populate social links
        function populateSocialLinks() {
            const container = document.getElementById('social-links');
            container.innerHTML = socialLinks.map((social, index) => `
                <a href="${social.href}" target="_blank" rel="noopener noreferrer" 
                   class="p-3 glass rounded-full hover-scale transition-all duration-300 hover:text-blue-400" 
                   style="animation-delay: ${index * 0.1}s;" 
                   aria-label="${social.label}">
                    <i data-lucide="${social.icon}" class="w-5 h-5"></i>
                </a>
            `).join('');
            
            lucide.createIcons();
        }

        // Form handling
         // Form handling with WhatsApp integration
        function initContactForm() {
            const form = document.getElementById('contact-form');
            const submitBtn = form.querySelector('button[type="submit"]');
            const submitText = document.getElementById('submit-text');
            const submitIcon = document.getElementById('submit-icon');
            
            // Error elements
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const subjectError = document.getElementById('subject-error');
            const messageError = document.getElementById('message-error');
            
            // Validate email format
            function isValidEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                // Reset error messages
                nameError.classList.add('hidden');
                emailError.classList.add('hidden');
                subjectError.classList.add('hidden');
                messageError.classList.add('hidden');
                
                // Get form values
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Validate form
                let isValid = true;
                
                if (!name) {
                    nameError.classList.remove('hidden');
                    isValid = false;
                }
                
                if (!email || !isValidEmail(email)) {
                    emailError.classList.remove('hidden');
                    isValid = false;
                }
                
                if (!subject) {
                    subjectError.classList.remove('hidden');
                    isValid = false;
                }
                
                if (!message) {
                    messageError.classList.remove('hidden');
                    isValid = false;
                }
                
                if (!isValid) {
                    return;
                }
                
                // Show loading state
                submitBtn.disabled = true;
                submitText.textContent = 'Sending...';
                submitIcon.setAttribute('data-lucide', 'loader');
                submitIcon.classList.add('animate-spin');
                lucide.createIcons();
                
                try {
                    // Format the message for WhatsApp
                    const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
                    
                    // Encode the message for URL
                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    
                    // Your WhatsApp number with country code (remove any spaces or special characters)
                    const whatsappNumber = '258872622721';
                    
                    // Create WhatsApp link
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                    
                    // Open WhatsApp in a new tab
                    window.open(whatsappUrl, '_blank');
                    
                    // Show success notification
                    showNotification();
                    
                    // Reset form
                    form.reset();
                } catch (error) {
                    console.error('Error sending message:', error);
                    // You could show an error notification here if needed
                } finally {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Send via WhatsApp';
                    submitIcon.setAttribute('data-lucide', 'send');
                    submitIcon.classList.remove('animate-spin');
                    lucide.createIcons();
                }
            });
        }

        // Show notification
        function showNotification() {
            const notification = document.getElementById('notification');
            notification.classList.remove('hidden');
            notification.classList.add('animate-fadeInUp');
            
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 5000);
        }

        // Scroll animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -10% 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            }, observerOptions);

            // Observe all sections for scroll animations
            const sections = document.querySelectorAll('section > div');
            sections.forEach((section) => observer.observe(section));
        }

        // Initialize everything
        function init() {
            // Set current year
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Initialize components
            initTypingAnimation();
            initMobileMenu();
            populateSkills();
            populateSpecialties();
            populateFilterButtons();
            populateProjects();
            populateExperience();
            populateCertifications();
            populateSkillsProgress();
            populateContactInfo();
            populateSocialLinks();
            initContactForm();
            initScrollAnimations();
            
            // Initialize Lucide icons
            lucide.createIcons();
            
            // Add scroll listener for navigation
            window.addEventListener('scroll', updateActiveNavLink);
            
            // Initial nav update
            updateActiveNavLink();
        }

        // Start when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    