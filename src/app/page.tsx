import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home - MAD NEXTJS',
  description: 'App for Learning NextJS',
  authors: [{name: 'Ahmad M', url: "http://localhost:300"}],
  icons: {
    icon: './icon.png'
  },
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  openGraph: {
    title: 'Home - MAD NEXTJS'
  }
};

export default function Home() {  
  // throw new Error("something")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is Home Page
    </main>
  );
}
