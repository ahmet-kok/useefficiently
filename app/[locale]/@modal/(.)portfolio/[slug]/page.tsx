import { Modal } from "./modal";
/* import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; */
export default function PortfolioModal({
  params: { slug },
}: {
  params: { slug: string };
}) {
/*   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isDrawerOpen) {
      console.log("Drawer is closed");
      router.back();
    }
  }, [isDrawerOpen, , router]);
 */
  return (
    <Modal
      slug={slug}
/*       open={isDrawerOpen ? true : false}
      setOpen={setIsDrawerOpen} */
    />
  );
}
