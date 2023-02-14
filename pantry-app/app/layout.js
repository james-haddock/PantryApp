import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <ul>
              <li>Lists</li>
              <li>Other</li>
          </ul>
        </nav>
        <heading className="font-['QUEENS'] text-5xl">Pantry</heading>
        {children}
      </body>
    </html>
  )
}
