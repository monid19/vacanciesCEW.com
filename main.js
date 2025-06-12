const vacancies = [
    {
        id: 1,
        title: "Marketing Intern at CEW",
        location: "Leeuwarden",
        type: "On-site",
        hours: "40 hours",
        level: "Internship",
        language: "EN",
        salary: "Paid internship",
        description: "We are seeking a highly motivated and creative individual to join our CEW Communications and Marketing team as a Digital and Creative Marketing Intern. This internship offers an exciting opportunity to gain hands-on experience in the digital marketing, social media, and activations fields.",
        tasks: [
            "Digital campaigns: Assist in development of digital campaigns from strategy to production",
            "Social media: Content planning and scheduling for various platforms",
            "Content Curation & Filming: Collaborate with creative agency to identify trending content"
        ],
        requirements: [
            "Currently studying Marketing, Communications or related field",
            "Creative mindset with attention to detail",
            "Fluent in English",
            "Knowledge of social media platforms"
        ]
    },
    {
        id: 2,
        title: "Communications Specialist at CIV Water",
        location: "Leeuwarden",
        type: "On-site",
        hours: "40 hours",
        level: "Mid-Senior",
        language: "NL-EN",
        salary: "2000-2500€",
        description: "Join our dynamic communications team to develop and implement strategic communication plans for water management projects across the Netherlands.",
        tasks: [
            "Develop communication strategies for large-scale water projects",
            "Manage stakeholder relationships and public consultations",
            "Create content for various communication channels",
            "Coordinate with government agencies and local communities"
        ],
        requirements: [
            "Bachelor's degree in Communications, Journalism or related field",
            "3+ years experience in strategic communications",
            "Fluent in Dutch and English",
            "Experience with crisis communication preferred"
        ]
    },
    {
        id: 3,
        title: "Communications Intern at BSC",
        location: "Leeuwarden",
        type: "On-site",
        hours: "40 hours",
        level: "Internship",
        language: "NL",
        salary: "Paid internship",
        description: "Exciting opportunity to join the BSC communications team and gain experience in corporate communications, event management, and digital marketing.",
        tasks: [
            "Support internal and external communications",
            "Assist with event planning and execution",
            "Create content for website and social media",
            "Help with press releases and media relations"
        ],
        requirements: [
            "Currently studying Communications or Marketing",
            "Native Dutch speaker",
            "Strong writing skills",
            "Interest in corporate communications"
        ]
    },
    {
        id: 4,
        title: "Digital Marketing Specialist",
        location: "Amsterdam",
        type: "Hybrid",
        hours: "32-40 hours",
        level: "Entry",
        language: "EN",
        salary: "2800-3200€",
        description: "Looking for a creative digital marketing specialist to join our growing team and help drive our online presence and digital campaigns.",
        tasks: [
            "Manage Google Ads and social media advertising campaigns",
            "Create and optimize landing pages for conversion",
            "Analyze campaign performance and provide insights",
            "Collaborate with design team on creative assets"
        ],
        requirements: [
            "1-2 years experience in digital marketing",
            "Google Ads and Analytics certification preferred",
            "Excellent English communication skills",
            "Experience with marketing automation tools"
        ]
    },
    {
        id: 5,
        title: "Content Marketing Manager",
        location: "Utrecht",
        type: "Remote",
        hours: "40 hours",
        level: "Mid-Senior",
        language: "NL-EN",
        salary: "3500-4200€",
        description: "Lead our content marketing strategy and create compelling content that drives engagement and conversions across all digital channels.",
        tasks: [
            "Develop and execute comprehensive content strategy",
            "Manage editorial calendar and content production",
            "Optimize content for SEO and user engagement",
            "Lead a team of content creators and freelancers"
        ],
        requirements: [
            "4+ years experience in content marketing",
            "Strong leadership and project management skills",
            "Fluent in Dutch and English",
            "Experience with CMS and marketing automation platforms"
        ]
    }
];

