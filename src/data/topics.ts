export interface Topic {
  id: string;
  subject: string;
  name: string;
  order: number;
}

export const topics: Topic[] = [
  {
    id: "osteology-of-lower-limb-001",
    name: "Ostelogy of Lower Limb - Femur",
    subject: "gross-anatomy-101",
    order: 0,
  },
  {
    id: "osteology-of-lower-limb-002",
    name: "Ostelogy of Lower Limb - Tibia & Fibula",
    subject: "gross-anatomy-101",
    order: 1,
  },
  {
    id: "osteology-of-lower-limb-003",
    name: "Ostelogy of Lower Limb - Foot",
    subject: "gross-anatomy-101",
    order: 2,
  },
  {
    id: "anterior-part-of-the-thigh-001",
    name: "Anterior part of the Thigh",
    subject: "gross-anatomy-101",
    order: 3,
  },
  // Physiology
  {
    id: "General Physiology - Cell Membrane",
    name: "GP - Cell Membrane",
    subject: "physiology-101",
    order: 0,
  },
  {
    id: "gpmt-01",
    name: "GP - Membrane Transport",
    subject: "physiology-101",
    order: 1,
  },
  {
    id: "gpmp-01",
    name: "GP - Membrane Potential",
    subject: "physiology-101",
    order: 2,
  },
  {
    id: "General Physiology - Cell Organelles",
    name: "GP - Cell Organelles",
    subject: "physiology-101",
    order: 3,
  },
  {
    id: "General Physiology - Cell Diversity",
    name: "GP - Cell Diversity",
    subject: "physiology-101",
    order: 4,
  },
  {
    id: "cardiovascular-system-001",
    name: "Cardiovascular system",
    subject: "physiology-101",
    order: 5,
  },
];
