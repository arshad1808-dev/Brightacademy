import { site, subjects, grades } from "@/lib/site-data";

export default function sitemap() {
  const geoPaths = [
    "/us",
    "/us/math-tutoring",
    "/us/science-tutoring",
    "/us/grade-4-math-tutoring",
    "/us/grade-5-math-tutoring",
    "/us/grade-6-math-tutoring",
    "/us/grade-10-math-tutoring",
    "/uk",
    "/uk/maths-tutoring",
    "/uk/year-5-maths-tutor",
    "/uk/gcse-maths-tutoring",
    "/canada",
    "/canada/math-tutoring",
    "/canada/grade-6-math-tutor",
  ];

  const paths = [
    "/",
    "/online-tutoring",
    "/subjects",
    "/grades",
    "/how-it-works",
    "/mental-math-challenge",
    "/about",
    "/faq",
    "/contact",
    "/book-a-free-trial",
    "/blog",
    ...geoPaths,
    ...subjects.map((subject) => subject.href),
    ...grades.map((grade) => "/grades/" + grade.slug),
  ];

  return [...new Set(paths)].map((path) => ({
    url: site.url + path,
    changeFrequency: path === "/" || path === "/blog" || path === "/mental-math-challenge" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1.0
        : path === "/us" || path === "/uk" || path === "/canada"
        ? 0.9
        : path.startsWith("/us/") || path.startsWith("/uk/") || path.startsWith("/canada/")
        ? 0.85
        : path.startsWith("/grades/")
        ? 0.7
        : 0.8,
  }));
}
