export type Stage = "unravelling" | "wilderness" | "searching" | "rebuilding" | "arrival";

export interface Option {
  text: string;
  stage: Stage;
}

export interface Question {
  id: number;
  question: string;
  subtext?: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "When you look in the mirror, what is most true?",
    subtext: "Choose the one that lands closest.",
    options: [
      { text: "I don't recognise myself. Something has shifted and I can't locate who I am anymore.", stage: "unravelling" },
      { text: "I recognise my face but I feel disconnected from the person looking back. She seems capable. I don't feel it.", stage: "wilderness" },
      { text: "I'm starting to look for myself again — curious rather than confused.", stage: "searching" },
      { text: "I'm rebuilding. The reflection is becoming someone I'm choosing, not just someone I inherited.", stage: "rebuilding" },
    ],
  },
  {
    id: 2,
    question: "What does your inner world feel like right now?",
    options: [
      { text: "Volatile. Waves of emotion I can't predict or explain. Love and grief arriving at the same time.", stage: "unravelling" },
      { text: "Quiet but heavy. I function well outside. Inside, something is quietly grieving something I can't name.", stage: "wilderness" },
      { text: "Curious. The pain is still there but I'm asking different questions now — about what I want, not just what's wrong.", stage: "searching" },
      { text: "Clearing. I have more moments of groundedness now. I know what I value even when it's hard to act on it.", stage: "rebuilding" },
    ],
  },
  {
    id: 3,
    question: "Which of these describes what you find yourself doing late at night?",
    subtext: "The one you do most often.",
    options: [
      { text: "Crying without knowing exactly why. Or lying awake feeling like everything I thought I knew about myself is wrong.", stage: "unravelling" },
      { text: "Searching. Reading articles about identity, purpose, women who rebuilt their lives. Wondering if that's possible for me.", stage: "wilderness" },
      { text: "Journalling, planning, researching. I'm looking for a framework — something that gives structure to what I'm feeling.", stage: "searching" },
      { text: "Working on something that feels like mine. Building something. The evenings feel purposeful rather than desperate.", stage: "rebuilding" },
    ],
  },
  {
    id: 4,
    question: "What is your relationship with ambition right now?",
    options: [
      { text: "I've lost access to it. The version of me who wanted things feels very far away.", stage: "unravelling" },
      { text: "It's still there — but buried. I feel it sometimes and then immediately feel guilty for feeling it.", stage: "wilderness" },
      { text: "I'm reconnecting with it. I'm not sure what I want yet, but I know I want something — and that wanting feels okay.", stage: "searching" },
      { text: "It's becoming clearer. I'm starting to build towards something that feels like mine.", stage: "rebuilding" },
    ],
  },
  {
    id: 5,
    question: "How do you relate to the person you were before motherhood?",
    options: [
      { text: "I can barely access her. She feels like a stranger — or like she's gone.", stage: "unravelling" },
      { text: "I miss her. I compare my life to hers and feel something between grief and envy.", stage: "wilderness" },
      { text: "I'm starting to see her differently. I don't need her back — I need to know what comes next.", stage: "searching" },
      { text: "She's part of me but she's not the destination. I'm authoring something new.", stage: "rebuilding" },
    ],
  },
  {
    id: 6,
    question: "What does support feel like right now?",
    subtext: "What would actually help.",
    options: [
      { text: "I need someone to tell me there's a name for what I'm experiencing. That it isn't a personal failure.", stage: "unravelling" },
      { text: "I need someone to see the gap between how I look and how I feel — and not tell me I'm fine.", stage: "wilderness" },
      { text: "I need structure. A framework. Something that tells me where I am and where I'm going.", stage: "searching" },
      { text: "I need accountability and community. People who are in it with me and can witness what's being built.", stage: "rebuilding" },
    ],
  },
];

export interface StageResult {
  stage: Stage;
  title: string;
  subtitle: string;
  description: string;
  validation: string;
  whatItCosts: string;
  whatsNext: string;
}

