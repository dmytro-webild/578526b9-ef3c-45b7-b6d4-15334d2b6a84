import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'КРУТОЙ УОКЕР | Барбершоп Уфа',
  description: 'Барбершоп КРУТОЙ УОКЕР в Уфе. Мужские стрижки, бритье опасной бритвой, стиль и брутальность. Записывайся онлайн!',
  keywords: ["барбершоп, Уфа, мужская стрижка, бритье, опасная бритва, мужской стиль, парикмахерская, барбер"],
  openGraph: {
    "title": "КРУТОЙ УОКЕР | Барбершоп Уфа",
    "description": "Барбершоп КРУТОЙ УОКЕР в Уфе. Мужские стрижки, бритье опасной бритвой, стиль и брутальность. Записывайся онлайн!",
    "url": "https://coolwoker-barbershop.ru",
    "siteName": "КРУТОЙ УОКЕР",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/barber-doing-haircut-bearded-aged-client-hair-salon_23-2148182013.jpg",
        "alt": "Брутальная мужская стрижка"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "КРУТОЙ УОКЕР | Барбершоп Уфа",
    "description": "Барбершоп КРУТОЙ УОКЕР в Уфе. Мужские стрижки, бритье опасной бритвой, стиль и брутальность. Записывайся онлайн!",
    "images": [
      "http://img.b2bpic.net/free-photo/barber-doing-haircut-bearded-aged-client-hair-salon_23-2148182013.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
