export async function generateStaticParams() {
  const docs = (await fetch("http://localhost:3000/api/allDocs").then((res) =>
    res.json()
  )) as { id: string; name: string; content: string }[];
  return docs.map((doc) => ({
    id: doc.id,
  }));
}

export default async function DynamicId({
  params,
}: {
  params: { id: string };
}) {
  let doc = await fetch(`http://localhost:3000/api/allDocs/${params.id}`);
  const data = await doc.json();
  return (
    <>
      <p>The doc : "{data?.name}" has been fetched</p>
      <p>Content: {data?.content}</p>
    </>
  );
}
