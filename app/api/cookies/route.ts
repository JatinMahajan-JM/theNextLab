import { cookies } from "next/dist/client/components/headers";

export function POST() {
    cookies().set("cookie", "Chocolate-cookie")
    return new Response("Cookie has been set")
}

export function GET() {
    const value = cookies().get("cookie")
    return new Response(JSON.stringify(value))
}