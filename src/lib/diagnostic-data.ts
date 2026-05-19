export type Stage = "unravelling" | "wilderness" | "searching" | "rebuilding";

export interface Option {
  text: string;
  stage: Stage;
}

export interface Question {
  id: number;
  block: string;
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    block: "Identity Baseline",
    question: "When you try to think about who you are outside of being a mom or your job, what happens?",
    options: [
      { text: "It feels like a total blank space. I look inside and it's like the old me completely vanished and left nothing behind.", stage: "unravelling" },
      { text: "I know she's in there, but there's a massive gap between the capable, put-together mom everyone sees and the woman inside who feels completely missing.", stage: "wilderness" },
      { text: "I'm starting to feel a quiet curiosity. I find myself trying to remember what I used to love or care about before everything became about caregiving.", stage: "searching" },
      { text: "It feels like an active project. I'm actively learning how to say no and protect my own space so I don't lose myself again.", stage: "rebuilding" },
    ],
  },
  {
    id: 2,
    block: "The Nervous System",
    question: "How does your body handle the everyday noise, touch, and demands of your environment right now?",
    options: [
      { text: "I am completely flooded. A crying child, clutter, or a simple question from my partner feels like a physical shock to my system, and I just want to escape.", stage: "unravelling" },
      { text: "I feel the noise, but I've learned to completely tune out or go numb just to get through the day and cross things off my list.", stage: "wilderness" },
      { text: "I'm starting to notice my patterns. I can finally tell the difference between just being standard tired and being genuinely overstimulated by the noise around me.", stage: "searching" },
      { text: "I protect my limits. I take quiet breaks or step away before I hit a breaking point, and I'm comfortable telling my family when I need space.", stage: "rebuilding" },
    ],
  },
  {
    id: 3,
    block: "Relationship to the Former Self",
    question: "How do you currently view the \"pre-motherhood\" version of yourself?",
    options: [
      { text: "I look back with an acute sense of grief or longing — it feels like an entirely separate person who vanished.", stage: "unravelling" },
      { text: "I try not to think about her; there is simply too much immediate work to do in the present reality to dwell on the past.", stage: "wilderness" },
      { text: "I am starting to carefully examine her to see which of her old values, hobbies, and desires actually still belong in my life now.", stage: "searching" },
      { text: "I am actively updating her. I don't want her back exactly as she was; I am building a new version that fits who I have grown to become.", stage: "rebuilding" },
    ],
  },
  {
    id: 4,
    block: "Processing Overwhelm",
    question: "When you hit a wall of deep fatigue, resentment, or sensory overload, what is your default reaction?",
    options: [
      { text: "I assume something is fundamentally wrong with my character and wonder why other mothers seem to handle this so smoothly.", stage: "unravelling" },
      { text: "I ignore it entirely, swallow the discomfort, and over-function even harder to compensate and keep the peace.", stage: "wilderness" },
      { text: "I try to treat it as data — tracking down the root cause and identifying the exact invisible labor that sparked the crash.", stage: "searching" },
      { text: "I clearly communicate an internal limit or set a structural boundary without letting myself be consumed by guilt.", stage: "rebuilding" },
    ],
  },
  {
    id: 5,
    block: "The Visibility Factor",
    question: "How visible does your true internal psychological weight feel to the people closest to you?",
    options: [
      { text: "They know I am struggling, but I lack the clean, clear language to make them truly comprehend the depth or nature of this transition.", stage: "unravelling" },
      { text: "Completely invisible. The distance between my calm, capable external performance and my chaotic internal landscape feels vast.", stage: "wilderness" },
      { text: "I am starting to find my voice and articulate objective pieces of the mental and cognitive load with my partner or safe peers.", stage: "searching" },
      { text: "We have a clear, active system for continuously dividing up cognitive and physical life-management tasks without resentful blowups.", stage: "rebuilding" },
    ],
  },
  {
    id: 6,
    block: "The Self-Care Lens",
    question: "When you hear standard self-care suggestions (like taking a bubble bath, getting a manicure, or buying a coffee), what is your honest internal reaction?",
    options: [
      { text: "They feel completely out of reach. I don't even have the spare mental bandwidth required to plan or execute a simple break for myself.", stage: "unravelling" },
      { text: "They feel insulting or dismissive. My exhaustion isn't caused by a lack of a hot bath; it's a deep, structural depletion of identity.", stage: "wilderness" },
      { text: "They make me realise I need actual systemic life shifts and role renegotiations rather than temporary surface-level band-aids.", stage: "searching" },
      { text: "I treat self-reconnection as a non-negotiable debt payment to my own health, scheduling and protecting it with firm boundaries.", stage: "rebuilding" },
    ],
  },
  {
    id: 7,
    block: "Daily Mental Allocation",
    question: "Where is your mental focus primarily directed during a typical, unstructured hour of your day?",
    options: [
      { text: "In immediate containment. Just attempting to regulate my emotions and make it to the end of the bedtime routine without breaking.", stage: "unravelling" },
      { text: "In managing execution. Scanning the endless logistical layers, hidden household tasks, and family appointments flawlessly.", stage: "wilderness" },
      { text: "In careful introspection. Wondering who I am actually building myself into once this current survival fog completely clears.", stage: "searching" },
      { text: "In deliberate personal growth. Stepping confidently into creative projects, boundaries, or goals that run entirely separate from my family role.", stage: "rebuilding" },
    ],
  },
  {
    id: 8,
    block: "The Resentment Compass",
    question: "How does the emotion of resentment present itself in your current life layout?",
    options: [
      { text: "It is swallowed down instantly as toxic shame. I feel deeply guilty, selfish, or like a bad mother for even experiencing it.", stage: "unravelling" },
      { text: "It feels like a heavy, corrosive layer of secret static directed constantly at my partner, my kids, or the unfairness of the layout.", stage: "wilderness" },
      { text: "I am beginning to see it clearly as useful biological data signalling an unexpressed boundary or a spot where I am self-abandoning.", stage: "searching" },
      { text: "It rarely builds up into a heavy crisis anymore because I catch the signal early and actively adapt my boundaries or roles.", stage: "rebuilding" },
    ],
  },
  {
    id: 9,
    block: "Current State of Desire",
    question: "Select the statement that feels closest to your relationship with your own personal desires right now:",
    options: [
      { text: "I honestly do not know what I want, need, or look forward to anymore if it doesn't directly involve my children's welfare.", stage: "unravelling" },
      { text: "I know exactly what I want or need, but I systematically sacrifice it daily to keep the peace and keep the household system stable.", stage: "wilderness" },
      { text: "I am currently compiling a mental or physical list of personal values, projects, and curiosities that feel distinct and exciting to me.", stage: "searching" },
      { text: "I am systematically implementing a practical roadmap to bring my personal visions and creative or professional outlets into reality.", stage: "rebuilding" },
    ],
  },
  {
    id: 10,
    block: "The Immediate Wish",
    question: "If you could magically change one thing about your internal landscape today, what would it be?",
    options: [
      { text: "To stop feeling like I am floating in a volatile storm and find some semblance of solid ground to stand on.", stage: "unravelling" },
      { text: "To drop the exhausting daily performance of looking completely fine and perfectly capable to everybody else.", stage: "wilderness" },
      { text: "To get strategic, structured clarity on how to actually rebuild my personal identity framework long-term.", stage: "searching" },
      { text: "To expand my new, stable self into bolder areas of work, community impact, or personal enterprise.", stage: "rebuilding" },
    ],
  },
];

