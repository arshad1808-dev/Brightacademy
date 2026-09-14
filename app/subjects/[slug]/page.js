import { notFound, permanentRedirect } from "next/navigation";
import { subjects } from "@/lib/site-data";
import SubjectDetail from "@/components/SubjectDetail";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return subjects.map(subject => ({ slug: subject.slug })); }
export async function generateMetadata({ params }) {
  params = await params;
  const subject = subjects.find(item => item.slug === params.slug);
  return subject ? pageMetadata(subject.href, subject.name + " Online Tutoring", subject.overview) : {};
}
export default async function SubjectPage({ params }) {
  params = await params;
  const subject = subjects.find(item => item.slug === params.slug);
  if (!subject) notFound();
  if (subject.slug !== "social-studies") permanentRedirect(subject.href);
  return <SubjectDetail subject={subject} />;
}
