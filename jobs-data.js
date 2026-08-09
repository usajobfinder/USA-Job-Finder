// All job listings live here. To add a new job, copy a block and change the values.
// "id" must be unique — used in the URL as job-details.html?id=xxx
const JOBS = {
  "google-data-entry": {
    title: "Remote Data Entry Clerk",
    company: "Google",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    salary: "$30/hour",
    location: "USA",
    type: "Full Time",
    remote: "Remote",
    badge: "hot", // "hot" | "featured" | "" (none)
    about: "We're looking for a detail-oriented Remote Data Entry Clerk to accurately input, update, and maintain records across our internal systems. This is a fully remote, flexible-hours position suited to someone who's organized and comfortable working independently.",
    responsibilities: [
      "Enter and update data across internal databases with high accuracy",
      "Review records for errors and correct discrepancies",
      "Maintain confidentiality of sensitive information",
      "Meet daily and weekly data processing targets"
    ],
    requirements: [
      "Strong typing speed and attention to detail",
      "Comfortable with spreadsheets and basic data tools",
      "Reliable internet connection",
      "Prior data entry experience is a plus, not required"
    ]
  },
  "amazon-support": {
    title: "Customer Support Agent",
    company: "Amazon",
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    salary: "$28/hour",
    location: "USA",
    type: "Full Time",
    remote: "Remote",
    badge: "featured",
    about: "Join our customer support team helping shoppers with orders, returns, and account questions. You'll be the friendly voice that solves problems and keeps customers happy — all from home.",
    responsibilities: [
      "Respond to customer inquiries via chat, email, and phone",
      "Resolve order, billing, and account issues",
      "Escalate complex cases to the right team",
      "Maintain a high customer satisfaction score"
    ],
    requirements: [
      "Clear written and verbal communication skills",
      "Patience and a friendly, solution-focused attitude",
      "Basic computer skills, quiet home workspace",
      "Prior customer service experience preferred"
    ]
  },
  "microsoft-va": {
    title: "Virtual Assistant",
    company: "Microsoft",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    salary: "$35/hour",
    location: "USA",
    type: "Part Time",
    remote: "Remote",
    badge: "hot",
    about: "We're hiring a Virtual Assistant to support scheduling, email management, and light administrative tasks for our team. Flexible part-time hours, fully remote.",
    responsibilities: [
      "Manage calendars and schedule meetings",
      "Organize and respond to routine emails",
      "Prepare simple documents and reports",
      "Assist with day-to-day administrative tasks"
    ],
    requirements: [
      "Strong organizational skills",
      "Comfortable with email and calendar tools",
      "Self-motivated and reliable",
      "Prior admin/VA experience is a plus"
    ]
  },
  "apple-marketing": {
    title: "Marketing Assistant",
    company: "Apple",
    logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    salary: "$32/hour",
    location: "USA",
    type: "Full Time",
    remote: "On-site / Hybrid",
    badge: "",
    about: "Support our marketing team with content coordination, campaign tracking, and social media scheduling. Great entry point into a marketing career.",
    responsibilities: [
      "Assist in planning and scheduling marketing campaigns",
      "Track campaign performance and prepare summaries",
      "Coordinate with design and content teams",
      "Manage social media posting calendar"
    ],
    requirements: [
      "Interest in marketing or communications",
      "Comfortable with spreadsheets and basic reporting",
      "Good written communication skills",
      "Prior internship/marketing experience is a plus"
    ]
  },
  "tesla-sales": {
    title: "Remote Sales Representative",
    company: "Tesla",
    logo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    salary: "$34/hour",
    location: "USA",
    type: "Full Time",
    remote: "Remote",
    badge: "featured",
    about: "Drive sales conversations with customers interested in our products. This remote role rewards strong communicators with a base rate plus performance incentives.",
    responsibilities: [
      "Handle inbound sales inquiries via phone and chat",
      "Explain product features and pricing clearly",
      "Follow up with leads and close sales",
      "Keep accurate records in the CRM"
    ],
    requirements: [
      "Confident, persuasive communication skills",
      "Comfortable working toward sales targets",
      "Basic CRM/computer skills",
      "Prior sales experience preferred, not required"
    ]
  },
  "walmart-admin": {
    title: "Administrative Assistant",
    company: "Walmart",
    logo: "https://www.google.com/s2/favicons?domain=walmart.com&sz=128",
    salary: "$27/hour",
    location: "USA",
    type: "Part Time",
    remote: "On-site",
    badge: "",
    about: "Support daily office operations including filing, scheduling, and basic correspondence. A steady, reliable part-time role.",
    responsibilities: [
      "Handle filing, data entry, and basic correspondence",
      "Support scheduling and office coordination",
      "Greet and direct visitors as needed",
      "Assist other departments with admin tasks"
    ],
    requirements: [
      "Organized and dependable",
      "Basic computer and phone skills",
      "Comfortable working on-site",
      "Prior office experience is a plus"
    ]
  }
};
