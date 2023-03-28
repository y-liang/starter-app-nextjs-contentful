
import './globals.css';

export const metadata = {
  title: 'A Static Website Template',
  description: 'Minimal setup for building a website with Next.js, Tailwind CSS, Contentful CMS, Docker, Nginx',
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
