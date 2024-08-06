import Airtable from "airtable";
import { NextResponse } from "next/server";

const airtableApiKey = process.env.AIRTABLE_API_KEY;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;

export async function GET() {
  const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

  try {
    const records = await base("Blogs")
      ._selectRecords({
        fields: ["title", "slug", "date", "content", "tags", "lang", "id"],
        view: "Published",
      })
      .all();
    const fieldsArray = records.map((record) => record.fields);
    return new NextResponse(JSON.stringify(fieldsArray), { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    return new Response("Error fetching data from Airtable", { status: 500 });
  }
}
