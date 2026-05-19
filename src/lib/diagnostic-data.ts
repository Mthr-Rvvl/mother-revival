export type Stage = "unravelling" | "wilderness" | "searching" | "rebuilding" | "arrival";

export interface Option {
  text: string;
  scores: Partial<Record<Stage, number>>;
}

export interface Question {
  id: number;
  block: string;
  question: string;
  options: Option[];
  contextKey?: string;
}

export const questions: Question[] = [
  // BLOCK 1: INTERIOR STATE
  {
    id: 1,
    block: "Interior State",
    question: "When you catch yourself in a quiet moment, the closest thing to what you actually feel is...",
    options: [
      { text: "Disorientation — like I'm watching my own life from a slight distance.", scores: { unravelling: 3, wilderness: 1 } },
      { text: "A performance gap. I look fine. I am not.", scores: { wilderness: 3, unravelling: 1 } },
      { text: "Curiosity. Something is shifting and I want to understand it.", scores: { searching: 3, wilderness: 1 } },
      { text: "Direction. I'm building something new and I can feel it.", scores: { rebuilding: 3, arrival: 1 } },
      { text: "Coherence. I'm not who I was. I'm who I've become.", scores: { arrival: 3, rebuilding: 1 } },
    ],
  },
  {
    id: 2,
    block: "Interior State",
    question: "When you look in the mirror, the most accurate thing is...",
    options: [
      { text: "I don't recognise the woman looking back at me.", scores: { unravelling: 3 } },
      { text: "I recognise her, but something underneath has changed and no one else can see it.", scores: { wilderness: 3 } },
      { text: "I'm starting to see someone new emerging. I'm curious about her.", scores: { searching: 3 } },
      { text: "I'm becoming someone I chose, not someone I happened into.", scores: { rebuilding: 3 } },
      { text: "I see myself clearly. Motherhood is part of me, not all of me.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 3,
    block: "Interior State",
    question: "The most honest sentence about your inner life right now is...",
    options: [
      { text: "I don't know what's happening to me.", scores: { unravelling: 3 } },
      { text: "I love them. I miss myself. Both are true.", scores: { wilderness: 3 } },
      { text: "What now? I want to find out who I am next.", scores: { searching: 3 } },
      { text: "I'm choosing this version of myself, deliberately.", scores: { rebuilding: 3 } },
      { text: "I am integrated. I am not in transition anymore.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 4,
    block: "Interior State",
    question: "Late at night, when no one is watching, you most often...",
    options: [
      { text: "Cry, or feel like crying, without being able to say exactly why.", scores: { unravelling: 3 } },
      { text: "Scroll, search, read — looking for someone who has named what you're experiencing.", scores: { wilderness: 3 } },
      { text: "Journal or sketch out ideas about who you want to become.", scores: { searching: 3, rebuilding: 1 } },
      { text: "Work on something that matters to your own development.", scores: { rebuilding: 3, searching: 1 } },
      { text: "Rest. The searching has settled.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 5,
    block: "Interior State",
    question: "When you hear another mother say 'I feel like I've lost myself,' your gut response is...",
    options: [
      { text: "Yes. That. Exactly that. I don't have words but that's it.", scores: { unravelling: 3 } },
      { text: "I know that feeling. I have been living in it for a while.", scores: { wilderness: 3 } },
      { text: "I remember feeling that. I'm in a different place now.", scores: { searching: 2, rebuilding: 1 } },
      { text: "I felt that for years. I'm finally rebuilding.", scores: { rebuilding: 3 } },
      { text: "I felt it once. I understand the whole journey now.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 6,
    block: "Interior State",
    question: "The fear that surfaces most often when you think about your future is...",
    options: [
      { text: "I don't have a clear future. I can barely see past tomorrow.", scores: { unravelling: 3 } },
      { text: "If I don't figure this out soon, this is just my life now.", scores: { wilderness: 3 } },
      { text: "I'm not sure exactly where I'm going, but I'm ready to find out.", scores: { searching: 3 } },
      { text: "I'm not afraid in the same way anymore. I'm building.", scores: { rebuilding: 3 } },
      { text: "I'm not living from fear about who I am anymore.", scores: { arrival: 3 } },
    ],
  },

  // BLOCK 2: BEHAVIOUR PATTERNS
  {
    id: 7,
    block: "Behaviour Patterns",
    question: "Your relationship with the things you used to love — hobbies, work, ideas, friends — is...",
    options: [
      { text: "I dropped most of them. I'm not sure why.", scores: { unravelling: 3 } },
      { text: "I think about them often. I haven't returned to them.", scores: { wilderness: 3 } },
      { text: "I'm slowly returning to some — testing what still fits.", scores: { searching: 3 } },
      { text: "I've rebuilt them, sometimes in new forms.", scores: { rebuilding: 3 } },
      { text: "I've integrated them. They belong to my life again.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 8,
    block: "Behaviour Patterns",
    question: "When you're around women your age who haven't had children yet, what surfaces is...",
    options: [
      { text: "A kind of grief I can't explain.", scores: { unravelling: 2, wilderness: 2 } },
      { text: "Envy of the version of myself I used to be.", scores: { wilderness: 3 } },
      { text: "Curiosity about who I'm becoming, separate from who they are.", scores: { searching: 3 } },
      { text: "Compassion. I'm in a different chapter, not a worse one.", scores: { rebuilding: 3 } },
      { text: "Connection without comparison.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 9,
    block: "Behaviour Patterns",
    question: "When someone asks how you are, your most automatic response is...",
    options: [
      { text: "'I'm okay' — and you have no idea what's actually true.", scores: { unravelling: 3 } },
      { text: "'I'm fine' — and you're performing it.", scores: { wilderness: 3 } },
      { text: "'I'm figuring some things out' — and you mean it.", scores: { searching: 3 } },
      { text: "'Good. Different than I expected, but good.'", scores: { rebuilding: 3 } },
      { text: "You answer honestly without rehearsing it.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 10,
    block: "Behaviour Patterns",
    question: "Your pattern around setting boundaries right now is...",
    options: [
      { text: "I don't have the energy or clarity to set them.", scores: { unravelling: 3 } },
      { text: "I think about setting them constantly. I rarely follow through.", scores: { wilderness: 3 } },
      { text: "I'm starting to test what mine actually are.", scores: { searching: 3 } },
      { text: "I set them, increasingly without long explanations.", scores: { rebuilding: 3 } },
      { text: "They come naturally. They are an expression of my values.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 11,
    block: "Behaviour Patterns",
    question: "How much of your daily life feels chosen — versus inherited from the role of mother?",
    options: [
      { text: "Almost none feels chosen. Most feels like survival.", scores: { unravelling: 3 } },
      { text: "Externally chosen. Internally, I'm not sure what's mine anymore.", scores: { wilderness: 3 } },
      { text: "I'm beginning to distinguish between the two.", scores: { searching: 3 } },
      { text: "A growing percentage feels deliberately mine.", scores: { rebuilding: 3 } },
      { text: "My life is authored. Motherhood is part of it, not all of it.", scores: { arrival: 3 } },
    ],
  },

  // BLOCK 3: AMBITION SIGNAL
  {
    id: 12,
    block: "Ambition Signal",
    question: "When you imagine wanting more for yourself — beyond motherhood — what surfaces first?",
    options: [
      { text: "Excitement that gets quickly replaced by guilt.", scores: { unravelling: 1, wilderness: 2 } },
      { text: "Frustration that I haven't been able to access it.", scores: { wilderness: 3 } },
      { text: "Curiosity about what 'more' even means now.", scores: { searching: 3 } },
      { text: "Clarity. I know exactly what I want and I'm building toward it.", scores: { rebuilding: 3, arrival: 1 } },
    ],
  },
  {
    id: 13,
    block: "Ambition Signal",
    question: "The version of yourself you most want to reach is...",
    options: [
      { text: "The sharp, ambitious version of who I was before.", scores: { wilderness: 3, unravelling: 1 } },
      { text: "A whole, present, less-guilty version of who I am now.", scores: { unravelling: 2, wilderness: 2 } },
      { text: "A version that doesn't exist yet — someone I haven't been before.", scores: { searching: 3, rebuilding: 1 } },
      { text: "I'm not trying to reach. I am her.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 14,
    block: "Ambition Signal",
    question: "When wanting more conflicts with being a 'good mother,' you most likely...",
    options: [
      { text: "Shrink the wanting. Good mothers don't ask for more.", scores: { unravelling: 2, wilderness: 2 } },
      { text: "Carry the wanting privately. Push it down to function.", scores: { wilderness: 3 } },
      { text: "Question whether 'good mother' was a useful frame to begin with.", scores: { searching: 3 } },
      { text: "Don't experience them as in conflict anymore.", scores: { rebuilding: 2, arrival: 2 } },
    ],
  },

  // BLOCK 4: PATHWAY READINESS
  {
    id: 15,
    block: "Pathway Readiness",
    question: "How long have you been carrying the sense that something in you has shifted since becoming a mother?",
    options: [
      { text: "Months.", scores: { unravelling: 3 } },
      { text: "1–2 years.", scores: { unravelling: 1, wilderness: 2 } },
      { text: "3–5 years.", scores: { wilderness: 3 } },
      { text: "5–10 years.", scores: { wilderness: 3 } },
      { text: "More than 10 years.", scores: { wilderness: 2, rebuilding: 1 } },
    ],
    contextKey: "yearsCarrying",
  },
  {
    id: 16,
    block: "Pathway Readiness",
    question: "How many children do you have? (Matrescence reoccurs with each transition.)",
    options: [
      { text: "Currently pregnant with my first.", scores: { unravelling: 2 } },
      { text: "One.", scores: {} },
      { text: "Two.", scores: {} },
      { text: "Three.", scores: {} },
      { text: "Four or more.", scores: {} },
    ],
    contextKey: "children",
  },
  {
    id: 17,
    block: "Pathway Readiness",
    question: "What pulls you most strongly toward exploring this further?",
    options: [
      { text: "I need someone to name what's happening to me.", scores: { unravelling: 3 } },
      { text: "I want language for what I've been living in.", scores: { wilderness: 3 } },
      { text: "I'm ready to understand what comes next.", scores: { searching: 3 } },
      { text: "I'm rebuilding and I want a framework.", scores: { rebuilding: 3 } },
      { text: "I want to support other women through this.", scores: { arrival: 3 } },
    ],
  },
  {
    id: 18,
    block: "Pathway Readiness",
    question: "Which version of your future-self pulls you most strongly?",
    options: [
      { text: "Clarity and directional certainty.", scores: { searching: 1, rebuilding: 2 } },
      { text: "Intellectual reactivation and creative expression.", scores: { wilderness: 1, searching: 2 } },
      { text: "Economic independence and authored work.", scores: { rebuilding: 2, arrival: 1 } },
      { text: "Embodied confidence and emotional regulation.", scores: { rebuilding: 2 } },
      { text: "All of these — but in a form I haven't yet built.", scores: { searching: 2, rebuilding: 1 } },
    ],
    contextKey: "futureSelf",
  },
];

export interface StageResult {
  stage: Stage;
  stageNumber: string;
  title: string;
  headline: [string, string];
  mirror: string;
  whatThisIs: string;
  neuroscience: string;
  shareable: string;
  progression: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

export const stageResults: Record<Stage, StageResult> = {
  unravelling: {
    stage: "unravelling",
    stageNumber: "I",
    title: "The Unravelling",
    headline: ["You are in", "The Unravelling."],
    mirror:
      "Something has happened to you and the language for it has not yet been given. The woman in the mirror feels unfamiliar in a way you cannot articulate. You drop into a quiet moment and the floor isn't quite there. You cry without knowing exactly why. You're functioning — making meals, answering messages, holding the line — but underneath, something is moving that no one around you seems to see.",
    whatThisIs:
      "The Unravelling is the acute phase of matrescence — the developmental transition into motherhood. It is not pathology. It is not weakness. It is a known stage of identity transformation that has been studied in maternal neuroscience and developmental psychology, but rarely given to women in plain language.\n\nThe disorientation you feel is the beginning of an architecture, not the end of a self.",
    neuroscience:
      "Your brain was physically reorganised through pregnancy and postpartum — approximately 3–5% of grey matter was pruned to specialise the brain for the work of mothering. White matter integrity increased. Your endocrine system underwent a 120–130% structural expansion. Your hormones moved more in 48 hours after birth than they have at any other moment in your life.\n\nWhat feels like fog is your brain rewiring for a new role. The exhaustion isn't weakness — it's the cost of a system overhaul.",
    shareable: "You are not broken. You are between.",
    progression:
      "The Unravelling is the only stage that feels like loss. From here forward, every stage is construction. Once you have language for what is happening, you begin to recognise the shape of who you are becoming — and that shape is not smaller than who you were. It is larger.\n\nYou are not at the end of yourself. You are at the beginning of a self that includes motherhood without disappearing inside it.",
    ctaTitle: "The Unravelling — Your Stage I Identity Portrait",
    ctaBody:
      "A deep-dive report tailored to The Unravelling: the neuroscience of acute matrescence, the specific patterns you are likely experiencing, the language to give your partner, and the structural first steps toward The Wilderness — and beyond.",
    ctaButton: "Get my Stage I Portrait",
  },
  wilderness: {
    stage: "wilderness",
    stageNumber: "II",
    title: "The Wilderness",
    headline: ["You are in", "The Wilderness."],
    mirror:
      "You are functioning. Externally, you are doing everything you are supposed to do. Internally, something doesn't fit. You love your children completely. You also miss yourself — and you have learned to carry both without telling anyone. Late at night you look for words on a screen that match what you feel during the day. You watch other women your age and feel something complicated. You wonder, sometimes quietly and sometimes not so quietly, whether this is just your life now.",
    whatThisIs:
      "The Wilderness is the longest stage of matrescence — and the one most women live inside without recognising it. It is the gap between external performance and internal experience. The space between who you appear to be and what you are actually moving through.\n\nIt is not depression. It is identity restructuring without a map.",
    neuroscience:
      "Your brain's communication systems got stronger, not weaker — that is why you feel everything more intensely. The same neural reorganisation that made you hyperattuned to your child also made you hyperattuned to the gap inside yourself.\n\nYou are not more emotional because you are weak. You are more emotional because your nervous system was biologically reorganised to feel deeply. That same system makes the unspoken parts of your inner life feel louder than they used to.",
    shareable:
      "Loving your children and mourning yourself are not in conflict. Both are true.",
    progression:
      "The Wilderness does not resolve on its own. It waits. But it ends — and it ends not with a return to who you were, but with an orientation shift. From what's wrong with me to what now.\n\nOnce you have language for the gap, the gap is no longer ambiguous. Once you can name the performance, you can choose what to perform and what to live. The next stage is not effortful — it is curious. And you are closer to it than you think.",
    ctaTitle: "The Wilderness — Your Stage II Identity Portrait",
    ctaBody:
      "A deep-dive report tailored to The Wilderness: the science of the performance gap, the precise patterns of late-night identity searching, how to translate this experience to your partner, and the architecture of the orientation shift into The Searching.",
    ctaButton: "Get my Stage II Portrait",
  },
  searching: {
    stage: "searching",
    stageNumber: "III",
    title: "The Searching",
    headline: ["You are in", "The Searching."],
    mirror:
      "Something has shifted. You are still carrying questions, but the questions feel different now — less heavy, more alive. You are journaling again, or reading again, or staying up late not to scroll but to think. You are noticing the difference between who you are and who you were told to be. You are not sure exactly what you are looking for, but you have stopped trying to go back. You are starting to look forward.",
    whatThisIs:
      "The Searching is the inflection point. Your interior orientation has changed from pathology to curiosity. You are no longer asking what's wrong with me. You are asking what now.\n\nThis is the stage where women become readers, listeners, students of their own transition. This is where the framework finds you.",
    neuroscience:
      "Your brain is in active integration. The neural pathways that reorganised through pregnancy and postpartum are now consolidating into a new architecture. This is the biology of curiosity returning — the cognitive and emotional bandwidth that was being used to survive is now becoming available for becoming.",
    shareable:
      "You do not need your old life back. You need the next honest version.",
    progression:
      "The Searching becomes The Rebuilding when you stop sampling and start choosing. When you begin to clarify your actual values — not the ones you inherited or performed. When new behaviours start forming. When you stop describing who you are not, and start authoring who you are.\n\nThe Rebuilding is not harder than where you are now. It is more focused.",
    ctaTitle: "The Searching — Your Stage III Identity Portrait",
    ctaBody:
      "A deep-dive report tailored to The Searching: how to translate curiosity into structure, the values clarification work that defines the orientation shift, and the architectural foundations of The Rebuilding.",
    ctaButton: "Get my Stage III Portrait",
  },
  rebuilding: {
    stage: "rebuilding",
    stageNumber: "IV",
    title: "The Rebuilding",
    headline: ["You are in", "The Rebuilding."],
    mirror:
      "You are no longer waiting for clarity to arrive. You are constructing it. The language for what you have been through is something you have begun to use deliberately. Your values are sharpening. You are setting boundaries with less explanation. You are starting to make decisions from a centred place rather than a depleted one. Motherhood is no longer the entirety of your identity — it is one important part of a larger self you are actively building.",
    whatThisIs:
      "The Rebuilding is the architectural stage of matrescence. The disruption is behind you. The orientation has shifted. Now the work is constructive — values clarification, intentional authorship, new behavioural patterns forming, integration of motherhood into a coherent larger identity.\n\nThis stage takes time. It is the longest sustained work phase of the framework — and the one with the highest payoff.",
    neuroscience:
      "Your nervous system is integrating. The hyperattunement that defined earlier stages is being reorganised toward both your child and yourself simultaneously.\n\nThis is the biology of self-trust returning — the capacity to sense your own internal states alongside the needs of the people around you. Not at their expense. Alongside them.",
    shareable: "Good mothers don't shrink. Good mothers arrive.",
    progression:
      "The Rebuilding ends with The Arrival — integrated identity, embodied confidence, directional clarity. You are not far from it. You are inside the work that gets you there.\n\nThe version of yourself that exists on the other side of this is not a returned version. She is an authored one.",
    ctaTitle: "The Rebuilding — Your Stage IV Identity Portrait",
    ctaBody:
      "A deep-dive report tailored to The Rebuilding: structural values clarification work, the architecture of behaviour change at this stage, integration mapping for motherhood within a larger identity, and the precise markers of arrival.",
    ctaButton: "Get my Stage IV Portrait",
  },
  arrival: {
    stage: "arrival",
    stageNumber: "V",
    title: "The Arrival",
    headline: ["You are in", "The Arrival."],
    mirror:
      "You are not in transition anymore. You are not who you were before motherhood, and you are no longer trying to be. The grief of who you lost has been metabolised into the architecture of who you are. You are integrated — not finished, but coherent. Motherhood is part of your identity without being the entirety of it. You are quietly capable of holding what other women are still trying to carry. You may have noticed that women earlier in this transition are beginning to find you.",
    whatThisIs:
      "The Arrival is matrescence resolved — not as a return to a previous self, but as a coherent, intentional new self that includes motherhood as part of a larger identity.\n\nThis is the stage where women become facilitators, mentors, witnesses. Your experience is now infrastructure for someone else.",
    neuroscience:
      "Your brain has integrated. The structural changes that occurred during pregnancy and postpartum have consolidated into a new neural architecture optimised for emotional regulation, social cognition, and integrated decision-making.\n\nThe biology that once felt like overload is now the biology of capacity.",
    shareable:
      "You've been functioning. That's different from having arrived. You have arrived.",
    progression:
      "The Arrival is not an endpoint. It is a foundation. From here, the next chapters get authored deliberately — work, contribution, creative life, the next decade of who you are becoming.\n\nThe next version of you is something you author, not something that happens to you.",
    ctaTitle: "The Arrival — Your Stage V Identity Portrait",
    ctaBody:
      "A deep-dive report tailored to The Arrival: integrated identity architecture, the markers that distinguish arrival from sophisticated rebuilding, and the optional pathway into facilitation — where your experience becomes infrastructure for women earlier in the transition.",
    ctaButton: "Get my Stage V Portrait",
  },
};

export interface Context {
  yearsCarrying?: string;
  children?: string;
  futureSelf?: string;
}

export function calculateStage(answers: number[]): { stage: Stage; context: Context } {
  const totals: Record<Stage, number> = {
    unravelling: 0,
    wilderness: 0,
    searching: 0,
    rebuilding: 0,
    arrival: 0,
  };
  const context: Context = {};

  answers.forEach((answerIndex, qIndex) => {
    const q = questions[qIndex];
    if (!q) return;
    const opt = q.options[answerIndex];
    if (!opt) return;

    // accumulate weighted scores
    Object.entries(opt.scores).forEach(([stage, points]) => {
      totals[stage as Stage] += points ?? 0;
    });

    // capture context fields
    if (q.contextKey) {
      context[q.contextKey as keyof Context] = opt.text;
    }
  });

  // primary stage = highest total; ties broken toward earlier stage
  const order: Stage[] = ["unravelling", "wilderness", "searching", "rebuilding", "arrival"];
  let primary: Stage = "wilderness";
  let max = -1;
  for (const stage of order) {
    if (totals[stage] > max) {
      max = totals[stage];
      primary = stage;
    }
  }

  return { stage: primary, context };
}
