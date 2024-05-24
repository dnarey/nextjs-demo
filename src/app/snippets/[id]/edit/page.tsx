import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div className="my-4">
        <SnippetEditForm snippet={snippet} />
      </div>
      <div className="my-4 text-cyan-400">
        <Link href="/">Back to snippets</Link>
      </div>
    </>
  );
}
