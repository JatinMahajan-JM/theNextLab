import Link from "next/link";

export default function DynamicRouting() {
  return (
    <>
      <Link href={"/docs/dynamic-routes/99"}>
        This Link will take you to ...currenturl/99
      </Link>
      <Link href={"/docs/dynamic-routes/22"}>
        This Link will take you to ...currenturl/22
      </Link>
      <h4>Generating static params</h4>
    </>
  );
}
