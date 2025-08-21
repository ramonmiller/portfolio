// Dados dos projetos
const projects = [
    {
        id: 1,
        title: "E-commerce Moderno",
        category: "web",
        description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Sistema de pagamentos integrado e painel administrativo.",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        image: "🛒"
    },
    {
        id: 2,
        title: "App de Delivery",
        category: "mobile",
        description: "Aplicativo mobile para delivery de comida com geolocalização, pagamentos e tracking em tempo real.",
        tech: ["React Native", "Firebase", "Maps API"],
        image: "🍕"
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        category: "web",
        description: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios personalizáveis.",
        tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
        image: "📊"
    },
    {
        id: 4,
        title: "Identidade Visual Tech",
        category: "design",
        description: "Criação completa de identidade visual para startup de tecnologia, incluindo logo, paleta de cores e guidelines.",
        tech: ["Figma", "Illustrator", "Photoshop"],
        image: "🎨"
    },
    {
        id: 5,
        title: "API de Microserviços",
        category: "backend",
        description: "Arquitetura de microserviços escalável com Docker, Kubernetes e monitoramento avançado.",
        tech: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
        image: "⚙️"
    },
    {
        id: 6,
        title: "Sistema de Gestão",
        category: "web",
        description: "Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios.",
        tech: ["Angular", "Spring Boot", "MySQL"],
        image: "💼"
    }
];

// Dados dos certificados
const certificates = [
    {
        id: 1,
        title: "Cursos da Alura",
        institution: "Alura",
        date: "2024 - atual",
        description: "Desenvolvimento de jogos 2D e 3D para web e mobile utilizando a Unity. Criação de páginas web dinâmicas e responsivas com HTML, CSS e JavaScript. Lógica de programação, Git e GitHub, Game Design, autodesenvolvimento, gestão e Inteligência Artificial.",
        skills: ["Programação", "Frontend", "DevOps", "UX & UI Design", "Inovação & Gestão", "Inteligência Artificial"],
        link: "https://cursos.alura.com.br/user/ramonmiller/fullCertificate/8b01fa48b78096129684826d8de2ca13",
        featured: true,
        icon: "a"
    },
    {
        id: 2,
        title: "Cursos da Fundação Bradesco",
        institution: "Escola Virtual Bradesco",
        date: "2023",
        description: "Programação Orientada a Objetos (POO), Python, HTML, Desenvolvimento Web com HTML, CSS e JavaScript.",
        skills: ["React", "JavaScript", "Testing", "Performance"],
        link: "https://drive.google.com/drive/folders/1y9nmD40NDPOet8-soedo9CrVsirwPj3c?usp=sharing",
        featured: false,
        icon: "⚛️"
    },
    {
        id: 3,
        title: "Incode Tech School",
        institution: "Oxygeni - Ceuma",
        date: "2023 - atual",
        description: "",
        skills: ["Node.js", "Express", "APIs", "Microservices"],
        link: "#",
        featured: false,
        icon: "🟢"
    },
    {
        id: 4,
        title: "UX/UI Design Professional",
        institution: "Google",
        category: "design",
        date: "2023",
        description: "Certificação em design de experiência do usuário, prototipagem, pesquisa de usuário e design thinking.",
        skills: ["UX Design", "UI Design", "Figma", "User Research"],
        link: "#",
        featured: true,
        icon: "🎨"
    },
    {
        id: 5,
        title: "Scrum Master Certified",
        institution: "Scrum Alliance",
        category: "management",
        date: "2022",
        description: "Certificação em metodologias ágeis, gestão de projetos e liderança de equipes de desenvolvimento.",
        skills: ["Scrum", "Agile", "Project Management", "Leadership"],
        link: "#",
        featured: false,
        icon: "🏃"
    },
    {
        id: 6,
        title: "Python Data Science",
        institution: "IBM",
        category: "backend",
        date: "2022",
        description: "Certificação em ciência de dados com Python, machine learning, análise estatística e visualização de dados.",
        skills: ["Python", "Data Science", "Machine Learning", "Pandas"],
        link: "#",
        featured: false,
        icon: "🐍"
    }
];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeNavigation();
    initializeAnimations();
    initializeSkillBars();
    initializeProjects();
    initializeCertificates();
    initializeContactForm();
});

// Sistema de partículas
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(113, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Conectar partículas próximas
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(113, 255, 255, ${0.1 * (1 - distance / 100)})`;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Redimensionar canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Navegação
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu mobile
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Navegação suave e fechamento do menu mobile
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Fechar menu mobile
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            
            // Atualizar link ativo
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Atualizar link ativo no scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Animações de entrada
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.feature-card, .project-card, .certificate-card, .skill-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Barras de habilidades
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Sistema de projetos
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Renderizar projetos
    function renderProjects(projectsToShow = projects) {
        projectsGrid.innerHTML = '';
        
        projectsToShow.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            projectCard.style.animationDelay = `${index * 0.1}s`;
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <div class="project-placeholder">${project.image}</div>
                    <div class="project-overlay">
                        <button class="btn btn-primary">Ver Projeto</button>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-category">${getCategoryName(project.category)}</p>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Reobservar novos elementos
        const newCards = projectsGrid.querySelectorAll('.project-card');
        newCards.forEach(card => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }
    
    // Filtros de projetos
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Atualizar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar projetos
            const filteredProjects = filter === 'todos' 
                ? projects 
                : projects.filter(project => project.category === filter);
            
            renderProjects(filteredProjects);
        });
    });
    
    // Renderizar projetos iniciais
    renderProjects();
}

// Sistema de certificados
function initializeCertificates() {
    const certificatesGrid = document.getElementById('certificates-grid');
    const filterButtons = document.querySelectorAll('.cert-filter-btn');
    
    // Renderizar certificados
    function renderCertificates(certificatesToShow = certificates) {
        certificatesGrid.innerHTML = '';
        
        certificatesToShow.forEach((cert, index) => {
            const certCard = document.createElement('div');
            certCard.className = `certificate-card fade-in ${cert.featured ? 'featured' : ''}`;
            certCard.style.animationDelay = `${index * 0.1}s`;
            
            certCard.innerHTML = `
                <div class="cert-header">
                    <div class="cert-icon">${cert.icon}</div>
                    <div class="cert-info">
                        <h4>${cert.title}</h4>
                        <p class="cert-institution">${cert.institution}</p>
                    </div>
                </div>
                <p class="cert-date">${cert.date}</p>
                <p class="cert-description">${cert.description}</p>
                <div class="cert-skills">
                    ${cert.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
                <a href="${cert.link}" class="cert-link" target="_blank">
                    Ver Certificado
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </a>
            `;
            
            certificatesGrid.appendChild(certCard);
        });
        
        // Reobservar novos elementos
        const newCards = certificatesGrid.querySelectorAll('.certificate-card');
        newCards.forEach(card => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }
    
    // Filtros de certificados
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Atualizar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar certificados
            const filteredCertificates = filter === 'todos' 
                ? certificates 
                : certificates.filter(cert => cert.category === filter);
            
            renderCertificates(filteredCertificates);
        });
    });
    
    // Renderizar certificados iniciais
    renderCertificates();
}

// Formulário de contato
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simular envio
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<span>Enviando...</span>';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Retornarei em breve.');
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Funções auxiliares
function getCategoryName(category) {
    const categories = {
        web: 'Desenvolvimento Web',
        mobile: 'Desenvolvimento Mobile',
        design: 'Design',
        backend: 'Backend'
    };
    return categories[category] || category;
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});