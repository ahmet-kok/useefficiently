import { ImageResponse } from "next/og";
import { SiAirtable as AirtableIcon } from "react-icons/si";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "UseEfficiently\nAirtable Services Partner";

    return new ImageResponse(
      (
        <div
          className="bg-zinc-900"
          style={{
            color: "#f5f3ff",

            backgroundColor: "#18181b",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            flexWrap: "nowrap",
            fontSize: 80,
            marginBottom: 150,
            padding: "0 20px",
            whiteSpace: "pre-wrap",
            paddingTop: 100,

          }}
        >

          {title}
          <div
            className=" border-zinc-700 p-2 text-violet-50 bg-zinc-800 border"
            style={{
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
              padding: 8,
              paddingLeft: 26,
              paddingRight: 26,
              gap: 25,
              borderWidth: 1,
              borderRadius: 9999,
              backgroundColor: "#27272a",
              borderColor: "#3f3f46",
            }}
          >
            <span>Use</span>
            <AirtableIcon />
            <span>Efficiently</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
