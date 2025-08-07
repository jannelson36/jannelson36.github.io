import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem('theme'); const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches; if (saved === 'dark' || (!saved && prefers)) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } } catch (_) {} })();`
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
