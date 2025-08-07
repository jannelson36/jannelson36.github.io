import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain="jannelson36.github.io"
        src="https://plausible.io/js/script.js"
      />
      <noscript>
        <img src="https://plausible.io/api/event" alt="" />
      </noscript>
    </>
  );
}