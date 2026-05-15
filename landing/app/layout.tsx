import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedBackground } from "@/components/animated-background";
import { ClickSparks } from "@/components/click-sparks";
import { I18nProvider } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("codeforge-theme");
                const theme = storedTheme === "light" || storedTheme === "dark"
                  ? storedTheme
                  : (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;
                const storedLanguage = localStorage.getItem("codeforge-language");
                const language = storedLanguage === "en-US" || storedLanguage === "pt-BR" || storedLanguage === "es-ES"
                  ? storedLanguage
                  : "en-US";
                document.documentElement.lang = language;
                document.documentElement.dataset.language = language;
              } catch {
                document.documentElement.dataset.theme = "dark";
                document.documentElement.style.colorScheme = "dark";
                document.documentElement.lang = "en-US";
                document.documentElement.dataset.language = "en-US";
              }
            `,
          }}
        />
      </head>
      <body>
        <I18nProvider>
          <AnimatedBackground />
          <ClickSparks />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
