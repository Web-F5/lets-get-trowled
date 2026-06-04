import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Plastering Quote Seymour VIC | Let's Get Trowled",
  description:
    "Get a free quote for plastering services in Seymour & Central Victoria. Call 0422 820 129 or fill in our contact form. We respond promptly to all enquiries.",
  alternates: { canonical: "https://letsgettrowled.com.au/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
