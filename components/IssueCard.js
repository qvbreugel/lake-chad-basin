import Link from "next/link";

export default function IssueCard({ issue }) {
  return (
    <Link href={issue.replace(/\s/g, "")}>
      <div className="rounded border text-gray-50 border-primary w-48 h-16 flex justify-center items-center cursor-pointer hover:bg-primary">
        <p className="capitalize text-2xl">{issue}</p>
      </div>
    </Link>
  );
}
