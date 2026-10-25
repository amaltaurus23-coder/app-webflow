export const metadata = {
  title: 'Custom Operations Assistant',
  description: 'Secure Operations Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0f172a' }}>
        {children}
      </body>
    </html>
  );
}