let selectedVacancy = null;

function renderVacancies(vacanciesToRender = vacancies) {
    const container = document.getElementById('vacanciesContainer');
    
    if (vacanciesToRender.length === 0) {
        container.innerHTML = '<div class="no-results">No vacancies found matching your criteria.</div>';
        return;
    }

    container.innerHTML = vacanciesToRender.map(vacancy => `
        <div class="vacancy-card ${selectedVacancy?.id === vacancy.id ? 'selected' : ''}" onclick="selectVacancy(${vacancy.id})">
            <div class="vacancy-title">${vacancy.title}</div>

                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.99993 1.28571C12.0178 1.28571 14.4642 3.53571 14.4642 7.39285C14.4642 10.3275 11.301 14.5649 9.78807 16.4237C9.35286 16.9393 8.62225 16.9187 8.21211 16.4237C6.69947 14.5658 3.53564 10.3281 3.53564 7.39285C3.53564 3.53571 5.98204 1.28571 8.99993 1.28571ZM8.99993 4.82142C8.48844 4.82142 7.9979 5.02461 7.63622 5.38628C7.27455 5.74796 7.07136 6.2385 7.07136 6.74999C7.07136 7.26148 7.27455 7.75202 7.63622 8.1137C7.9979 8.47537 8.48844 8.67856 8.99993 8.67856C9.51142 8.67856 10.002 8.47537 10.3636 8.1137C10.7253 7.75202 10.9285 7.26148 10.9285 6.74999C10.9285 6.2385 10.7253 5.74796 10.3636 5.38628C10.002 5.02461 9.51142 4.82142 8.99993 4.82142Z" fill="#022B3C"/>
                </svg>${vacancy.location}</div>
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                <path d="M14.25 12.3276H12.6667V13.911H14.25M14.25 9.16097H12.6667V10.7443H14.25M15.8334 15.4943H9.50004V13.911H11.0834V12.3276H9.50004V10.7443H11.0834V9.16097H9.50004V7.57764H15.8334M7.91671 5.9943H6.33337V4.41097H7.91671M7.91671 9.16097H6.33337V7.57764H7.91671M7.91671 12.3276H6.33337V10.7443H7.91671M7.91671 15.4943H6.33337V13.911H7.91671M4.75004 5.9943H3.16671V4.41097H4.75004M4.75004 9.16097H3.16671V7.57764H4.75004M4.75004 12.3276H3.16671V10.7443H4.75004M4.75004 15.4943H3.16671V13.911H4.75004M9.50004 5.9943V4.82764C9.50004 3.72307 8.60461 2.82764 7.50004 2.82764H3.58337C2.4788 2.82764 1.58337 3.72307 1.58337 4.82764V15.0776C1.58337 16.1822 2.4788 17.0776 3.58337 17.0776H15.4167C16.5213 17.0776 17.4167 16.1822 17.4167 15.0776V7.9943C17.4167 6.88973 16.5213 5.9943 15.4167 5.9943H9.50004Z" fill="#022B3C"/>
                </svg>${vacancy.type}</div>
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M3.68193 2.81796C4.10834 1.89713 5.57247 1.89713 8.50001 1.89713C11.4276 1.89713 12.8917 1.89713 13.3181 2.81796C13.3549 2.89635 13.3856 2.97804 13.4102 3.06304C13.7006 4.0455 12.665 5.1845 10.5953 7.46179L9.20834 8.98046L10.5953 10.4984C12.665 12.7764 13.6999 13.9154 13.4102 14.8972C13.3856 14.9815 13.3549 15.0639 13.3181 15.1437C12.8917 16.0638 11.4276 16.0638 8.50001 16.0638C5.57247 16.0638 4.10834 16.0638 3.68193 15.143C3.64523 15.0636 3.61445 14.9817 3.58984 14.8979C3.29943 13.9154 4.33501 12.7764 6.40476 10.4991L7.79168 8.98046L6.40476 7.4625C4.33501 5.18379 3.30084 4.0455 3.58984 3.06375C3.6144 2.97875 3.64509 2.89729 3.68193 2.81796Z" fill="#022B3C"/>
                </svg> ${vacancy.hours}</div>
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M9.99754 13.4078C9.62643 13.4078 9.30976 13.2759 9.04754 13.012C8.78532 12.7481 8.65421 12.4306 8.65421 12.0595C8.65421 11.6884 8.78615 11.3717 9.05004 11.1095C9.31393 10.8473 9.63171 10.7162 10.0034 10.7162C10.375 10.7162 10.6917 10.8484 10.9534 11.1128C11.215 11.3773 11.3462 11.6948 11.3467 12.0653C11.3473 12.4359 11.215 12.7525 10.95 13.0153C10.685 13.2781 10.3675 13.4092 9.99754 13.4087M6.97921 6.96616H13.0209L14.0834 4.80866C14.2012 4.58477 14.1962 4.36755 14.0684 4.15699C13.9406 3.94643 13.7489 3.84116 13.4934 3.84116H6.50671C6.25115 3.84116 6.05949 3.94643 5.93171 4.15699C5.80393 4.36755 5.79893 4.58505 5.91671 4.80949L6.97921 6.96616ZM7.19254 17.1745H12.8075C13.8798 17.1745 14.7909 16.7992 15.5409 16.0487C16.2914 15.2981 16.6667 14.3853 16.6667 13.3103C16.6667 12.8614 16.5898 12.4242 16.4359 11.9987C16.282 11.5731 16.0598 11.1856 15.7692 10.8362L13.2342 7.79949H6.76587L4.23087 10.8362C3.94032 11.1856 3.7181 11.5731 3.56421 11.9987C3.41032 12.4237 3.33337 12.8609 3.33337 13.3103C3.33337 14.3853 3.70865 15.2981 4.45921 16.0487C5.20976 16.7992 6.12087 17.1745 7.19254 17.1745Z" fill="#022B3C"/>
                </svg> ${vacancy.salary}</div>
        </div>
    `).join('');
}

