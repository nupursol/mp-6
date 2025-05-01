import { Providers } from './providers';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Providers> {/*wrapping children with Providers to provide context*/}
            {children} {/* rendering the page content (children passed to this layout) */}
        </Providers>
        </body>
        </html>
    );
}
