import css from './App.module.css';
import NavBarForm from './components/NavBarForm'
import SideBar from './components/Sidebar'
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;