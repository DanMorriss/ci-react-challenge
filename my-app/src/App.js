import css from './App.module.css';
import NavBarForm from './components/NavBarForm'
import SideBar from './components/Sidebar'
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SideBar />
      <ContentHooks />
    </div>
  );
}

export default App;