import { ThemeProvider } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shivanshu",
      url: "https://shivanshu.in",
    },
  ],
  creator: "shivanshu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@bishtshivanshu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
} satisfies Metadata;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
} satisfies Viewport;

const navItems = [
  { name: "Contact", href: "/contact" },
  { name: "RSS", href: "/rss.xml" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto max-w-2xl p-6 pt-3 md:pt-6">
            <header className="mb-5 flex items-center md:mb-10">
              <span className="text-md whitespace-nowrap font-bold md:text-lg">
                <h1 className="cursor-default pr-2">Shivanshu Bisht</h1>
              </span>
              <nav className="flex grow items-center justify-end gap-1 md:gap-3">
                <div className="flex gap-x-4 text-primary/40">
                  {navItems.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="hover:text-primary hover:underline hover:underline-offset-4 hover:transition-transform"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </nav>
            </header>
            {children}
          </main>
          <TailwindIndicator />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
