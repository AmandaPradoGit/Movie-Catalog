import "./globals.css";

export const metadata = {
  title: "Movie Catalog",
  description: "Catálogo de filmes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
