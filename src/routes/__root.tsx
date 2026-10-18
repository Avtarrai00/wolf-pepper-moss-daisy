import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const themeBoot = `(function(){try{var light=localStorage.getItem("as-theme")==="light";if(light)document.documentElement.classList.add("light");var bg=light?"#f3f0e8":"#0c0c0e";document.documentElement.style.backgroundColor=bg;var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute("content",bg);}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Avtar Singh" },
      {
        name: "description",
        content:
          "Portfolio of Avtar Singh, a creative developer in Ludhiana. Calm interfaces, useful software, and thoughtful digital experiences.",
      },
      { name: "author", content: "Avtar Singh" },
      { name: "theme-color", content: "#0c0c0e" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: "html{background:#0c0c0e}" }} />
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body suppressHydrationWarning>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
