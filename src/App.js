import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

import "./App.css";

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Skills />
        <Projects />
        <About />
        <Contact />
      </DefaultLayout>
    </>
  );
};

export default App;
