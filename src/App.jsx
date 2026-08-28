import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IDEShellProvider } from "./context/IDEShellContext";
import IDEShell from "./layout/IDEShell";
import CommandPalette from "./components/ide/CommandPalette";
import BootScreen from "./components/ide/BootScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <Router>
      <IDEShellProvider>
        <IDEShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </IDEShell>
        <CommandPalette />
        <BootScreen />
      </IDEShellProvider>
    </Router>
  );
}
