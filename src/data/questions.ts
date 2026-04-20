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
    question:
      "The patellar surface is found on which aspect of the distal femur?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The patellar surface lies anteriorly between the condyles.",
    is_visible: true,
  },
  {
    id: "femur-028",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure lies above the condyles posteriorly?",
    options: [
      "Patellar surface",
      "Supracondylar lines",
      "Intertrochanteric crest",
      "Trochanteric fossa",
    ],
    answer: "Supracondylar lines",
    explanation:
      "The supracondylar lines are continuations of the linea aspera.",
    is_visible: true,
  },
  {
    id: "femur-029",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The normal angle of inclination of the femur is approximately:",
    options: ["45 degrees", "90 degrees", "125 degrees", "180 degrees"],
    answer: "125 degrees",
    explanation: "The normal neck-shaft angle is about 125 degrees.",
    is_visible: true,
  },
  {
    id: "femur-030",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Decrease in the angle of inclination is called:",
    options: ["Coxa valga", "Coxa vara", "Genu valgum", "Genu varum"],
    answer: "Coxa vara",
    explanation: "Coxa vara is a decrease in the neck-shaft angle.",
    is_visible: true,
  },
  {
    id: "femur-031",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Increase in the angle of inclination is called:",
    options: ["Coxa vara", "Coxa valga", "Genu valgum", "Genu varum"],
    answer: "Coxa valga",
    explanation: "Coxa valga is an increase in the neck-shaft angle.",
    is_visible: true,
  },
  {
    id: "femur-032",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is located on the medial surface of the greater trochanter?",
    options: [
      "Trochanteric fossa",
      "Quadrate tubercle",
      "Patellar surface",
      "Intercondylar fossa",
    ],
    answer: "Trochanteric fossa",
    explanation:
      "The trochanteric fossa lies on the medial surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-033",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the trochanteric fossa?",
    options: [
      "Obturator externus",
      "Gluteus medius",
      "Piriformis",
      "Quadratus femoris",
    ],
    answer: "Obturator externus",
    explanation: "Obturator externus inserts into the trochanteric fossa.",
    is_visible: true,
  },
  {
    id: "femur-034",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle is larger?",
    options: ["Medial condyle", "Lateral condyle", "Both equal", "Neither"],
    answer: "Medial condyle",
    explanation: "The medial condyle is usually larger.",
    is_visible: true,
  },
  {
    id: "femur-035",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which part of the femur is most commonly fractured in the elderly?",
    options: ["Shaft", "Neck", "Greater trochanter", "Condyles"],
    answer: "Neck",
    explanation: "Fracture neck of femur is common in elderly people.",
    is_visible: true,
  },
  {
    id: "femur-036",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Fracture of the neck of femur may lead to:",
    options: [
      "Osteomyelitis",
      "Avascular necrosis",
      "Dislocation of knee",
      "Rickets",
    ],
    answer: "Avascular necrosis",
    explanation: "The blood supply to the head may be disrupted.",
    is_visible: true,
  },
  {
    id: "femur-037",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which epicondyle bears the adductor tubercle?",
    options: ["Lateral", "Medial", "Both", "Neither"],
    answer: "Medial",
    explanation: "The adductor tubercle is found on the medial epicondyle.",
    is_visible: true,
  },
  {
    id: "femur-038",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The femur articulates distally with which bones?",
    options: [
      "Tibia only",
      "Fibula only",
      "Tibia and patella",
      "Tibia and fibula",
    ],
    answer: "Tibia and patella",
    explanation: "The femur articulates with the tibia and patella.",
    is_visible: true,
  },
  {
    id: "femur-039",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which border of the shaft contains the linea aspera?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Posterior",
    explanation: "The posterior border forms the linea aspera.",
    is_visible: true,
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
  {
    id: "tibiafibula-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which bone is the main weight-bearing bone of the leg?",
    options: ["Fibula", "Tibia", "Talus", "Patella"],
    answer: "Tibia",
    explanation:
      "The tibia is the major weight-bearing bone of the leg, while the fibula mainly provides muscle attachment and ankle stability.",
    is_visible: true,
  },
  {
    id: "tibiafibula-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "Which part of the tibia gives attachment to the ligamentum patellae?",
    options: [
      "Medial condyle",
      "Fibular notch",
      "Tibial tuberosity",
      "Soleal line",
    ],
    answer: "Tibial tuberosity",
    explanation:
      "The ligamentum patellae is attached to the tibial tuberosity on the anterior aspect of the proximal tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The intercondylar eminence is found between which structures?",
    options: [
      "The medial and lateral malleoli",
      "The medial and lateral condyles",
      "The tibia and fibula",
      "The shaft and head of fibula",
    ],
    answer: "The medial and lateral condyles",
    explanation:
      "The intercondylar eminence lies between the medial and lateral condyles of the tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which feature is found on the posterior surface of the tibia?",
    options: [
      "Tibial tuberosity",
      "Fibular notch",
      "Soleal line",
      "Lateral malleolus",
    ],
    answer: "Soleal line",
    explanation:
      "The soleal line is a ridge on the posterior surface of the tibia for attachment of the soleus muscle.",
    is_visible: true,
  },
  {
    id: "tibiafibula-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which border of the tibia is commonly called the shin?",
    options: [
      "Medial border",
      "Interosseous border",
      "Anterior border",
      "Lateral border",
    ],
    answer: "Anterior border",
    explanation:
      "The sharp anterior border of the tibia is subcutaneous and is commonly referred to as the shin.",
    is_visible: true,
  },
  {
    id: "tibiafibula-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which part of the fibula forms the lateral malleolus?",
    options: ["Head", "Neck", "Shaft", "Distal end"],
    answer: "Distal end",
    explanation:
      "The distal end of the fibula expands downward to form the lateral malleolus.",
    is_visible: true,
  },
  {
    id: "tibiafibula-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which structure is related to the neck of the fibula?",
    options: [
      "Femoral nerve",
      "Common peroneal nerve",
      "Sciatic nerve",
      "Tibial nerve",
    ],
    answer: "Common peroneal nerve",
    explanation:
      "The common peroneal nerve winds around the neck of the fibula and is vulnerable to injury there.",
    is_visible: true,
  },
  {
    id: "tibiafibula-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "Which structure on the distal tibia articulates with the fibula?",
    options: [
      "Medial malleolus",
      "Fibular notch",
      "Tibial tuberosity",
      "Intercondylar eminence",
    ],
    answer: "Fibular notch",
    explanation:
      "The fibular notch on the distal tibia articulates with the distal fibula.",
    is_visible: true,
  },
  {
    id: "tibiafibula-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which bone does not participate directly in the knee joint?",
    options: ["Tibia", "Femur", "Patella", "Fibula"],
    answer: "Fibula",
    explanation:
      "The fibula does not form part of the knee joint even though its head lies near the knee.",
    is_visible: true,
  },
  {
    id: "tibiafibula-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which surface of the tibia is subcutaneous?",
    options: [
      "Posterior surface",
      "Lateral surface",
      "Medial surface",
      "Interosseous surface",
    ],
    answer: "Medial surface",
    explanation:
      "The medial surface of the tibia is subcutaneous and can be felt easily beneath the skin.",
    is_visible: true,
  },
  {
    id: "tibiafibula-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The tibia is the medial bone of the leg.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The tibia lies medially, while the fibula lies laterally in the leg.",
    is_visible: true,
  },
  {
    id: "tibiafibula-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibula is the major weight-bearing bone of the leg.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The tibia is the major weight-bearing bone; the fibula mainly provides attachment for muscles.",
    is_visible: true,
  },
  {
    id: "tibiafibula-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The tibial tuberosity gives attachment to the ligamentum patellae.",
    options: ["true", "false"],
    answer: "true",
    explanation: "The ligamentum patellae inserts into the tibial tuberosity.",
    is_visible: true,
  },
  {
    id: "tibiafibula-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The medial malleolus is a feature of the fibula.",
    options: ["true", "false"],
    answer: "false",
    explanation: "The medial malleolus is a projection from the distal tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The lateral malleolus is formed by the distal fibula.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The distal end of the fibula expands to form the lateral malleolus.",
    is_visible: true,
  },
  {
    id: "tibiafibula-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibula articulates directly with the femur.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The fibula does not articulate with the femur and does not participate in the knee joint.",
    is_visible: true,
  },
  {
    id: "tibiafibula-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The soleal line is located on the posterior surface of the tibia.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The soleal line is a ridge on the posterior aspect of the tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The common peroneal nerve winds around the neck of the fibula.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The common peroneal nerve passes around the fibular neck and is prone to injury there.",
    is_visible: true,
  },
  {
    id: "tibiafibula-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibular notch is located on the proximal tibia.",
    options: ["true", "false"],
    answer: "false",
    explanation: "The fibular notch is found on the distal end of the tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibula is more slender than the tibia.",
    options: ["true", "false"],
    answer: "true",
    explanation: "The fibula is thinner and more slender than the tibia.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The tibia is the large weight-bearing bone of the leg. Which side does it occupy?",
    options: ["Lateral", "Medial", "Anterior", "Posterior"],
    answer: "Medial",
    explanation:
      "The tibia is described as the large weight-bearing medial bone of the leg.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The tibia articulates superiorly with the femoral condyles and the head of the fibula.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The tibia articulates with femoral condyles and the head of fibula at its upper end.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Compared to its upper end, the lower end of the tibia is:",
    options: ["Wider", "Equal in size", "Smaller", "Bifurcated"],
    answer: "Smaller",
    explanation:
      "The tibia has an expanded upper end, a shaft, and a smaller lower end.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The tibial plateaus consist of medial and lateral condyles.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The upper end of the tibia has tibial plateaus made up of lateral and medial condyles.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "What separates the two tibial plateaus at the upper end of the tibia?",
    options: [
      "Soleal line",
      "Anterior and posterior intercondylar areas",
      "Tibial tuberosity",
      "Linea aspera",
    ],
    answer: "Anterior and posterior intercondylar areas",
    explanation:
      "Anterior and posterior intercondylar areas separate the tibial plateaus. There is also an intercondylar eminence between them.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The groove on the medial condyle of the tibia is for the semimembranosus muscle.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide mentions a groove on the medial condyle for the semimembranosus (SM) muscle.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "What is the cross-sectional shape of the tibial shaft?",
    options: ["Circular", "Oval", "Triangular", "Quadrilateral"],
    answer: "Triangular",
    explanation: "The tibial shaft is triangular in cross-section.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "True or False: The tibial shaft has 4 borders and 4 surfaces.",
    options: ["True", "False"],
    answer: "False",
    explanation: "The tibial shaft has 3 borders and 3 surfaces, not 4.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which border of the tibia forms the shin?",
    options: [
      "Medial border",
      "Lateral border",
      "Anterior border",
      "Posterior border",
    ],
    answer: "Anterior border",
    explanation: "The anterior border of the tibial shaft forms the shin.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The soleal line is found on the posterior surface of the tibia and gives origin to the soleus muscle.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The soleal line is located posteriorly on the tibial shaft and serves as the origin of the soleus muscle.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The lower end of the tibia has a saddle-shaped articular surface for which bone?",
    options: ["Calcaneum", "Navicular", "Talus", "Cuboid"],
    answer: "Talus",
    explanation:
      "The lower end of the tibia is expanded with a saddle-shaped articular surface for the talus.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The medial malleolus is formed by the tibia projecting downward on its lateral side.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The medial malleolus is formed by the tibia prolonging downward medially, not laterally.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "From where to where is the medial surface of the tibia subcutaneous?",
    options: [
      "From tibial tuberosity to lateral malleolus",
      "From medial malleolus to medial condyle above",
      "From soleal line to tibial tuberosity",
      "From intercondylar eminence to medial malleolus",
    ],
    answer: "From medial malleolus to medial condyle above",
    explanation:
      "The medial surface of the tibia is subcutaneous from the medial malleolus to the medial condyle above.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The borders and surfaces of the tibia are named by opposites.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide explicitly states that borders and surfaces of the tibia are named by opposites.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "Which of the following is NOT a feature of the upper end of the tibia?",
    options: [
      "Tibial plateaus",
      "Intercondylar eminence",
      "Lateral malleolus",
      "Articular facet for head of fibula",
    ],
    answer: "Lateral malleolus",
    explanation:
      "The lateral malleolus is a feature of the fibula, not the upper end of the tibia.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The tibia takes no part in transmission of body weight.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "It is the fibula, not the tibia, that takes no part in transmission of body weight. The tibia is the main weight-bearing bone of the leg.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The lower end of the tibia has a fibular notch for articulation with which bone?",
    options: ["Talus", "Calcaneum", "Fibula", "Navicular"],
    answer: "Fibula",
    explanation:
      "The fibular notch at the lower end of the tibia articulates with the fibula, as seen in the distal tibia diagram.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: Both the medial and lateral menisci are associated with the upper end of the tibia.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The upper end of the tibia has both lateral and medial menisci associated with the tibial plateaus.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The fibula is described as which type of bone relative to its position in the leg?",
    options: [
      "Large medial bone",
      "Slender lateral bone",
      "Large anterior bone",
      "Flat posterior bone",
    ],
    answer: "Slender lateral bone",
    explanation:
      "The fibula is described as the slender lateral upper bone of the leg.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The fibula takes part in transmitting body weight.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The slide explicitly states the fibula takes no part in transmission of body weight.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-021",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "True or False: The fibula takes part in the knee joint.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The slide clearly states the fibula takes no part in the knee joint.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-022",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which malleolus does the fibula form at the ankle?",
    options: [
      "Medial malleolus",
      "Lateral malleolus",
      "Both malleoli",
      "Neither malleolus",
    ],
    answer: "Lateral malleolus",
    explanation: "The fibula forms the lateral malleolus at the ankle joint.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-023",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "How many surfaces and borders does the fibular shaft have?",
    options: [
      "3 surfaces, 3 borders",
      "4 surfaces, 3 borders",
      "4 surfaces, 4 borders",
      "3 surfaces, 4 borders",
    ],
    answer: "4 surfaces, 4 borders",
    explanation:
      "The fibular shaft is a slender body with 4 surfaces and 4 borders.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-024",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The four surfaces of the fibular shaft are anterior, posterior, peroneal, and interosseous.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The fibular shaft surfaces are: anterior (extensor), posterior (flexor), peroneal, and interosseous.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-025",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "What is found at the upper end of the fibula?",
    options: [
      "Medial malleolus and tibial tuberosity",
      "Styloid process, head, and neck",
      "Intercondylar eminence and soleal line",
      "Tibial plateaus and menisci",
    ],
    answer: "Styloid process, head, and neck",
    explanation:
      "The upper end of the fibula has a styloid process, a head, and a neck.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-026",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The lower end of the fibula is the triangular lateral malleolus, which is subcutaneous.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The lower end of the fibula is the triangular lateral malleolus, which is subcutaneous and has a triangular articular facet and a malleolar fossa.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-027",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "How many muscles does the fibula provide attachment for, according to the slide?",
    options: ["5", "7", "9", "11"],
    answer: "9",
    explanation:
      "One of the main functions of the fibula is to provide attachment for 9 muscles.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-028",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: One of the main functions of the fibula is to hold the talus in its socket.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The two main functions of the fibula are to provide attachment for 9 muscles and to hold the talus in its socket.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-029",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which of the following correctly compares the tibia and fibula?",
    options: [
      "Both bear body weight equally",
      "Tibia is medial and weight-bearing; fibula is lateral and non-weight-bearing",
      "Fibula is medial and weight-bearing; tibia is lateral and non-weight-bearing",
      "Both participate in the knee joint",
    ],
    answer:
      "Tibia is medial and weight-bearing; fibula is lateral and non-weight-bearing",
    explanation:
      "The tibia is the large medial weight-bearing bone; the fibula is the slender lateral bone that bears no body weight and does not participate in the knee joint.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-030",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The lateral malleolus of the fibula has a malleolar fossa on its posterior aspect.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The lower end of the fibula — the lateral malleolus — has a triangular articular facet and a malleolar fossa.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "Which is the largest tarsal bone and the largest bone of the foot?",
    options: ["Talus", "Navicular", "Calcaneum", "Cuboid"],
    answer: "Calcaneum",
    explanation:
      "The calcaneum is both the largest tarsal and the largest bone of the foot.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The calcaneum forms the prominence of the heel via its posterior one-third.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The calcaneum forms the prominence of the heel at its posterior 1/3rd.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "How many surfaces does the calcaneum have?",
    options: ["4", "5", "6", "8"],
    answer: "6",
    explanation:
      "The calcaneum has 6 surfaces: superior, posterior, anterior, inferior, medial, and lateral.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "True or False: The calcaneum bears the weight of the body.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The calcaneum bears the weight of the body, which is consistent with its role as the largest bone of the foot.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "The talus is described as shaped like which animal?",
    options: ["Crocodile", "Tortoise", "Crab", "Snail"],
    answer: "Tortoise",
    explanation: "The slide describes the talus as shaped like a tortoise.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "True or False: The talus has a head, neck, and a body.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The talus has three parts: a head, a neck, and a body.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "Which bones does the talus articulate with above?",
    options: [
      "Calcaneum and navicular",
      "Tibia and fibula",
      "Cuboid and navicular",
      "Tibia and calcaneum",
    ],
    answer: "Tibia and fibula",
    explanation:
      "The talus articulates above with the tibia and fibula, below with the calcaneum, and anteriorly with the navicular.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The talus articulates anteriorly with the cuboid.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The talus articulates anteriorly with the navicular, not the cuboid.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "The talus has articular facets for which two malleoli?",
    options: [
      "Superior and inferior malleoli",
      "Medial and lateral malleoli",
      "Anterior and posterior malleoli",
      "Tibial and fibular tuberosities",
    ],
    answer: "Medial and lateral malleoli",
    explanation:
      "The talus has articular facets for both the medial and lateral malleoli.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The tuberosity of the navicular is subcutaneous and palpable.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The navicular tuberosity is subcutaneous and palpable, felt on the medial border of the foot 2.5cm anterior and below the medial malleolus.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "The tuberosity of the navicular serves as attachment for the main part of which tendon?",
    options: [
      "Peroneus longus tendon",
      "Tibialis anterior tendon",
      "Tibialis posterior tendon",
      "Flexor hallucis longus tendon",
    ],
    answer: "Tibialis posterior tendon",
    explanation:
      "The navicular tuberosity is the attachment site for the main part of the tibialis posterior tendon.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "Where exactly on the foot is the navicular tuberosity palpable?",
    options: [
      "2.5cm posterior and above the medial malleolus",
      "2.5cm anterior and below the medial malleolus",
      "2.5cm lateral and above the lateral malleolus",
      "2.5cm posterior and below the lateral malleolus",
    ],
    answer: "2.5cm anterior and below the medial malleolus",
    explanation:
      "The navicular tuberosity is felt on the medial border of the foot, 2.5cm anterior and below the medial malleolus.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The cuboid has a groove on its superior aspect that lodges the tendon of peroneus longus.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The groove is on the inferior aspect of the cuboid, not the superior. It lodges the tendon of peroneus longus muscle.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "How many tarsal bones are there in total in one foot?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation:
      "There are 7 tarsals: calcaneum, talus, navicular, cuboid, and 3 cuneiforms (medial, intermediate, lateral).",
    is_visible: true,
  },
  {
    id: "ga101-oll003-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "True or False: The cuneiforms are small wedge-shaped bones.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The cuneiforms are described as small wedged-shaped bones.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "The cuneiforms articulate distally with which metatarsals?",
    options: [
      "1st, 2nd and 3rd metatarsals",
      "2nd, 3rd and 4th metatarsals",
      "3rd, 4th and 5th metatarsals",
      "1st and 2nd metatarsals only",
    ],
    answer: "1st, 2nd and 3rd metatarsals",
    explanation:
      "The cuneiforms articulate distally with the first three metatarsals.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The cuneiforms articulate proximally with the navicular.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The cuneiforms articulate proximally with the navicular bone.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "The cuneiforms play an important role in the formation of which arch of the foot?",
    options: [
      "Medial longitudinal arch",
      "Lateral longitudinal arch",
      "Transverse arch",
      "Plantar arch",
    ],
    answer: "Transverse arch",
    explanation:
      "The cuneiforms play an important role in the formation of the transverse arch of the foot.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "How many metatarsal bones are in one foot?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    explanation:
      "There are 5 metatarsals in each foot: metatarsals I, II, III, IV, and V.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: All metatarsals and phalanges have a head, shaft, and a base.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide states that ALL metatarsals and phalanges have a head, shaft, and a base.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-021",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "Which of the following correctly lists the three types of phalanges in the foot?",
    options: [
      "Proximal, middle, and distal",
      "Superior, intermediate, and inferior",
      "Medial, central, and lateral",
      "Base, shaft, and head",
    ],
    answer: "Proximal, middle, and distal",
    explanation:
      "The phalanges of the foot are classified as proximal, middle, and distal phalanges.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-022",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The foot has two longitudinal arches and one transverse arch.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The arches of the foot include a medial part and lateral part of the longitudinal arch, and a transverse arch.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-023",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "Which tarsal bones form the lateral part of the longitudinal arch of the foot?",
    options: [
      "Talus, navicular and cuneiforms",
      "Calcaneus and cuboid",
      "Calcaneus, talus and navicular",
      "Cuboid and lateral cuneiform",
    ],
    answer: "Calcaneus and cuboid",
    explanation:
      "From the arch diagram on the slide, the lateral part of the longitudinal arch is formed by the calcaneus and cuboid.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-024",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The lateral cuneiform is numbered the 1st cuneiform.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The lateral cuneiform is the 3rd cuneiform. The medial cuneiform is 1st and the intermediate cuneiform is 2nd.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-025",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "Which of the following bones is NOT a tarsal bone?",
    options: ["Talus", "Navicular", "Calcaneum", "Metatarsal I"],
    answer: "Metatarsal I",
    explanation:
      "Metatarsal I belongs to the metatarsals, not the tarsals. The 7 tarsals are: calcaneum, talus, navicular, cuboid, and 3 cuneiforms.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-001",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What is the primary function of the lower limb?",
    options: [
      "Sensory reception and balance",
      "Support body weight and provide stable foundation for standing, walking and running",
      "Thermoregulation and lymphatic drainage",
      "Facilitate upper limb movement",
    ],
    answer:
      "Support body weight and provide stable foundation for standing, walking and running",
    explanation:
      "The primary functions of the lower limb are to support the weight of the body and provide a stable foundation in standing, walking, and running.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-002",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Into how many regions is the lower limb divided?",
    options: ["4", "5", "6", "7"],
    answer: "6",
    explanation:
      "The lower limb is divided into 6 regions: gluteal, thigh, knee, leg, ankle, and foot.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-003",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The deep fascia of the thigh is called the fascia lata.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The deep fascia of the thigh is specifically named the fascia lata.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-004",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How many fascial septa pass from the inner aspect of the deep fascial sheath of the thigh to the linea aspera of the femur?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "3 fascial septa pass from the inner aspect of the deep fascial sheath to the linea aspera of the femur, dividing the thigh into 3 compartments.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-005",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The fascial septa of the thigh attach to the linea aspera of the femur.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The 3 fascial septa pass from the inner aspect of the deep fascial sheath to the linea aspera of the femur.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-006",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Into how many compartments does the fascia lata divide the thigh?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "The fascial septa divide the thigh into 3 compartments: anterior, medial, and posterior.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-007",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following correctly lists the three fascial compartments of the thigh?",
    options: [
      "Superior, inferior, and lateral",
      "Anterior, medial, and posterior",
      "Medial, lateral, and posterior",
      "Anterior, posterior, and lateral",
    ],
    answer: "Anterior, medial, and posterior",
    explanation:
      "The thigh is divided into anterior, medial, and posterior fascial compartments, each with its own muscles, nerves, and vessels.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-008",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Each fascial compartment of the thigh has its own nerves, muscles, and vessels.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Each of the three fascial compartments of the thigh has its own dedicated nerves, muscles, and vessels.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-009",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which nerve supplies the anterior compartment of the thigh?",
    options: [
      "Obturator nerve",
      "Sciatic nerve",
      "Femoral nerve",
      "Tibial nerve",
    ],
    answer: "Femoral nerve",
    explanation:
      "The anterior compartment of the thigh is supplied by the femoral nerve (L2, 3, 4 posterior division).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-010",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The femoral nerve arises from the posterior division of L2, 3, and 4.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The femoral nerve supplying the anterior compartment arises from the posterior division of L2, 3, 4.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-011",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which nerve supplies the medial compartment of the thigh?",
    options: [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Saphenous nerve",
    ],
    answer: "Obturator nerve",
    explanation:
      "The medial compartment of the thigh is supplied by the obturator nerve (L2, 3, 4 anterior division).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-012",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The obturator nerve arises from the anterior division of L2, 3, and 4.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The obturator nerve supplying the medial compartment arises from the anterior division of L2, 3, 4 — contrasting with the femoral nerve which comes from the posterior division.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-013",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which nerve supplies the posterior compartment of the thigh?",
    options: [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Common peroneal nerve",
    ],
    answer: "Sciatic nerve",
    explanation:
      "The posterior compartment is supplied by the sciatic nerve (L4, 5, S1, 2, 3) which has tibial and peroneal divisions.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-014",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The sciatic nerve has spinal root values of L4, 5, S1, 2, 3.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The sciatic nerve supplying the posterior compartment has spinal root values of L4, 5, S1, 2, 3 and consists of tibial and peroneal components.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-015",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How many named muscles does the lower limb have in total according to the slide?",
    options: ["41", "47", "51", "55"],
    answer: "51",
    explanation:
      "The slide states that the nerves of the lower limb supply 51 named muscles of the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-016",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is described as a hybrid muscle of the lower limb receiving supply from two nerves?",
    options: ["Rectus femoris", "Pectineus", "Sartorius", "Gracilis"],
    answer: "Pectineus",
    explanation:
      "Pectineus is a hybrid muscle supplied by two nerves: the femoral nerve and the obturator nerve.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-017",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The adductor magnus is supplied by two nerves — the tibial and obturator nerves.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Adductor magnus is a hybrid muscle with two parts, supplied by two nerves: the tibial and obturator nerves.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-018",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Biceps femoris is described as a hybrid muscle with two heads. Which two nerves supply it?",
    options: [
      "Femoral and obturator",
      "Tibial and peroneal",
      "Sciatic and femoral",
      "Obturator and tibial",
    ],
    answer: "Tibial and peroneal",
    explanation:
      "Biceps femoris has two heads and is supplied by two nerves: the tibial nerve (long head) and the peroneal nerve (short head).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-019",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following muscles is NOT listed as a content of the anterior fascial compartment of the thigh?",
    options: ["Sartorius", "Iliacus", "Gracilis", "Pectineus"],
    answer: "Gracilis",
    explanation:
      "Gracilis is a muscle of the medial compartment, not the anterior. The anterior compartment contains Sartorius, Iliacus, Psoas, Pectineus, and the Quadriceps femoris group.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-020",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The quadriceps femoris consists of rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The quadriceps femoris group in the anterior compartment consists of these four muscles: rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-021",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "What is the blood supply to the anterior fascial compartment of the thigh?",
    options: [
      "Obturator artery",
      "Femoral artery",
      "Popliteal artery",
      "Internal iliac artery",
    ],
    answer: "Femoral artery",
    explanation:
      "The blood supply to the anterior fascial compartment of the thigh is the femoral artery.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-022",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The femoral artery is a branch of the external iliac artery.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The femoral artery is a branch of the external iliac artery and is the main arterial supply to the thigh.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-023",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which artery gives rise to the lateral femoral circumflex, medial femoral circumflex, and 4 perforating arteries?",
    options: [
      "Femoral artery",
      "Profunda femoris artery",
      "Popliteal artery",
      "Obturator artery",
    ],
    answer: "Profunda femoris artery",
    explanation:
      "The profunda femoris artery gives off the lateral femoral circumflex (LFC), medial femoral circumflex (MFC), and 4 perforating arteries.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-024",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How many perforating arteries does the profunda femoris give off?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation:
      "The profunda femoris artery gives off 4 perforating arteries in addition to the lateral and medial femoral circumflex arteries.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-025",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The cruciate anastomosis around the hip joint is formed by the LFC, MFC, superior gluteal artery, and the 1st perforating artery.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The cruciate anastomosis around the hip joint is formed by the lateral femoral circumflex (LFC), medial femoral circumflex (MFC), superior gluteal artery (SG), and the 1st perforating artery (PA).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-026",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "What are the two veins responsible for venous drainage of the thigh?",
    options: [
      "Femoral and obturator veins",
      "Popliteal and femoral veins",
      "Great saphenous and small saphenous veins",
      "Femoral and great saphenous veins",
    ],
    answer: "Popliteal and femoral veins",
    explanation:
      "Venous drainage of the thigh is via the popliteal and femoral veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-027",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "How many main types of veins exist in the lower limb?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "There are 3 main types of veins in the lower limb: superficial veins, deep veins, and perforating veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-028",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Perforating veins communicate between the superficial and deep veins of the lower limb.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Perforating veins are communicating veins that run between the superficial and deep veins of the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-029",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is described as the longest vein in the body?",
    options: [
      "Small saphenous vein",
      "Femoral vein",
      "Great saphenous vein",
      "Popliteal vein",
    ],
    answer: "Great saphenous vein",
    explanation:
      "The great saphenous vein (GSV) is described as the longest vein in the body.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-030",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "How many valves does the great saphenous vein have?",
    options: ["5-10", "10-20", "20-30", "1-5"],
    answer: "10-20",
    explanation:
      "The great saphenous vein has 10-20 valves that permit blood flow from the superficial into the deep veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-031",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The valves of the great saphenous vein permit blood flow from the superficial veins into the deep veins.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The 10-20 valves of the GSV permit blood flow from the superficial into the deep veins. Incompetence of these valves leads to varicose veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-032",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Where does the great saphenous vein drain into?",
    options: [
      "Popliteal vein",
      "External iliac vein",
      "Femoral vein at the fossa ovalis",
      "Small saphenous vein",
    ],
    answer: "Femoral vein at the fossa ovalis",
    explanation:
      "The great saphenous vein is continuous with the femoral vein at the fossa ovalis.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-033",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is NOT a tributary of the great saphenous vein?",
    options: [
      "Superficial circumflex vein",
      "Superficial epigastric vein",
      "Superficial external pudendal vein",
      "Deep femoral vein",
    ],
    answer: "Deep femoral vein",
    explanation:
      "The GSV receives the superficial circumflex vein, superficial epigastric vein, and superficial external pudendal vein as tributaries. The deep femoral vein is not a tributary of the GSV.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-034",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Incompetence of the valves of the great saphenous vein leads to varicose veins.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Incompetence of the valves of the GSV allows blood to flow in the wrong direction, leading to varicose veins of the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-035",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What are venae comitantes?",
    options: [
      "Superficial veins of the lower limb",
      "Medium-sized deep arteries each accompanied by two veins, one on each side",
      "Perforating veins connecting superficial and deep systems",
      "Tributaries of the great saphenous vein",
    ],
    answer:
      "Medium-sized deep arteries each accompanied by two veins, one on each side",
    explanation:
      "Venae comitantes are medium-sized deep arteries accompanied by 2 veins, one on each side, forming part of the deep venous system.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-036",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "The fossa ovalis is also known by which two other names?",
    options: [
      "Femoral ring and femoral canal",
      "Saphenous opening and saphenous hiatus",
      "Cribriform fascia and falciform margin",
      "Femoral sheath and femoral canal",
    ],
    answer: "Saphenous opening and saphenous hiatus",
    explanation:
      "The fossa ovalis is the same structure as the saphenous opening and the saphenous hiatus — three names for the same opening.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-037",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The fossa ovalis is located in the proximal anterior part of the thigh.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The fossa ovalis is located in the proximal anterior part of the thigh, within the femoral sheath.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-038",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How far below and lateral to the pubic tubercle does the fossa ovalis lie?",
    options: ["2cm", "3cm", "4cm", "5cm"],
    answer: "4cm",
    explanation:
      "The fossa ovalis lies 4cm below and lateral to the pubic tubercle, within the femoral sheath.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-039",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What creates the fossa ovalis?",
    options: [
      "The femoral artery passing through the fascia lata",
      "The great saphenous vein as it drains into the femoral vein",
      "The femoral nerve piercing the fascia lata",
      "The profunda femoris artery branching off the femoral artery",
    ],
    answer: "The great saphenous vein as it drains into the femoral vein",
    explanation:
      "The fossa ovalis is created by the great saphenous vein as it pours its contents into the femoral vein.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-040",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The fossa ovalis is filled with loose connective tissue called the cribriform fascia.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The fossa ovalis opening is filled with loose connective tissue called the cribriform fascia.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-041",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What is the adductor canal also known as?",
    options: [
      "Femoral canal",
      "Subsartorial canal",
      "Hunter's groove",
      "Obturator canal",
    ],
    answer: "Subsartorial canal",
    explanation:
      "The adductor canal is also called the subsartorial canal because it lies beneath the sartorius muscle.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-042",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The adductor canal is situated on the medial aspect of the middle third of the thigh.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The adductor canal is an intermuscular cleft situated on the medial aspect of the middle third of the thigh, beneath the sartorius muscle.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-043",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "The adductor canal lies beneath which muscle?",
    options: [
      "Rectus femoris",
      "Vastus medialis",
      "Sartorius",
      "Adductor longus",
    ],
    answer: "Sartorius",
    explanation:
      "The adductor canal is situated beneath the sartorius muscle, which is why it is also called the subsartorial canal.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-044",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Where does the adductor canal commence superiorly?",
    options: [
      "At the inguinal ligament",
      "At the apex of the femoral triangle",
      "At the fossa ovalis",
      "At the lesser trochanter",
    ],
    answer: "At the apex of the femoral triangle",
    explanation:
      "The adductor canal commences from the apex of the femoral triangle above and ends below at the opening in the adductor magnus.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-045",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Where does the adductor canal end inferiorly?",
    options: [
      "At the popliteal fossa",
      "At the opening in the adductor magnus",
      "At the medial condyle of the femur",
      "At the knee joint",
    ],
    answer: "At the opening in the adductor magnus",
    explanation:
      "The adductor canal ends below at the opening in the adductor magnus, through which the femoral vessels pass to become the popliteal vessels.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-046",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The adductor canal is triangular in cross section.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The adductor canal is triangular in cross section with anteromedial, posterior, and lateral walls.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-047",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which muscle forms the anteromedial wall of the adductor canal?",
    options: [
      "Adductor magnus",
      "Vastus medialis",
      "Sartorius",
      "Adductor longus",
    ],
    answer: "Sartorius",
    explanation:
      "The anteromedial wall of the adductor canal is formed by the sartorius muscle (S).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-048",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which muscles form the posterior wall of the adductor canal?",
    options: [
      "Sartorius and vastus medialis",
      "Adductor magnus and adductor longus",
      "Rectus femoris and adductor longus",
      "Gracilis and adductor magnus",
    ],
    answer: "Adductor magnus and adductor longus",
    explanation:
      "The posterior wall of the adductor canal is formed by adductor magnus (AM) and adductor longus (AL).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-049",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which muscle forms the lateral wall of the adductor canal?",
    options: [
      "Sartorius",
      "Adductor magnus",
      "Vastus medialis",
      "Rectus femoris",
    ],
    answer: "Vastus medialis",
    explanation:
      "The lateral wall of the adductor canal is formed by vastus medialis (VM).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-050",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is a content of the femoral triangle found within the femoral sheath?",
    options: [
      "Femoral nerve",
      "Deep inguinal lymph nodes",
      "Femoral canal",
      "Genitofemoral nerve",
    ],
    answer: "Femoral canal",
    explanation:
      "The femoral sheath contains the femoral artery, femoral canal, and femoral vein with its tributaries. The femoral nerve lies outside the femoral sheath.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-051",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The femoral nerve lies within the femoral sheath.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The femoral nerve lies outside the femoral sheath. The femoral sheath contains the femoral artery, femoral canal, and femoral vein.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-052",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is NOT a content of the femoral triangle?",
    options: [
      "Femoral sheath and its contents",
      "Femoral nerve and its branches",
      "Deep inguinal lymph nodes",
      "Obturator nerve",
    ],
    answer: "Obturator nerve",
    explanation:
      "The obturator nerve is not a content of the femoral triangle. The femoral triangle contains the femoral sheath and contents, femoral nerve and branches, nerve to pectineus, lateral cutaneous nerve of thigh, deep inguinal lymph nodes, and the femoral branch of the genitofemoral nerve.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-053",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The deep inguinal lymph nodes are contents of the femoral triangle.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The deep inguinal lymph nodes are listed as a content of the femoral triangle.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-054",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "The superficial inguinal lymph nodes are arranged in which two groups?",
    options: [
      "Superior and inferior",
      "Horizontal and vertical",
      "Medial and lateral",
      "Deep and superficial",
    ],
    answer: "Horizontal and vertical",
    explanation:
      "The superficial inguinal lymph nodes are arranged in a horizontal group and a vertical group.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-055",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Groin swellings involving lymph nodes can be due to infections in the leg.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide states that groin swellings involving lymph nodes may be due to leg infections, since the inguinal nodes drain the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-056",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Femoral herniae are more common in females because the femoral canal is larger in females due to the greater width of their pelvis.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Femoral canals are larger in females due to the greater width of their pelvis, making femoral herniae more common in females.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-057",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Through which opening does an inguinal hernia protrude?",
    options: [
      "Deep inguinal ring",
      "Femoral ring",
      "Superficial inguinal ring",
      "Saphenous opening",
    ],
    answer: "Superficial inguinal ring",
    explanation:
      "The slide states that an inguinal hernia protrudes through the superficial inguinal ring.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-058",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which bony landmark of the anterior thigh is formed by the junction of the two pubic bones?",
    options: [
      "Pubic tubercle",
      "Pubic crest",
      "Symphysis pubis",
      "Iliac tubercle",
    ],
    answer: "Symphysis pubis",
    explanation:
      "The symphysis pubis is the cartilaginous joint formed at the junction of the two pubic bones and is a bony landmark of the anterior thigh.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-059",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The GSV communicates with the medial plantar veins, anterior tibial veins, and tributaries of the posterior tibial veins.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The GSV communicates with the medial plantar veins, anterior tibial veins, and tributaries of the posterior tibial veins as part of the superficial venous network.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-060",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following statements best distinguishes the femoral triangle from the adductor canal?",
    options: [
      "The femoral triangle is deep to the sartorius while the adductor canal is superficial to it",
      "The femoral triangle is in the proximal thigh and contains femoral vessels and nerve; the adductor canal is in the middle third of the thigh and transmits vessels beneath the sartorius",
      "The femoral triangle transmits only the femoral nerve while the adductor canal transmits only the femoral artery",
      "They are different names for the same structure",
    ],
    answer:
      "The femoral triangle is in the proximal thigh and contains femoral vessels and nerve; the adductor canal is in the middle third of the thigh and transmits vessels beneath the sartorius",
    explanation:
      "The femoral triangle is in the proximal thigh containing femoral vessels, nerve, and lymphatics. The adductor canal begins at the apex of the femoral triangle and runs in the middle third of the thigh beneath the sartorius, transmitting the femoral vessels downward.",
    is_visible: true,
  },
];
