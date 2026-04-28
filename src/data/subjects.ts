export interface Subject {
  id: string;
  name: string;
  order: number;
}

// then we have list of subjects down here
export const subjects: Subject[] = [
  {
    id: "gross-anatomy-101",
    name: "Gross Anatomy",
    order: 1,
  },
  {
    id: "physiology-101",
    name: "Physiology",
    order: 0,
  },
  {
    id: "biochemistry-101",
    name: "Biochemistry",
    order: 2,
  },
  {
    id: "histology-101",
    name: "Histology",
    order: 3,
  },
  {
    id: "embryology",
    name: "Embryology",
    order: 4,
  },
];