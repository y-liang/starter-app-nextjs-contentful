
import './globals.css';

export const metadata = {
  title: 'Starter for Building a Website',
  description: 'Minimal setup for building a website with Next.js, Tailwind CSS, Contentful CMS, GraphQL, Docker, Nginx',
};

export default function RootLayout(
  { children }: { children: React.ReactNode; }
) {
  return (
    <html lang="en">
      <body>
        <section className="bg-gradient-to-r from-cyan-50 to-blue-50">
          { children }
        </section>
      </body>
    </html>
  );
}
