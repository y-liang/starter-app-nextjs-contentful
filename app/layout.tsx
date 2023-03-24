
import './globals.css';

export const metadata = {
  title: 'Template for Static Websites',
  description: 'Scaffold of Next.js, Tailwind CSS, Contentful CMS, Docker, Nginx',
};

export default function RootLayout(
  { children }: { children: React.ReactNode; }
) {
  return (
    <html lang="en">
      <body>
        <section className="bg-white">
          { children }
        </section>
      </body>
    </html>
  );
}
