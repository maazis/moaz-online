export interface Link {
  url: string;
  text: string;
  iconClass: string;
}

export interface Role {
  title: string;
  items: string[];
}

export interface CurrentWorks {
  title: string;
  journalist: {
    prefix: string;
    url: string;
    text: string;
  };
  degree: string;
  degreeDetail: string;
}

export interface Content {
  name1: string;
  name2: string;
  subtitle: string;
  currentWorks: CurrentWorks;
  contactItems: {
    email: Link;
    linkedin: Link;
    github: Link;
    samples: Link;
    resume: Link;
  };
  roles: {
    writer: Role;
    engineer: Role;
  };
}
