export interface Question {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  is_visible: boolean;
}

export const questions = [
  {
    id: "femur-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the femur articulates with the acetabulum?",
    options: [
      "Neck of femur",
      "Head of femur",
      "Greater trochanter",
      "Lesser trochanter",
    ],
    answer: "Head of femur",
    explanation:
      "The head of the femur articulates with the acetabulum of the hip bone to form the hip joint.",
    is_visible: true,
  },
  {
    id: "femur-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The head of the femur is directed:",
    options: [
      "Laterally, upward, and backward",
      "Medially, upward, and forward",
      "Medially, downward, and backward",
      "Laterally, downward, and forward",
    ],
    answer: "Medially, upward, and forward",
    explanation:
      "The head of the femur faces medially, upward, and forward toward the acetabulum.",
    is_visible: true,
  },
  {
    id: "femur-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is found on the posterior aspect of the proximal femur?",
    options: [
      "Intertrochanteric line",
      "Patellar surface",
      "Intertrochanteric crest",
      "Linea aspera",
    ],
    answer: "Intertrochanteric crest",
    explanation:
      "The intertrochanteric crest is located on the posterior surface of the proximal femur, while the intertrochanteric line is anterior.",
    is_visible: true,
  },
  {
    id: "femur-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which of the following structures lies between the medial and lateral condyles posteriorly?",
    options: [
      "Patellar surface",
      "Intertrochanteric crest",
      "Intercondylar fossa",
      "Linea aspera",
    ],
    answer: "Intercondylar fossa",
    explanation:
      "The intercondylar fossa is the deep notch found between the condyles on the posterior distal femur.",
    is_visible: true,
  },
  {
    id: "femur-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is found on the posterior surface of the shaft of the femur?",
    options: [
      "Intertrochanteric line",
      "Linea aspera",
      "Patellar surface",
      "Adductor tubercle",
    ],
    answer: "Linea aspera",
    explanation:
      "The linea aspera is a prominent longitudinal ridge on the posterior surface of the shaft of the femur.",
    is_visible: true,
  },
  {
    id: "femur-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The lesser trochanter is located on which aspect of the femur?",
    options: [
      "Anterolateral",
      "Posterolateral",
      "Posteromedial",
      "Anteromedial",
    ],
    answer: "Posteromedial",
    explanation:
      "The lesser trochanter is a posteromedial projection at the junction of the neck and shaft of the femur.",
    is_visible: true,
  },
  {
    id: "femur-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure on the femur provides attachment for the ligament of the head of the femur?",
    options: [
      "Intertrochanteric crest",
      "Fovea capitis",
      "Lesser trochanter",
      "Gluteal tuberosity",
    ],
    answer: "Fovea capitis",
    explanation:
      "The fovea capitis is a small pit on the head of the femur that gives attachment to the ligament of the head of the femur.",
    is_visible: true,
  },
  {
    id: "femur-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the distal femur articulates with the patella?",
    options: [
      "Intercondylar fossa",
      "Patellar surface",
      "Adductor tubercle",
      "Lateral condyle",
    ],
    answer: "Patellar surface",
    explanation:
      "The patellar surface is the smooth anterior surface of the distal femur that articulates with the patella.",
    is_visible: true,
  },
  {
    id: "femur-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which artery is the major blood supply to the head of the femur in adults?",
    options: [
      "Lateral circumflex femoral artery",
      "Femoral artery",
      "Medial circumflex femoral artery",
      "Obturator artery",
    ],
    answer: "Medial circumflex femoral artery",
    explanation:
      "The medial circumflex femoral artery provides the major blood supply to the head and neck of the femur in adults.",
    is_visible: true,
  },
  {
    id: "femur-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The neck of the femur passes:",
    options: [
      "Upward, forward, and medially",
      "Downward, backward, and laterally",
      "Downward, forward, and medially",
      "Upward, backward, and laterally",
    ],
    answer: "Downward, backward, and laterally",
    explanation:
      "From the head toward the shaft, the neck of the femur passes downward, backward, and laterally.",
    is_visible: true,
  },
  {
    id: "femur-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which trochanter is larger?",
    options: [
      "Lesser trochanter",
      "Greater trochanter",
      "Both are equal",
      "Neither",
    ],
    answer: "Greater trochanter",
    explanation: "The greater trochanter is larger and more lateral.",
    is_visible: true,
  },
  {
    id: "femur-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which trochanter gives insertion to iliopsoas?",
    options: [
      "Greater trochanter",
      "Intertrochanteric crest",
      "Lesser trochanter",
      "Linea aspera",
    ],
    answer: "Lesser trochanter",
    explanation: "Iliopsoas inserts into the lesser trochanter.",
    is_visible: true,
  },
  {
    id: "femur-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The intertrochanteric line is located on which surface?",
    options: ["Posterior", "Anterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The intertrochanteric line lies anteriorly.",
    is_visible: true,
  },
  {
    id: "femur-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The intertrochanteric crest is located on which surface?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Posterior",
    explanation: "The intertrochanteric crest lies posteriorly.",
    is_visible: true,
  },
  {
    id: "femur-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is found at the midpoint of the intertrochanteric crest?",
    options: [
      "Adductor tubercle",
      "Quadrate tubercle",
      "Gluteal tuberosity",
      "Nutrient foramen",
    ],
    answer: "Quadrate tubercle",
    explanation:
      "The quadrate tubercle is located on the intertrochanteric crest.",
    is_visible: true,
  },
  {
    id: "femur-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the gluteal tuberosity?",
    options: ["Gluteus maximus", "Gluteus medius", "Piriformis", "Iliacus"],
    answer: "Gluteus maximus",
    explanation: "Gluteus maximus inserts partly into the gluteal tuberosity.",
    is_visible: true,
  },
  {
    id: "femur-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the greater trochanter?",
    options: ["Pectineus", "Adductor longus", "Gluteus medius", "Gracilis"],
    answer: "Gluteus medius",
    explanation:
      "Gluteus medius inserts into the lateral surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the lesser trochanter?",
    options: [
      "Gluteus maximus",
      "Iliopsoas",
      "Adductor magnus",
      "Rectus femoris",
    ],
    answer: "Iliopsoas",
    explanation: "Iliopsoas inserts into the lesser trochanter.",
    is_visible: true,
  },
  {
    id: "femur-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The nutrient foramen of the femur is usually directed:",
    options: ["Upward", "Laterally", "Downward", "Medially"],
    answer: "Upward",
    explanation: "The nutrient canal is directed upward in the femur.",
    is_visible: true,
  },
  {
    id: "femur-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which surface of the shaft is smooth?",
    options: ["Posterior", "Anterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The anterior surface of the shaft is smooth and convex.",
    is_visible: true,
  },
  {
    id: "femur-021",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The linea aspera divides inferiorly into:",
    options: [
      "Two trochanters",
      "Two condyles",
      "Medial and lateral supracondylar lines",
      "Intertrochanteric lines",
    ],
    answer: "Medial and lateral supracondylar lines",
    explanation:
      "Inferiorly, the linea aspera divides into supracondylar lines.",
    is_visible: true,
  },
  {
    id: "femur-022",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which tubercle is found above the medial condyle?",
    options: [
      "Quadrate tubercle",
      "Adductor tubercle",
      "Intercondylar tubercle",
      "Gluteal tubercle",
    ],
    answer: "Adductor tubercle",
    explanation: "The adductor tubercle lies above the medial epicondyle.",
    is_visible: true,
  },
  {
    id: "femur-023",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the adductor tubercle?",
    options: [
      "Adductor magnus",
      "Adductor brevis",
      "Gluteus maximus",
      "Sartorius",
    ],
    answer: "Adductor magnus",
    explanation:
      "Hamstring part of adductor magnus inserts into the adductor tubercle.",
    is_visible: true,
  },
  {
    id: "femur-024",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle projects more inferiorly?",
    options: ["Lateral condyle", "Medial condyle", "Both equal", "Neither"],
    answer: "Medial condyle",
    explanation: "The medial condyle projects further inferiorly.",
    is_visible: true,
  },
  {
    id: "femur-025",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle is more prominent anteriorly?",
    options: ["Medial condyle", "Lateral condyle", "Both equal", "Neither"],
    answer: "Lateral condyle",
    explanation: "The lateral condyle is more prominent anteriorly.",
    is_visible: true,
  },
  {
    id: "femur-026",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure is used to determine the side of a femur?",
    options: [
      "Head faces laterally",
      "Linea aspera faces anteriorly",
      "Head faces medially",
      "Patellar surface faces posteriorly",
    ],
    answer: "Head faces medially",
    explanation: "The head always faces medially.",
    is_visible: true,
  },
  {
    id: "femur-027",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The patellar surface is found on which aspect of the distal femur?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The patellar surface lies anteriorly between the condyles.",
    is_visible: true
  },
  {
    id: "femur-028",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure lies above the condyles posteriorly?",
    options: ["Patellar surface", "Supracondylar lines", "Intertrochanteric crest", "Trochanteric fossa"],
    answer: "Supracondylar lines",
    explanation: "The supracondylar lines are continuations of the linea aspera.",
    is_visible: true
  },
  {
    id: "femur-029",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The normal angle of inclination of the femur is approximately:",
    options: ["45 degrees", "90 degrees", "125 degrees", "180 degrees"],
    answer: "125 degrees",
    explanation: "The normal neck-shaft angle is about 125 degrees.",
    is_visible: true
  },
  {
    id: "femur-030",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Decrease in the angle of inclination is called:",
    options: ["Coxa valga", "Coxa vara", "Genu valgum", "Genu varum"],
    answer: "Coxa vara",
    explanation: "Coxa vara is a decrease in the neck-shaft angle.",
    is_visible: true
  },
  {
    id: "femur-031",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Increase in the angle of inclination is called:",
    options: ["Coxa vara", "Coxa valga", "Genu valgum", "Genu varum"],
    answer: "Coxa valga",
    explanation: "Coxa valga is an increase in the neck-shaft angle.",
    is_visible: true
  },
  {
    id: "femur-032",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure is located on the medial surface of the greater trochanter?",
    options: ["Trochanteric fossa", "Quadrate tubercle", "Patellar surface", "Intercondylar fossa"],
    answer: "Trochanteric fossa",
    explanation: "The trochanteric fossa lies on the medial surface of the greater trochanter.",
    is_visible: true
  },
  {
    id: "femur-033",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the trochanteric fossa?",
    options: ["Obturator externus", "Gluteus medius", "Piriformis", "Quadratus femoris"],
    answer: "Obturator externus",
    explanation: "Obturator externus inserts into the trochanteric fossa.",
    is_visible: true
  },
  {
    id: "femur-034",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle is larger?",
    options: ["Medial condyle", "Lateral condyle", "Both equal", "Neither"],
    answer: "Medial condyle",
    explanation: "The medial condyle is usually larger.",
    is_visible: true
  },
  {
    id: "femur-035",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the femur is most commonly fractured in the elderly?",
    options: ["Shaft", "Neck", "Greater trochanter", "Condyles"],
    answer: "Neck",
    explanation: "Fracture neck of femur is common in elderly people.",
    is_visible: true
  },
  {
    id: "femur-036",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Fracture of the neck of femur may lead to:",
    options: ["Osteomyelitis", "Avascular necrosis", "Dislocation of knee", "Rickets"],
    answer: "Avascular necrosis",
    explanation: "The blood supply to the head may be disrupted.",
    is_visible: true
  },
  {
    id: "femur-037",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which epicondyle bears the adductor tubercle?",
    options: ["Lateral", "Medial", "Both", "Neither"],
    answer: "Medial",
    explanation: "The adductor tubercle is found on the medial epicondyle.",
    is_visible: true
  },
  {
    id: "femur-038",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The femur articulates distally with which bones?",
    options: ["Tibia only", "Fibula only", "Tibia and patella", "Tibia and fibula"],
    answer: "Tibia and patella",
    explanation: "The femur articulates with the tibia and patella.",
    is_visible: true
  },
  {
    id: "femur-039",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which border of the shaft contains the linea aspera?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Posterior",
    explanation: "The posterior border forms the linea aspera.",
    is_visible: true
  },
  {
    id: "femur-041",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which secondary ossification center appears first in the femur?",
    options: ["Head", "Greater trochanter", "Distal end", "Lesser trochanter"],
    answer: "Distal end",
    explanation:
      "The distal end is the first secondary ossification center to appear.",
    is_visible: true,
  },
  {
    id: "femur-042",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which secondary ossification center appears last in the femur?",
    options: ["Head", "Greater trochanter", "Lesser trochanter", "Distal end"],
    answer: "Lesser trochanter",
    explanation:
      "The lesser trochanter is the last secondary ossification center to appear.",
    is_visible: true,
  },
  {
    id: "femur-043",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the femur ossifies first?",
    options: ["Head", "Shaft", "Distal end", "Greater trochanter"],
    answer: "Shaft",
    explanation:
      "The shaft is the primary ossification center and appears first.",
    is_visible: true,
  },
  {
    id: "femur-044",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure separates the neck from the shaft of the femur posteriorly?",
    options: [
      "Intertrochanteric line",
      "Intertrochanteric crest",
      "Linea aspera",
      "Trochanteric fossa",
    ],
    answer: "Intertrochanteric crest",
    explanation:
      "Posteriorly, the neck is separated from the shaft by the intertrochanteric crest.",
    is_visible: true,
  },
  {
    id: "femur-045",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure separates the neck from the shaft anteriorly?",
    options: [
      "Intertrochanteric crest",
      "Patellar surface",
      "Intertrochanteric line",
      "Gluteal tuberosity",
    ],
    answer: "Intertrochanteric line",
    explanation:
      "Anteriorly, the neck is separated from the shaft by the intertrochanteric line.",
    is_visible: true,
  },
  {
    id: "femur-046",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle is attached to the quadrate tubercle?",
    options: [
      "Quadratus femoris",
      "Piriformis",
      "Gemellus superior",
      "Gluteus minimus",
    ],
    answer: "Quadratus femoris",
    explanation: "Quadratus femoris inserts into the quadrate tubercle.",
    is_visible: true,
  },
  {
    id: "femur-047",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which surface of the greater trochanter receives the insertion of gluteus medius?",
    options: ["Anterior", "Posterior", "Lateral", "Medial"],
    answer: "Lateral",
    explanation:
      "Gluteus medius inserts into the lateral surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-048",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which surface of the greater trochanter receives the insertion of gluteus minimus?",
    options: ["Anterior", "Posterior", "Lateral", "Medial"],
    answer: "Anterior",
    explanation:
      "Gluteus minimus inserts into the anterior surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-049",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which muscle inserts into the upper border of the greater trochanter?",
    options: ["Piriformis", "Pectineus", "Adductor longus", "Gluteus maximus"],
    answer: "Piriformis",
    explanation:
      "Piriformis inserts into the upper border of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-050",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which line extends upward from the linea aspera toward the greater trochanter?",
    options: [
      "Spiral line",
      "Pectineal line",
      "Gluteal line",
      "Lateral supracondylar line",
    ],
    answer: "Gluteal line",
    explanation: "The gluteal line extends upward to the greater trochanter.",
    is_visible: true,
  },
];