function selectVacancy(vacancyId) {
    selectedVacancy = vacancies.find(v => v.id === vacancyId);
    const infoContainer = document.getElementById('informationContainer');
    
    if (selectedVacancy) {
        infoContainer.innerHTML = `
            <div class="info-title">${selectedVacancy.title}</div>
            <div class="vacancy-details" style="margin-bottom: 20px; flex-direction: row;">
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.99993 1.28571C12.0178 1.28571 14.4642 3.53571 14.4642 7.39285C14.4642 10.3275 11.301 14.5649 9.78807 16.4237C9.35286 16.9393 8.62225 16.9187 8.21211 16.4237C6.69947 14.5658 3.53564 10.3281 3.53564 7.39285C3.53564 3.53571 5.98204 1.28571 8.99993 1.28571ZM8.99993 4.82142C8.48844 4.82142 7.9979 5.02461 7.63622 5.38628C7.27455 5.74796 7.07136 6.2385 7.07136 6.74999C7.07136 7.26148 7.27455 7.75202 7.63622 8.1137C7.9979 8.47537 8.48844 8.67856 8.99993 8.67856C9.51142 8.67856 10.002 8.47537 10.3636 8.1137C10.7253 7.75202 10.9285 7.26148 10.9285 6.74999C10.9285 6.2385 10.7253 5.74796 10.3636 5.38628C10.002 5.02461 9.51142 4.82142 8.99993 4.82142Z" fill="#022B3C"/>
                </svg> ${selectedVacancy.location}</div>
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                <path d="M14.25 12.3276H12.6667V13.911H14.25M14.25 9.16097H12.6667V10.7443H14.25M15.8334 15.4943H9.50004V13.911H11.0834V12.3276H9.50004V10.7443H11.0834V9.16097H9.50004V7.57764H15.8334M7.91671 5.9943H6.33337V4.41097H7.91671M7.91671 9.16097H6.33337V7.57764H7.91671M7.91671 12.3276H6.33337V10.7443H7.91671M7.91671 15.4943H6.33337V13.911H7.91671M4.75004 5.9943H3.16671V4.41097H4.75004M4.75004 9.16097H3.16671V7.57764H4.75004M4.75004 12.3276H3.16671V10.7443H4.75004M4.75004 15.4943H3.16671V13.911H4.75004M9.50004 5.9943V4.82764C9.50004 3.72307 8.60461 2.82764 7.50004 2.82764H3.58337C2.4788 2.82764 1.58337 3.72307 1.58337 4.82764V15.0776C1.58337 16.1822 2.4788 17.0776 3.58337 17.0776H15.4167C16.5213 17.0776 17.4167 16.1822 17.4167 15.0776V7.9943C17.4167 6.88973 16.5213 5.9943 15.4167 5.9943H9.50004Z" fill="#022B3C"/>
                </svg> ${selectedVacancy.type}</div>
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M3.68193 2.81796C4.10  834 1.89713 5.57247 1.89713 8.50001 1.89713C11.4276 1.89713 12.8917 1.89713 13.3181 2.81796C13.3549 2.89635 13.3856 2.97804 13.4102 3.06304C13.7006 4.0455 12.665 5.1845 10.5953 7.46179L9.20834 8.98046L10.5953 10.4984C12.665 12.7764 13.6999 13.9154 13.4102 14.8972C13.3856 14.9815 13.3549 15.0639 13.3181 15.1437C12.8917 16.0638 11.4276 16.0638 8.50001 16.0638C5.57247 16.0638 4.10834 16.0638 3.68193 15.143C3.64523 15.0636 3.61445 14.9817 3.58984 14.8979C3.29943 13.9154 4.33501 12.7764 6.40476 10.4991L7.79168 8.98046L6.40476 7.4625C4.33501 5.18379 3.30084 4.0455 3.58984 3.06375C3.6144 2.97875 3.64509 2.89729 3.68193 2.81796Z" fill="#022B3C"/>
                </svg> ${selectedVacancy.hours}</div>
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M9.99754 13.4078C9.62643 13.4078 9.30976 13.2759 9.04754 13.012C8.78532 12.7481 8.65421 12.4306 8.65421 12.0595C8.65421 11.6884 8.78615 11.3717 9.05004 11.1095C9.31393 10.8473 9.63171 10.7162 10.0034 10.7162C10.375 10.7162 10.6917 10.8484 10.9534 11.1128C11.215 11.3773 11.3462 11.6948 11.3467 12.0653C11.3473 12.4359 11.215 12.7525 10.95 13.0153C10.685 13.2781 10.3675 13.4092 9.99754 13.4087M6.97921 6.96616H13.0209L14.0834 4.80866C14.2012 4.58477 14.1962 4.36755 14.0684 4.15699C13.9406 3.94643 13.7489 3.84116 13.4934 3.84116H6.50671C6.25115 3.84116 6.05949 3.94643 5.93171 4.15699C5.80393 4.36755 5.79893 4.58505 5.91671 4.80949L6.97921 6.96616ZM7.19254 17.1745H12.8075C13.8798 17.1745 14.7909 16.7992 15.5409 16.0487C16.2914 15.2981 16.6667 14.3853 16.6667 13.3103C16.6667 12.8614 16.5898 12.4242 16.4359 11.9987C16.282 11.5731 16.0598 11.1856 15.7692 10.8362L13.2342 7.79949H6.76587L4.23087 10.8362C3.94032 11.1856 3.7181 11.5731 3.56421 11.9987C3.41032 12.4237 3.33337 12.8609 3.33337 13.3103C3.33337 14.3853 3.70865 15.2981 4.45921 16.0487C5.20976 16.7992 6.12087 17.1745 7.19254 17.1745Z" fill="#022B3C"/>
                </svg> ${selectedVacancy.salary}</div>  
                <div class="vacancy-detail"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.991 0C4.023 0 0 4.032 0 9C0 13.968 4.023 18 8.991 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 8.991 0ZM15.228 5.4H12.573C12.2909 4.28545 11.8738 3.20949 11.331 2.196C12.9727 2.7612 14.3561 3.89855 15.228 5.4ZM9 1.836C9.747 2.916 10.332 4.113 10.719 5.4H7.281C7.668 4.113 8.253 2.916 9 1.836ZM2.034 10.8C1.89 10.224 1.8 9.621 1.8 9C1.8 8.379 1.89 7.776 2.034 7.2H5.076C5.004 7.794 4.95 8.388 4.95 9C4.95 9.612 5.004 10.206 5.076 10.8H2.034ZM2.772 12.6H5.427C5.715 13.725 6.129 14.805 6.669 15.804C5.02609 15.2409 3.64207 14.103 2.772 12.6ZM5.427 5.4H2.772C3.64207 3.89696 5.02609 2.75905 6.669 2.196C6.12619 3.20949 5.70911 4.28545 5.427 5.4ZM9 16.164C8.253 15.084 7.668 13.887 7.281 12.6H10.719C10.332 13.887 9.747 15.084 9 16.164ZM11.106 10.8H6.894C6.813 10.206 6.75 9.612 6.75 9C6.75 8.388 6.813 7.785 6.894 7.2H11.106C11.187 7.785 11.25 8.388 11.25 9C11.25 9.612 11.187 10.206 11.106 10.8ZM11.331 15.804C11.871 14.805 12.285 13.725 12.573 12.6H15.228C14.3561 14.1014 12.9727 15.2388 11.331 15.804ZM12.924 10.8C12.996 10.206 13.05 9.612 13.05 9C13.05 8.388 12.996 7.794 12.924 7.2H15.966C16.11 7.776 16.2 8.379 16.2 9C16.2 9.621 16.11 10.224 15.966 10.8H12.924Z" fill="#022B3C"/>
                </svg> ${selectedVacancy.language}</div>
            </div>
            
            <div class="info-section">
                <h3>About this role</h3>
                <p>${selectedVacancy.description}</p>
            </div>
            
            <div class="info-section">
                <h3>Your tasks</h3>
                <ul>
                    ${selectedVacancy.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
            
            <div class="info-section">
                <h3>Requirements</h3>
                <ul>
                    ${selectedVacancy.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>  
               
            </div>


        <form action="https://formcarry.com/s/1oR1NOXtURn" 
                method="POST" 
                enctype="multipart/form-data"
                onsubmit="showThankYou(); return true;">
        <input
            type="hidden"
            name="_redirect"
            value="http://127.0.0.1:5500/form.html"/> 

        <h3>Apply for this internship</h3>
        <div style="display:flex; flex-direction:row; padding-bottom:20px">
        <p style="color:red">*</p><p>Indicates required fields</p>
        </div>
        
        <div class="input-container">
            <div style="display:flex; flex-direction:row">
            <p>First name</p>
            <p style="color:red">*</p>
            </div>
            <input 
                type="text" 
                name="first-name" 
                id="first-name" required/>
        </div>
        
        <div class="input-container">
            <div style="display:flex; flex-direction:row">
            <p>Last name</p>
            <p style="color:red">*</p>
            </div>
        <input 
            type="text" 
            name="last-name" 
            id="last-name" required/>
        </div>

        <div class="input-container">
            <div style="display:flex; flex-direction:row">
            <p>Email</p>
            <p style="color:red">*</p>
            </div>
        <input 
            type="email" 
            name="email" 
            id="email" required/>
        </div>

        <div class="input-container">
            <div style="display:flex; flex-direction:row">
            <p>Phone</p>
            <p style="color:red">*</p>
            </div>
        <input 
            type="text" 
            name="phone" 
            id="phone" required/>
        </div>

        <div class="input-container">
            <div style="display:flex; flex-direction:row">
            <p>Address</p>
            <p style="color:red">*</p>
            </div>
        <input 
            type="text" 
            name="address" 
            id="address" required/>
        </div>

        <div style="display:flex; flex-direction:row">
        <h5>Resume/CV</h5><p style="color:red">*</p>
        </div>
            
            <div class="file-input">
                <label for="cv">Attach</label>
                <input type="file" name="cv" id="cv" accept=".pdf,.doc,.docx,.txt,.rtf" />
            </div>
        
        <p id="cv-filename" style="font-style: italic; color: grey; margin-top: 5px; font-size: 12px"></p> 
        <p style="color: grey; font-size: 12px">Accepted file types: pdf, doc, docx, txt, rtf</p>
        
        <div style="display:flex; flex-direction:row">
        <h5>Cover letter</h5><p style="color:red">*</p>
        </div>

        <div class="file-input"> 
            <label for="portfolio">Attach</label>
            <input type="file" name="portfolio" id="portfolio" accept=".pdf,.doc,.docx,.txt,.rtf" /> 
        </div>
        
        <p id="cv-filename" style="font-style: italic; color: grey; margin-top: 5px; font-size: 12px"></p> 
        <p style="color: grey; font-size: 12px">Accepted file types: pdf, doc, docx, txt, rtf</p>
    
    
        
        <div style="display: flex; justify-content: flex-end; margin">
             <button
            id="button-submit"
            type="submit">Submit application</button>
        </div>
       
      </form>
        `

        const cvInput = document.getElementById('cv');
        const cvFilename = document.getElementById('cv-filename');
      
        cvInput.addEventListener('change', () => {
          if (cvInput.files.length > 0) {
            cvFilename.textContent = `Selected file: ${cvInput.files[0].name}`;
          } else {
            cvFilename.textContent = '';
          }
        });
        ;
    }
    
  
    renderVacancies(getCurrentFilteredVacancies());
}


