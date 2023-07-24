import { NextRequest, NextResponse } from "next/server";

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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    let doc = allDocs.find(doc => doc.id == params.id);
    if (!doc) throw new Error("NO DOCUMENT FOUND WITH THIS ID")
    return NextResponse.json(doc)
}