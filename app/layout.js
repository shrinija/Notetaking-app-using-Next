import "/styles/globals.css"; // we don't need to mention the entire path


export const metadata = {
  title: "Keeper app",
  description: "notes taking app",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {children}
          </main>
      </body>
    </html>
  );
};

export default Layout;
