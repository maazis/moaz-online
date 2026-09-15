export interface Link {
  url: string;
  text: string;
  iconClass?: string;
}

export interface Role {
  title: string;
  items: string[];
}

export interface CurrentWorks {
  title: string;
  bio: {
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
  /** Indices of characters in `name2` rendered wider for visual balance. */
  nameStretchIndices: number[];
  subtitle: string;
  currentWorks: CurrentWorks;
  contactItems: Link[];
  roles: Role[];
  published: {
    title: string;
    links: Link[];
  };
}