export const stageResults: Record<Stage, StageResult> = {
  unravelling: {
    stage: "unravelling",
    title: "Stage One: The Unravelling",
    subtitle: "You are not falling apart. You are coming apart at the seams of a self that no longer fits.",
    description:
      "You are in the acute phase of identity disruption. The ground has shifted. The person you were before motherhood is not gone — she is reorganising. But right now, the reorganisation feels like loss. Emotional volatility. Mirror estrangement. Confusion that doesn't respond to logic. This is not a breakdown. This is a structural rearrangement.",
    validation:
      "What you are experiencing has a name: matrescence. Your brain physically changed during pregnancy and early motherhood — grey matter reorganised, hormone systems reset, your threat-detection sharpened, your sense of self became temporarily destabilised. This is not weakness. It is biology meeting identity, without a map.",
    whatItCosts:
      "Staying here without language for it means interpreting the disruption as personal failure. It means the confusion deepens. It means you spend years performing a self that doesn't fit rather than understanding what is actually happening.",
    whatsNext:
      "The first step is language. The second is structure. You need to understand exactly what matrescence is doing to your identity — and what the path through it looks like. That is what Mother Revival is built for.",
  },
  wilderness: {
    stage: "wilderness",
    title: "Stage Two: The Wilderness",
    subtitle: "You are functioning. That is different from having arrived.",
    description:
      "You have stabilised on the outside. You are competent, capable, present. But inside there is a gap — between who you appear to be and who you actually feel like. You search at midnight. You feel trajectory fear: if you don't figure this out soon, this is just your life now. You love your children and quietly mourn yourself at the same time. Both are true. Neither cancels the other.",
    validation:
      "The Wilderness is the most invisible stage — and the most common one women carry for years without language. You are not depressed. You are not ungrateful. You are not weak. You are experiencing a known identity transition that no one named for you. The exhaustion you feel is not laziness — it is the cost of performing a self that doesn't fit.",
    whatItCosts:
      "The Wilderness resolves on its own only by accident. More often, it calcifies. Women spend a decade here. Functioning. Slightly grieving. Never quite arriving. The longer you stay without structure, the harder it becomes to remember what you were reaching for.",
    whatsNext:
      "You need precise identification — not general support. You need to understand where you are in the transition, what has been restructuring, and what a path through actually looks like. The diagnostic is the first step. The next is a structure built for exactly this stage.",
  },
  searching: {
    stage: "searching",
    title: "Stage Three: The Searching",
    subtitle: "The question has changed. That is significant.",
    description:
      "You are no longer asking 'What is wrong with me?' You are asking 'What now?' That shift is not small — it is the hinge between surviving the transition and beginning to move through it. You are journalling. Researching. Sampling. Looking for a framework that matches the complexity of what you're carrying. The pain hasn't gone. But curiosity is arriving alongside it.",
    validation:
      "The Searching stage is where identity reconstruction becomes active. Your nervous system has moved from threat-response to inquiry. This is biological — it means the acute disruption is beginning to integrate. You are not confused. You are oriented. The appetite you feel for structure, for contribution, for something that is yours — that is not distraction. That is direction.",
    whatItCosts:
      "The risk in the Searching stage is circular searching — sampling without structure, reading without applying, moving between frameworks without a container that holds the work. Without a defined path, the searching can become another form of staying still.",
    whatsNext:
      "You are ready for live contact, structured progression, and community. You don't need more reflection — you need a framework and a path. Mother Revival is built for exactly the moment you are in.",
  },
  rebuilding: {
    stage: "rebuilding",
    title: "Stage Four: The Rebuilding",
    subtitle: "You are not returning. You are constructing something new.",
    description:
      "You know your values — or you are actively clarifying them. New behavioral patterns are forming. You are making choices that feel like yours rather than choices that perform someone else's expectations. The grief is integrating. The groundedness is increasing. You are building something — even if you can't yet see the full shape of it.",
    validation:
      "The Rebuilding stage is evidence that the transition is working. Identity reconstruction is not linear — there will be setbacks, moments of Wilderness-like doubt, days that feel like regression. But you now have enough of yourself to work with. You know what matters. You are choosing it, even when it's hard.",
    whatItCosts:
      "The risk here is building in isolation — or building a version of yourself shaped by what others need rather than what you actually value. Rebuilding without community and without accountability can produce a structure that looks like arrival but doesn't feel like it.",
    whatsNext:
      "You need witnesses and accountability. People who can see what you're building and hold the thread when you lose it. Mother Revival's community and programme structure is built for this stage — for women who are active and need the container, not the starting point.",
  },
  arrival: {
    stage: "arrival",
    title: "Stage Five: The Arrival",
    subtitle: "You are not who you were. You are who you chose to become.",
    description:
      "You have an integrated sense of identity — not perfect, not static, but coherent. You author your life from values, not from performance. You experience motherhood and selfhood as compatible rather than in conflict. The transition has not disappeared. But you have moved through it with enough awareness to know who you are on the other side.",
    validation:
      "The Arrival is not a destination — it is a posture. A way of relating to yourself that remains available even when life becomes difficult again. You have done the work. That work is real, and it is yours.",
    whatItCosts:
      "Women at Stage Five are often the most powerful facilitators of this work for others — they can hold the map for women still in the earlier stages. If you are here, your experience has value beyond yourself.",
    whatsNext:
      "If you are at Stage Five and you found Mother Revival, it may be because someone younger than you shared something and you recognised yourself — not who you are now, but who you were when the ground first shifted. If that's true, there may be a role for you here beyond participant.",
  },
};

export function calculateStage(answers: Stage[]): Stage {
  const counts: Record<Stage, number> = {
    unravelling: 0,
    wilderness: 0,
    searching: 0,
    rebuilding: 0,
    arrival: 0,
  };

  for (const answer of answers) {
    counts[answer]++;
  }

  // Weight toward earlier stages if tied — her most dissonant signal matters most
  const order: Stage[] = ["unravelling", "wilderness", "searching", "rebuilding", "arrival"];
  let topStage: Stage = "wilderness";
  let topCount = 0;

  for (const stage of order) {
    if (counts[stage] > topCount) {
      topCount = counts[stage];
      topStage = stage;
    }
  }

  return topStage;
}
