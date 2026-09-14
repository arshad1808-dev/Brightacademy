import { notFound, permanentRedirect } from "next/navigation";
import { grades } from "@/lib/site-data";
export function generateStaticParams() { return grades.flatMap(grade => [{ slug: grade.slug }, ...(grade.number ? [{ slug: "class-" + grade.number }] : [])]); }
export default async function LegacyGradePage({ params }) {
  params = await params;
  const slug = params.slug.replace(/^class-/, "grade-");
  if (!grades.some(grade => grade.slug === slug)) notFound();
  permanentRedirect("/grades/" + slug);
}
