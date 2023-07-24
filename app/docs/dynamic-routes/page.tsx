import Link from "next/link";

export default function DynamicRouting() {
  return (
    <>
      <p>Features used: </p>
      <p>
        {`
          1. generateStaticParams() -> For fetching all documents and then serving the pre-fetched dynamic routes. This will show an error during build time, if we fetch the data from localhost instead of database.`}
      </p>
      <p>2. Dynamic route</p>
      <p>3. Route Handlers</p>
      <p>
        {" "}
        getStaticPaths() is something similar to generateStaticParams() but the
        difference is generateStaticParams() pre-fetch all the ids but
        getStaticPaths fetch only the specified ids
      </p>
      <Link href={"/docs/dynamic-routes/99"} className="text-red-400">
        This Link will take you to ...currenturl/99
      </Link>
      <Link href={"/docs/dynamic-routes/22"} className="text-red-400">
        This Link will take you to ...currenturl/22
      </Link>
    </>
  );
}
