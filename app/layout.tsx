
import './globals.css';

export const metadata = {
  title: 'A Web Application Template',
  description: 'Designed as a scaffold for building company websites, marketing pages, or blogs.',
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
