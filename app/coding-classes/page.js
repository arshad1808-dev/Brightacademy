import { subjects } from "@/lib/site-data";
import SubjectDetail from "@/components/SubjectDetail";
import { pageMetadata } from "@/lib/seo";
const subject = subjects.find(item => item.slug === "coding");
export const metadata = pageMetadata(subject.href, subject.name + " Online Tutoring", subject.overview);
export default function SubjectPage() { return <SubjectDetail subject={subject} />; }
