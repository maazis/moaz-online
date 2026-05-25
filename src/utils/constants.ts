import type { Content } from "./types";

export const SPOTIFY_EMBED_URL =
  import.meta.env.PUBLIC_SPOTIFY_EMBED_URL ||
  "https://open.spotify.com/embed/track/3Zs6OEJmiSzn4Cwspokmrx?utm_source=generator&theme=0";

export const FOOTER_TEXT_1 = "© 2026 MAAZ ISMAIL.";
export const FOOTER_TEXT_2 = "About this website?";
export const FOOTER_TEXT_3 = "MAAZ IS ONLINE. THANKS FOR COMING.";

export const content: Content = {
  name1: "maaz",
  name2: "ismail",
  subtitle: "Germany",
  currentWorks: {
    title: "",
    bio: {
      prefix: "Software Engineer & Journalist at",
      url: "https://impakter.com/author/maaz-ismail/",
      text: "Impakter",
    },
    degree: "MSc in Philosophy & Computer Science",
    degreeDetail:
      "Research focus: algorithmic decision-making, AI governance, epistemic injustice",
  },
  contactItems: {
    resume: {
      url: "https://www.dropbox.com/scl/fo/q6qfg2hq4xa4q7criqqy6/AAKfK8V5pS6djxm0kVS2oMk?rlkey=ov0h7myaga966e9exawnt2cp7&dl=0",
      text: "Resume / CV",
      iconClass: "ph-bold ph-folder",
    },
    samples: {
      url: "https://www.dropbox.com/scl/fo/tph0xutoxkfxk4vpj3aou/ADAsyW8HFeN6UHCLSNSUssQ?rlkey=eyjwflfzt4s3qcnqe5bp0vdec&st=052edpyt&dl=0",
      text: "Writing Samples",
      iconClass: "ph-bold ph-file",
    },
    email: {
      url: "mailto:ismail@moaz.net",
      text: "ismail@moaz.net",
      iconClass: "ph-bold ph-envelope-simple mr-1",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/maazis/",
      text: "linkedin.com/in/maazis",
      iconClass: "ph-bold ph-linkedin-logo mr-1",
    },
    github: {
      url: "https://www.github.com/maazis",
      text: "github.com/maazis",
      iconClass: "ph-bold ph-github-logo mr-1",
    },
  },
  roles: {
    engineer: {
      title: "Software Engineering",
      items: [
        "Distributed systems",
        "Backend systems",
        "API design",
        "Authentication",
        "Database design",
        "Payment systems",
      ],
    },
    writer: {
      title: "Writing",
      items: [
        "Journalism (technology, climate)",
        "Technical communication",
        "Fiction & creative nonfiction",
        "Playwriting & theatre direction",
      ],
    },
  },
  published: {
    title: "Recently Published",
    links: [
      {
        url: "https://impakter.com/quantum-computing-and-climate-change/",
        text: "How Quantum Computing Could Help Address Climate Change",
        iconClass: "",
      },
      {
        url: "https://impakter.com/disinformation-is-derailing-climate-action-what-can-be-done/",
        text: "Climate Disinformation Is Derailing Action",
        iconClass: "",
      },
      {
        url: "https://impakter.com/tesla-vs-waymo-the-trillion-dollar-robotaxi-battle/",
        text: "Tesla vs. Waymo: The Trillion Dollar Robotaxi Battle",
        iconClass: "",
      },
      {
        url: "https://impakter.com/what-is-the-environmental-cost-of-generative-ai/",
        text: "What Is the Environmental Cost of Generative AI?",
        iconClass: "",
      },
    ],
  },
};
