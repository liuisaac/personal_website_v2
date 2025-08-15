const data = [
    {
        brief: "☁️ Cloud Ops and Internal Tools",
        date: "Jan. 2025 - Present",
        description: [
            "Built and shipped a Jenkins pipeline to production using Apache Groovy, Docker, and Cloud Foundry CLI to accelerate service registration times by 6x for newly onboarded data centers. Previous process involved manual ops work (ie: curl-based service key fetching, auth token and payload handling, and endpoint polling). ",
            "Helped maintain a 99.7% uptime SLA by triaging issues and performing critical maintenance operations across AWS, Azure, and GCP—during weekend shifts and maintenance windows",
            // "Executed Blue-Green deployments (non-downtime inducing) and wave updates via Jenkins across 30+ data centers, handling troubleshooting, incident triaging, escalation, and post-deployment smoke testing",
            "Accelerated VH ticket response times by 30% by building a hybrid contextual RAG-enabled monitoring dashboard using OpenAI ada-002 embeddings, Flask, and PostgreSQL to search 200k+ Jira issues and Confluence docs"
        ],
        location: "SAP Vancouver",
        src: "/timeline/sap.png",
        title: "Cloud Engineer Intern",
    },
    {
        brief: "📖 CPSC 110 - Computation, Programs, and Programming",
        date: "Sept. 2024 - Dec. 2024",
        description: [
        "Supported 90+ students in labs and office hours — focused on design principles, recursive algorithms, and basic graph theory",
        "Marked over 150 PAs and labs — focused on asking crucial questions to think systematically and arrive at solutions on their own",
        "Wrapped up the term with a 96% positive rating in student evaluations — feedback emphasized patience and approachability"
        ],
        location: "UBC Vancouver",
        src: "/timeline/ubc.png",
        title: "Undergraduate Teaching Assistant",
    },
    {
        brief: "🚀 Full Stack Developmnt",
        date: "Oct. 2023 - Apr. 2024",
        description: [
            "Built interactive Three.js-based web experiences showcased in partner demos, differentiating client offerings, and contributing to 3 successful business pitches with major firms",
            "Diagnosed poor site performance (LCP) caused by eager loading of large components, improving page speed 10x by introducing server-side rendering and dynamic imports, slashing largest JS bundle sizes by over 60%",
            "Implemented CI/CD pipeline hooks into GitHub and automated pull-deploys to production — no more manual uploads or FTP-based processes in cPanel",
            "Integrated resume drop feature to handle file uploads with Multer, storing metadata in MongoDB and emailing submissions via Nodemailer"
        ],
        location: "Remote",
        src: "/timeline/cbx.png",
        title: "Software Engineer Intern",
    },
    
];

export default data;