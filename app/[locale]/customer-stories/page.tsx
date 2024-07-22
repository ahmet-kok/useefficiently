import contents from "@/public/contents/customer-stories/contents.json";
import { CustomerStoriesBento } from "@/components/customer-stories-bento";
import Section from "@/components/section";
export default function Page() {
  return (
    <Section center>
      <CustomerStoriesBento contents={contents} />
    </Section>
  );
}
