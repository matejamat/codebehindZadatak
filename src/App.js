import logo from './logo.svg';
import './App.css';
import groups from './groups.json'

function App() {
  return (
    <div className="App">
       <h1><b>Grupna faza - I kolo:</b></h1> 
        <br/>
        <b>Grupa A:</b>
        <br/>
        {JSON.stringify(groups.A[0].Team)} -  {JSON.stringify(groups.A[2].Team)} (85:79)
        <br/>
        {JSON.stringify(groups.A[1].Team)} -  {JSON.stringify(groups.A[3].Team)} (92:80)
        <br/>
        <b>Grupa B:</b>
        <br/>
        {JSON.stringify(groups.B[0].Team)} -  {JSON.stringify(groups.B[3].Team)} (97:77)
        <br/>
        {JSON.stringify(groups.B[1].Team)} -  {JSON.stringify(groups.B[2].Team)} (78:66)
        <br/>
        <b>Grupa C:</b>
        <br/>
        {JSON.stringify(groups.C[0].Team)} -  {JSON.stringify(groups.C[3].Team)} (95:71)
        <br/>
        {JSON.stringify(groups.C[1].Team)} -  {JSON.stringify(groups.C[2].Team)} (80:70)
        <br/>
        <h1><b>Ovo je frontend deo, a ko je sastavljao zadatak neka ima dusu malo xD</b></h1> 
    </div>
  );
}

export default App;
