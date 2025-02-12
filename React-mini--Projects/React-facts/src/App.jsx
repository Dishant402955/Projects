function App() {
  return (
    <section className="bg-gray-800 h-[100vh]">
      <nav className="nav">
        <img src="./assets/react.svg" className="w-[60px] my-3 mx-1" alt="" />
        <h1 className="text-[#61dafb] text-3xl my-3 mx-1">React facts</h1>
      </nav>
      <main className="content">
        <ul>
          <li>Was First Released in 2013</li>
          <li>Was Originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is Maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </section>
  );
}

export default App;
