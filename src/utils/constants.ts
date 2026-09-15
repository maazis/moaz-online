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
  nameStretchIndices: [4, 5],
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
      "Research focus: algorithmic decision-making, infrastructure, AI governance",
  },
  contactItems: [
    {
      url: "https://www.dropbox.com/scl/fo/ppdyruewkr16ujn10b57v/AKtQVnz-uneSIyesGpC-ktk?rlkey=kre7fkbfxux1unciqvybwhrxs&st=tugqxa40&dl=0",
      text: "Resume / CV",
      iconClass: "ph-bold ph-folder",
    },
    {
      url: "https://www.dropbox.com/scl/fo/jdvmbdk1fpktkyw159xgz/AJ9tw3CEdT4aO8IvyDUTGZY?rlkey=ianbae5g7x8bhkoqqwejznjqa&st=8vnkwc9m&dl=0",
      text: "Writing Samples",
      iconClass: "ph-bold ph-file",
    },
    {
      url: "mailto:ismail@moaz.net",
      text: "ismail@moaz.net",
      iconClass: "ph-bold ph-envelope-simple mr-1",
    },
    {
      url: "https://www.linkedin.com/in/maazis/",
      text: "linkedin.com/in/maazis",
      iconClass: "ph-bold ph-linkedin-logo mr-1",
    },
    {
      url: "https://www.github.com/maazis",
      text: "github.com/maazis",
      iconClass: "ph-bold ph-github-logo mr-1",
    },
  ],
  roles: [
    {
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
    {
      title: "Writing",
      items: [
        "Journalism (technology, climate)",
        "Technical communication",
        "Fiction & creative nonfiction",
        "Playwriting & theatre direction",
      ],
    },
  ],
  published: {
    title: "Recently Published",
    links: [
      {
        url: "https://impakter.com/quantum-computing-and-climate-change/",
        text: "How Quantum Computing Could Help Address Climate Change",
      },
      {
        url: "https://impakter.com/disinformation-is-derailing-climate-action-what-can-be-done/",
        text: "Climate Disinformation Is Derailing Action",
      },
      {
        url: "https://impakter.com/tesla-vs-waymo-the-trillion-dollar-robotaxi-battle/",
        text: "Tesla vs. Waymo: The Trillion Dollar Robotaxi Battle",
      },
      {
        url: "https://impakter.com/what-is-the-environmental-cost-of-generative-ai/",
        text: "What Is the Environmental Cost of Generative AI?",
      },
    ],
  },
};
