import Section from "@/components/section";
import FeatureCards from "@/components/feature-cards";

export default function Features() {
  return (
    <Section
      title="Our Airtable Based Solutions"
      description="We offer a range of Airtable based solutions to help you manage your business more effectively. Our solutions are designed to help you streamline your workflows, automate repetitive tasks, and gain valuable insights into your data."
    >
      {/* <div className="flex items-center">
        <div className="button-area ">
          <Link
            href={"mailto:" + information.email}
            className="relative buttons"
          >
            <span></span>

            <ShinyButton text={information.email} />
          </Link>
          <Link href="customer-stories" className="buttons">
            <ShinyButton text="Read Our Customer Stories" />
          </Link>
        </div>
      </div> */}
      <FeatureCards />
    </Section>
  );
}
