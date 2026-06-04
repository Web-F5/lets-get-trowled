import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Plastering Seymour VIC | Let's Get Trowled",
  description:
    "Common questions about our plastering services in Seymour & Central Victoria. Licensing, insurance, timelines, repairs, quotes & more. Get answers here.",
  alternates: { canonical: "https://letsgettrowled.com.au/faq" },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
