import { hcl } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    myntra,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    bootstrap,
    python,
    java
} from "../assets/icons";

export const skills = [
        {
            imageUrl: css,
            name: "CSS",
            type: "Frontend",
        },
        {
            imageUrl: express,
            name: "Express",
            type: "Backend",
        },
        {
            imageUrl: git,
            name: "Git",
            type: "Version Control",
        },
        {
            imageUrl: github,
            name: "GitHub",
            type: "Version Control",
        },
        {
            imageUrl: html,
            name: "HTML",
            type: "Frontend",
        },
        {
            imageUrl: javascript,
            name: "JavaScript",
            type: "Frontend",
        },
        {
            imageUrl: mongodb,
            name: "MongoDB",
            type: "Database",
        },
        {
            imageUrl: nextjs,
            name: "Next.js",
            type: "Frontend",
        },
        {
            imageUrl: nodejs,
            name: "Node.js",
            type: "Backend",
        },
        {
            imageUrl: react,
            name: "React",
            type: "Frontend",
        },
        {
            imageUrl: redux,
            name: "Redux",
            type: "State Management",
        },
        {
            imageUrl: tailwindcss,
            name: "Tailwind CSS",
            type: "Frontend",
        },
        {
            imageUrl: python,
            name: "Python",
            type: "Backend",
        },
        {
            imageUrl: java,
            name: "Java",
            type: "Backend",
        },
        {
            imageUrl: bootstrap,
            name: "Bootstrap",
            type: "Frontend",
        }
    ];
    

    export const experiences = [
        {
            title: "Graduate Engineer Trainee",
            company_name: "HCL Tech",
            icon: hcl,
            iconBg: "#accbe1",
            date: "October 2022 - December 2023",
            points: [
                "Worked as a Customer Support Engineer for Azure SQL Database, addressing and resolving complex issues for enterprise clients.",
            "Leveraged deep technical knowledge to troubleshoot and solve problems related to Azure SQL Database, ensuring optimal performance and reliability.",
            "Collaborated with diverse teams across various companies, including designers, product managers, and other developers, to deliver high-quality solutions.",
            "Provided exceptional customer support and technical guidance, building strong relationships with clients and ensuring their success with Azure SQL Database.",
            "Actively participated in knowledge sharing and skill enhancement to stay updated with the latest technologies and best practices in the industry.",
            "Worked onsite at Microsoft as a client, gaining valuable experience in a high-profile, enterprise environment.",
            ],
        }
    ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sarohaa199',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aman2805',
    }
];

export const projects = [
    {
        iconUrl: myntra,
        theme: 'btn-back-red',
        name: 'Myntra Clone',
        description: 'Developed a Myntra clone using HTML, CSS, and JavaScript, providing a user-friendly interface for browsing and purchasing fashion items.',
        link: 'https://github.com/Sarohaa199/Myntra_clone',
    },
    
];