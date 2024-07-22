import contents from "@/public/contents/customer-stories/contents.json";
import { CustomerStoriesBento } from "@/components/customer-stories-bento";
import Component from "@/components/component";
export default function Page() {
  return (
    <Component center>
      <CustomerStoriesBento contents={contents} />
    </Component>
  );
}
