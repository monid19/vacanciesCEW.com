// vacancy-data.js - Constants and data file

// Sample vacancy data
const VACANCY_DATA = [
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

// Filter options
const EXPERIENCE_LEVELS = [
    { value: "Internship", label: "Internship" },
    { value: "Entry", label: "Entry level" },
    { value: "Mid-Senior", label: "Mid-Senior level" }
];

const LANGUAGES = [
    { value: "EN", label: "EN" },
    { value: "NL", label: "NL" },
    { value: "NL-EN", label: "NL and EN" }
];

// UI Constants
const UI_MESSAGES = {
    NO_RESULTS: "No vacancies found matching your criteria.",
    SELECT_VACANCY: "Select a vacancy to view details",
    SELECT_DESCRIPTION: "Click on any vacancy card to see detailed information, requirements, and application instructions.",
    LOADING: "Loading vacancies...",
    ERROR: "Error loading vacancies. Please try again later."
};

// Configuration
const CONFIG = {
    DESCRIPTION_PREVIEW_LENGTH: 120,
    FILTER_DEBOUNCE_TIME: 300,
    ANIMATION_DURATION: 300
};