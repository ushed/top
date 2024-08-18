import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const filePath = path.join(
    process.cwd(),
    "public/BlogDetail",
    `${params.slug}.json`
  );

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
