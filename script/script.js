// Dados dos projetos
const projects = [
    {
        id: 1,
        category: "web",
        title: "Grow Star",
        description: "A Grow Star surgiu para resolver problemas como: falta de visibilidade para freelancers, dificuldade de acesso dos consumidores a certos serviços, pouco apoio aos MEIs e falhas na comunicação entre empresas e MEIs.",
        tech: ["Figma", "HTML", "CSS"],
        image: "/assets/projetos/grow-star.png"
    },
    {
        id: 3,
        title: "Form de Inscrição",
        category: "web",
        description: "No Programa Trilhas Inova, foi proposto um desafio: criar uma interface de usuário para o processo de inscrição no próprio Programa Trilhas Inova, utilizando os conhecimentos adquiridos em HTML e CSS.",
        tech: ["Figma", "HTML", "CSS"],
        image: "/assets/projetos/screenshot-inova-project.png"
    },
    {
        id: 2,
        title: "Airplane Game",
        category: "game",
        description: "No Programa Trilhas Inova, participei do curso de Programação de Jogos e, com o aprendizado, desenvolvi um jogo inspirado no Flappy Bird.",
        tech: ["C#", "Unity"],
        image: "/assets/projetos/screenshot-airplane-game.png"
    }
];

// Dados dos certificados
const certificates = [
    {
        id: 1,
        title: "Cursos da Alura - 216h",
        institution: "Alura",
        date: "2024 - atual",
        description: "Desenvolvimento de jogos 2D e 3D para web e mobile utilizando a Unity. Criação de páginas web dinâmicas e responsivas com HTML, CSS e JavaScript. Lógica de programação, Git e GitHub, Game Design, autodesenvolvimento, gestão e Inteligência Artificial.",
        skills: ["Programação", "Frontend", "DevOps", "UX & UI Design", "Inovação & Gestão", "Inteligência Artificial"],
        link: "https://cursos.alura.com.br/user/ramonmiller/fullCertificate/8b01fa48b78096129684826d8de2ca13",
        featured: false,
        icon: "a"
    },
    {
        id: 2,
        title: "Incode Tech School - 1300h",
        institution: "Oxygeni - Ceuma",
        date: "2023 - atual",
        description: "O curso oferece trilhas de aprendizado com empresas parceiras, com projetos reais para os alunos estarem inseridos nas demandas do mercado de trabalho.",
        skills: ["Programação", "Frontend", "UX & UI Design", "Inteligência Artificial"],
        link: "#",
        featured: true,
        icon: "🟢"
    },
    {
        id: 3,
        title: "Cursos da Fundação Bradesco - 57h",
        institution: "Escola Virtual Bradesco",
        date: "2023",
        description: "Programação Orientada a Objetos (POO), Python, HTML, Desenvolvimento Web com HTML, CSS e JavaScript.",
        skills: ["Programação Orientada a Objetos", "Python", "Desenvolvimento Web", "HTML", "CSS", "JavaScript"],
        link: "https://drive.google.com/drive/folders/1y9nmD40NDPOet8-soedo9CrVsirwPj3c?usp=sharing",
        featured: false,
        icon: "⚛️"
    },

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


const el = document.querySelector(".name");
const text = "Ramon Miller";
let i = 1; // começa a partir da segunda letra
let deleting = false;

function typeEffect() {
  const firstLetter = text[0]; // primeira letra fixa

  if (!deleting) {
    // escrevendo a partir da segunda letra
    el.textContent = firstLetter + text.slice(1, i++);
    if (i > text.length) {
      deleting = true;
      setTimeout(typeEffect, 1500); // pausa antes de apagar
      return;
    }
  } else {
    // apagando a partir da segunda letra
    el.textContent = firstLetter + text.slice(1, i--);
    if (i <= 1) { // nunca apaga a primeira letra
      deleting = false;
      i = 1;
    }
  }

  const speed = deleting ? 80 : 120;
  setTimeout(typeEffect, speed);
}

typeEffect();

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

        // Sempre usa <img>
        const imageContent = `<img src="${project.image}" alt="${project.title}" class="project-img">`;

        projectCard.innerHTML = `
            <div class="project-image">
                ${imageContent}
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
        backend: 'Backend',
        game: 'Desenvolvimento de Jogos'
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