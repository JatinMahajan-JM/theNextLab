import { NextResponse } from "next/server";

const allDocs = [
    {
        id: "22",
        name: "Document 1",
        content: "This doc has been fetched from server using route handler"
    },
    {
        id: "99",
        name: "Document 2",
        content: "This doc has been fetched from server using route handler"
    }
]

export async function GET() {
    return NextResponse.json(allDocs)
}