function openForm() {
    window.location.href = "form.html";
}

function getCurrentFilteredVacancies() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const levelFilter = document.getElementById('level').value;
    const languageFilter = document.getElementById('language').value;

    return vacancies.filter(vacancy => {
        const matchesSearch = !searchTerm || 
            vacancy.title.toLowerCase().includes(searchTerm) ||
            vacancy.description.toLowerCase().includes(searchTerm) ||
            vacancy.location.toLowerCase().includes(searchTerm);
        
        const matchesLevel = !levelFilter || vacancy.level === levelFilter;
        
        const matchesLanguage = !languageFilter || vacancy.language === languageFilter;

        return matchesSearch && matchesLevel && matchesLanguage;
    });
}

function filterVacancies() {
    const filteredVacancies = getCurrentFilteredVacancies();
    renderVacancies(filteredVacancies);
    
    
    if (selectedVacancy && !filteredVacancies.find(v => v.id === selectedVacancy.id)) {
        selectedVacancy = null;
        document.getElementById('informationContainer').innerHTML = `
            <div class="info-title">Select a vacancy to view details</div>
            <p>Click on any vacancy card to see detailed information, requirements, and application instructions.</p>
        `;
    }
}

function clearFilters() {
    // Reset all filter inputs to their default values
    document.getElementById('search').value = '';
    document.getElementById('level').value = '';
    document.getElementById('language').value = '';
    
    // Re-render all vacancies
    renderVacancies(vacancies);
    
    // If a vacancy was selected, keep it selected (since all vacancies are now visible)
    if (selectedVacancy) {
        // Re-select the vacancy to update the display
        const infoContainer = document.getElementById('informationContainer');
        // Keep the current vacancy information displayed
    }
}

document.getElementById('search').addEventListener('input', filterVacancies);
document.getElementById('level').addEventListener('change', filterVacancies);
document.getElementById('language').addEventListener('change', filterVacancies);


renderVacancies();