export interface StageResult {
  stage: Stage;
  stageNumber: string;
  title: string;
  archetype: string;
  landscape: string;
  truth: string;
  nextStep: string;
  resource: string;
  resourceName: string;
  resourcePrice: string;
  // Stage IV only — dual offer
  secondaryResource?: string;
  secondaryResourceName?: string;
  secondaryResourcePrice?: string;
}

export const stageResults: Record<Stage, StageResult> = {
  unravelling: {
    stage: "unravelling",
    stageNumber: "I",
    title: "The Unravelling",
    archetype: "Stage I — The Unravelling",
    landscape:
      "You are in a season of intense unravelling. Becoming a mother is a massive identity transition, and right now, your body and mind are working overtime just to keep the baseline steady. It is completely normal that you feel exhausted, overwhelmed, and unsure of where you went. You are not broken, and you are not failing. Your system is simply processing a massive developmental shock.",
    truth: "",
    nextStep:
      "Your only goal right now is to release the expectation that you should be further along than this. Your body is in a state of Nervous System Overdraft. You have spent physical and emotional energy you literally did not possess, and your system has temporarily frozen the account to protect you. Stop trying to fix the future or redesign your life today. Your only job right now is to find small pockets of physical quiet and allow your body to rest without judgment.",
    resource:
      "You do not have the bandwidth or the spare time for a heavy course right now. You need our short, 3-minute, hands-free audio tools designed to gently pull your body out of survival mode while you go about your day.",
    resourceName: "The Nervous System \"First Aid\" Kit",
    resourcePrice: "$27",
  },
  wilderness: {
    stage: "wilderness",
    stageNumber: "II",
    title: "The Wilderness",
    archetype: "Stage II — The Wilderness",
    landscape:
      "You are living in the space between who everyone sees and how you actually feel. On the outside, you look like you've got it completely handled — you are capable, reliable, and you keep your family or career moving beautifully. But on the inside, you feel completely lonely, hollow, and a little resentful. You are expending an immense amount of daily energy pretending you are fine, carrying a massive mental load while quietly disappearing from your own life.",
    truth:
      "This isn't a personal flaw; it's Identity Debt. You've been trading away small pieces of your own needs every single day to keep everyone else happy and stable. That debt has finally caught up with you.",
    nextStep:
      "Because you are a highly capable woman carrying so much weight, you don't need a generic checklist or an online article telling you to \"practice gratitude.\" That feels like more homework. You need a real, strategic system to look at everything you are holding, figure out what belongs to you, and learn how to put the rest down without the crushing weight of mom-guilt.",
    resource:
      "This is a premium, operational framework designed specifically for high-functioning mothers. We don't do fluff. We give you the exact structural tools to map out your invisible labor, close the gap between your inner and outer life, and reclaim your identity while keeping your family stable.",
    resourceName: "The Wilderness Blueprint & Mastery System",
    resourcePrice: "$199",
  },
  searching: {
    stage: "searching",
    stageNumber: "III",
    title: "The Searching",
    archetype: "Stage III — The Searching",
    landscape:
      "The heavy survival fog is finally starting to clear, and your brain is waking up. You are entering a beautifully dynamic milestone where your vital energy is returning. You find yourself asking the big questions again: Who am I now? What do I actually want? What pieces of my old self do I want to bring with me into the future?",
    truth:
      "The fact that you have been looking for answers — reading books, listening to podcasts, or trying new wellness habits — is incredible proof that you are ready to reclaim your life. You've done the hard work of gathering information and testing the waters.",
    nextStep:
      "You have successfully collected all the loose pieces of the puzzle. Now, you are ready to put them together. Instead of just adding more self-help concepts or random tips to your daily to-do list, your work now is to step into a single, focused, and deliberate structure that organises all of those thoughts. You don't need more information; you are ready for a clear, solid roadmap.",
    resource:
      "A deliberate, highly structural framework designed to take the guesswork out of your self-reflection, helping you turn your returning energy into a clear, solid blueprint of who you are becoming.",
    resourceName: "The Searching Roadmap & Core Values System",
    resourcePrice: "$199",
  },
  rebuilding: {
    stage: "rebuilding",
    stageNumber: "IV",
    title: "The Rebuilding",
    archetype: "Stage IV — The Rebuilding",
    landscape:
      "You have made it out of the thick survival fog, and you are actively working as the architect of your new life. You have moved past just thinking about change — you are now actively setting real boundaries, protecting your time, and rewriting the rules of your daily life. You are learning how to let your roles as a woman and a mother exist side-by-side without them being at war.",
    truth:
      "This is an incredibly powerful milestone, but it comes with a hidden friction point. Because you are changing the old, accommodating patterns that everyone else was used to, the systems around you might be starting to push back. Your biggest silent fear right now is Structural Slippage — the worry that if life gets too busy or a crisis hits, you will lose your footing and slide right back into the invisible, depleted survival mode you worked so hard to escape.",
    nextStep:
      "You don't need a basic introduction to matrescence, and you don't need to do any more digging into your past. You have the momentum; now you need the infrastructure to protect it. Your focus must shift from creating changes to stabilising them so they become permanent.",
    resource:
      "If your primary focus right now is internal, independent execution — solidifying your own routines, goals, and solo boundaries — this targeted framework is your blueprint.",
    resourceName: "The Rebuilding Framework & Boundaries System",
    resourcePrice: "$199",
    secondaryResource:
      "If you have a partner or a support system you want to bring into this process, The Full Arc Bundle is the right move. It includes our flagship curriculum alongside The Witness Partner Manual — a translation guide that closes the gap the $199 system can't. It gives your partner the exact language to understand your new boundaries, meet your growth without friction, and support your integration seamlessly.",
    secondaryResourceName: "The Full Arc Bundle + Witness Partner Manual",
    secondaryResourcePrice: "$497",
  },
};

export function calculateStage(answers: number[]): Stage {
  const counts: Record<Stage, number> = {
    unravelling: 0,
    wilderness: 0,
    searching: 0,
    rebuilding: 0,
  };

  answers.forEach((answerIndex, qIndex) => {
    const q = questions[qIndex];
    if (!q) return;
    const opt = q.options[answerIndex];
    if (!opt) return;
    counts[opt.stage]++;
  });

  // Tie-breaker: loop in reverse (rebuilding → unravelling) using >=
  // so equal scores always resolve to the earlier (safer) stage
  const order: Stage[] = ["rebuilding", "searching", "wilderness", "unravelling"];
  let result: Stage = "unravelling";
  let max = -1;

  for (const stage of order) {
    if (counts[stage] >= max) {
      max = counts[stage];
      result = stage;
    }
  }

  return result;
}
