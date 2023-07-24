export default function DynamicId({ params }: { params: { id: string } }) {
  return (
    <>
      <p>The id in the url is: {params.id}</p>
    </>
  );
}
