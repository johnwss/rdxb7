import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";



function App() {

const dispatch = useDispatch();
const user = useAppSelector(state => state.user);
const theme = useAppSelector(state => state.theme);

const changeName = (newName:string) => dispatch(setName(newName)); 
const changeAge = (newAge:number) => dispatch(setAge(newAge));
const changeTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
changeName(e.target.value);
}

const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
changeAge(parseInt(e.target.value));
}

const handleSwitchTheme = () => {
  changeTheme(theme.status === 'light' ? 'night' : 'light');
}


  return (
    <div>
      Meu nome é ({user.name}) e tenho ({user.age}) anos. <br /> Tema: ({theme.status})
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} /> 
      <hr /> <hr />
      <input type="text" value={user.age} onChange={handleAgeInput} /> 
      <hr /> <hr />
      <button onClick={handleSwitchTheme}>Trocar tema</button>
    </div>
  );
}
export default App;
