import "./globals.css";
import QueryProvider from "@/src/providers/QueryProvider";

export const metadata = {
  title: "Movie Catalog",
  description: "Catálogo de filmes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
