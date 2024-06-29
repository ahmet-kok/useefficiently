import DotPattern from "@/components/dot-pattern";
import { Button } from "@/components/ui/button";
import CalCom from "@/components/ui/calcom";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("404");
  const localActive = useLocale();
  return (
    <div className="min-h-[80vh] flex justify-center items-center ">
      <div className="text-center w-full">
        <h1 className="text-4xl p-2 font-bold dark:text-gray-200">
          {t("title")}
        </h1>
        <p className="text-2xl p-4 dark:text-gray-400">{t("description")}</p>
        <CalCom />
        <div className="flex justify-center gap-4">
          <Link href={localActive === "en" ? "/" : "/" + localActive}>
            <Button
              size="lg"
              variant="outline"
              className="px-16 bg-transparent"
            >
              {t("returnHome")}
            </Button>
          </Link>
          <Link
            href={""}
            data-cal-namespace=""
            data-cal-link="useefficiently/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            <Button size="lg" className="px-16">
              {t("bookACall")}
            </Button>
          </Link>
        </div>

        <DotPattern />
      </div>
    </div>
  );
}
