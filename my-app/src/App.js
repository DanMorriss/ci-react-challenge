import css from './App.module.css';
import NavBarForm from './components/NavBarForm'
import SideBar from './components/Sidebar'

import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SideBar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;