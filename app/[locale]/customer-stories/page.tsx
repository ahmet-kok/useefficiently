"use client"

import contents from "@/public/contents/customer-stories/contents.json";
import { CustomerStoriesBento } from "@/components/customer-stories-bento";
import Section from "@/components/section";
import useMetadata from "@/hooks/useMetadata";
export default function Page() {
  useMetadata(
    "Customer Stories - UseEfficiently",
    "Read about how UseEfficiently has helped businesses like yours to master Airtable and use it efficiently to meet all their needs."  );

  return (
    <Section center>
      <CustomerStoriesBento contents={contents} />
    </Section>
  );
}
