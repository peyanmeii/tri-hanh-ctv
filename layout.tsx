import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tri Hành | Cộng tác viên",
  description: "Cổng cộng tác viên tuyển dụng Tri Hành"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
