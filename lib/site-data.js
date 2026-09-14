export const site = {
  name: "BrightRise Academy",
  shortName: "BrightRise",
  url: "https://www.brightriseacademy.com",
  tagline: "Personal online tutoring for Kindergarten through Grade 10",
  phone: "+91 8179270850",
  whatsapp: "918179270850",
  email: "brightriseacademy@gmail.com",
};
export const navLinks = [
  { href: "/", label: "Home" }, { href: "/online-tutoring", label: "Online Tutoring" },
  { href: "/subjects", label: "Subjects" }, { href: "/grades", label: "Grades" },
  { href: "/how-it-works", label: "How It Works" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
];
export const subjects = [
  {
    slug: "math", href: "/math-tutoring", name: "Mathematics", grade: "Kindergarten – Grade 10",
    blurb: "Turn tricky problems into little moments of discovery.",
    overview: "Build number confidence, understand the why behind each method, and approach new problems one clear step at a time. Lessons adapt to your child's current understanding and school curriculum.",
    topics: ["Number sense", "Fractions", "Algebra", "Geometry", "Problem solving"],
    highlights: ["Visual explanations before abstract formulas", "Practice matched to your child's level", "Space to revisit foundations", "Support with reasoning and schoolwork"],
  },
  {
    slug: "science", href: "/science-tutoring", name: "Science", grade: "Kindergarten – Grade 10",
    blurb: "For the curious minds who never stop asking “why?”",
    overview: "Connect classroom concepts to the world around us. From living things to forces and chemical reactions, we help students explore ideas, ask better questions, and explain what they understand.",
    topics: ["Biology", "Chemistry", "Physics", "Earth & space", "Scientific reasoning"],
    highlights: ["Everyday examples that make ideas tangible", "Guided support with diagrams and calculations", "Scientific vocabulary explained simply", "Topics aligned with current school learning"],
  },
  {
    slug: "english", href: "/english-classes", name: "English", grade: "Kindergarten – Grade 10",
    blurb: "Find their words. Discover their voice. Tell their story.",
    overview: "Grow reading confidence, express ideas clearly, and make writing feel more approachable. Each lesson balances the skills your child needs with the encouragement to use them.",
    topics: ["Reading", "Writing", "Grammar", "Vocabulary", "Literature"],
    highlights: ["Reading strategies for each stage", "Grammar connected to real writing", "Patient feedback on expression", "Comprehension and vocabulary development"],
  },
  {
    slug: "coding", href: "/coding-classes", name: "Coding", grade: "Beginner-friendly",
    blurb: "Little ideas become things they can actually build.",
    overview: "Explore programming through approachable challenges and small projects. Students practise logic, break problems into steps, and build the confidence to try, debug, and try again.",
    topics: ["Programming", "Python", "Logic", "Problem solving", "Computational thinking"],
    highlights: ["An introduction matched to experience", "Projects with a clear purpose", "Step-by-step programming concepts", "Problem-solving habits beyond the screen"],
  },
  {
    slug: "social-studies", href: "/subjects/social-studies", name: "Social Studies", grade: "Kindergarten – Grade 10",
    blurb: "Understand our world, its people, and their stories.",
    overview: "Explore places, communities, and the events that shape our lives. Lessons help students connect ideas in history, geography, and civics with their own experiences and school curriculum.",
    topics: ["History", "Geography", "Civics", "Cultures", "Communities"],
    highlights: ["Stories and maps that give context", "Making connections between events", "Clear explanations of key vocabulary", "Thinking critically about the wider world"],
  },
];
const stages = [
  ["Kindergarten", "kindergarten", "Early foundations", "Discover letters, numbers, shapes, and the joy of asking questions.", ["Counting and shapes", "Phonics and sounds", "The world around us"]],
  ["Grade 1", "grade-1", "Early foundations", "Build confidence with early reading, simple sentences, and numbers.", ["Addition and subtraction", "Reading short sentences", "Plants and animals"]],
  ["Grade 2", "grade-2", "Early foundations", "Connect familiar ideas as reading, writing, and number skills become more independent.", ["Place value and measurement", "Reading comprehension", "Materials and habitats"]],
  ["Grade 3", "grade-3", "Growing confidence", "Make the leap to longer texts, multiplication, and explaining how things work.", ["Multiplication and division", "Paragraph writing", "Life cycles and forces"]],
  ["Grade 4", "grade-4", "Growing confidence", "Develop strategies for multi-step problems, organised writing, and scientific questions.", ["Fractions and decimals", "Organising ideas", "Energy and ecosystems"]],
  ["Grade 5", "grade-5", "Growing confidence", "Strengthen the skills and study habits that make the transition to middle school easier.", ["Decimals and geometry", "Reading for meaning", "Matter and Earth systems"]],
  ["Grade 6", "grade-6", "Deeper learning", "Navigate new subjects and expectations with stronger reasoning and independent learning habits.", ["Ratios and early algebra", "Evidence-based writing", "Cells and physical science"]],
  ["Grade 7", "grade-7", "Deeper learning", "Build connections between concepts and learn to explain solutions with clarity.", ["Proportions and equations", "Text analysis", "Interactions and energy"]],
  ["Grade 8", "grade-8", "Deeper learning", "Prepare for more advanced schoolwork with structured practice and deeper understanding.", ["Linear equations and geometry", "Argument and expression", "Forces and reactions"]],
  ["Grade 9", "grade-9", "Bigger horizons", "Tackle the growing demands of secondary school with a focused plan for each subject.", ["Algebra and functions", "Literature and essay writing", "Biology, chemistry and physics"]],
  ["Grade 10", "grade-10", "Bigger horizons", "Consolidate understanding, address gaps, and approach demanding assessments with a clear strategy.", ["Advanced algebra and geometry", "Critical reading and composition", "Scientific concepts and applications"]],
];
export const grades = stages.map(([name, slug, ageRange, focus, topics], number) => ({
  number, name, slug, ageRange, focus, topics, subjects: subjects.map(subject => subject.name),
}));
export const faqs = [
  { q: "What subjects can my child learn?", a: "BrightRise offers Mathematics, Science, English, Social Studies, and Coding. Lessons are shaped around the student's grade, current understanding, and goals." },
  { q: "Are the sessions really one-on-one?", a: "Yes. Each live online session is between one student and one tutor, with room to ask questions and work at a comfortable pace." },
  { q: "Which grades do you support?", a: "We support students from Kindergarten through Grade 10. Coding is beginner-friendly, with the starting point tailored to the student's experience." },
  { q: "Will tutoring fit their school curriculum?", a: "Curricula vary by school and country. Tutors aim to align lessons with what your child is studying, adapting the learning plan to their needs." },
  { q: "How does the free trial work?", a: "Share your child's grade, subject, and preferred timing. Our team will contact you to arrange an introductory session with a suitable tutor." },
  { q: "Can we join from another country?", a: "Yes. BrightRise provides live online tutoring for families worldwide. Share your country and preferred timing so the team can discuss suitable options." },
];
export const testimonials = [
  {
    quote: "My daughter used to dread word problems. A few months in, she asks to do extra practice on her own.",
    name: "Priyanka Shah",
    role: "Parent of a Grade 5 learner",
  },
  {
    quote: "Her chemistry tutor explains things twice, three times, however many it takes, without ever making her feel slow.",
    name: "David Whitfield",
    role: "Parent of a Grade 9 learner",
  },
  {
    quote: "We tried two other platforms first. This is the one where the same tutor showed up every single week.",
    name: "Meera Nair",
    role: "Parent of a Grade 3 learner",
  },
  {
    quote: "The weekly notes are what sold me. I finally know what is happening in the lesson instead of guessing.",
    name: "Thomas Reyes",
    role: "Parent of a Grade 7 learner",
  },
];
export const stats = [{ value: "1-on-1", label: "Personal attention" }, { value: "5", label: "Subjects" }, { value: "K–10", label: "Grades" }];
export const steps = [];
export const whyUs = [];
