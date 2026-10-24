import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نسق | زخارف من إبداعك" },
      { name: "description", content: "نسق: صمّم زخارفك الخاصة بسهولة وإبداع." },
      { property: "og:title", content: "نسق | زخارف من إبداعك" },
      { property: "og:description", content: "نسق: صمّم زخارفك الخاصة بسهولة وإبداع." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/nasaq.html"
      title="نسق"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
