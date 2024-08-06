import { ImageResponse } from "next/og";
import { AirtableIcon } from "@/components/icons";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              fontSize: 60,
              fontStyle: "bold",
              letterSpacing: "-0.025em",
              lineHeight: 1.5,
              whiteSpace: "pre-wrap",
              height: 150,
            }}
          >
            <img
              alt="Vercel"
              height={100}
              src="http://localhost:3000/useefficiently.svg"
              width={100}
            />
            <span>UseEfficiently</span>
          </div>
          <div
            style={{
              fontSize: 80,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              padding: "0 40px",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              fontSize: 70,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
              height: 200,
              gap: 25,
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
