import {
  Header,
  Snippet,
  Clipboard,
  Workflow,
  Clients,
  Footer,
} from "./components";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Snippet />
        <Clipboard />
        <Workflow />
        <Clients />
        <Footer />
      </main>
    </div>
  );
}

export default App;
