import css from './App.module.css';
import NavBarForm from './components/NavBarForm'
import SideBar from './components/Sidebar'
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SideBar />
      <ContentAPI />
    </div>
  );
}

export default App;