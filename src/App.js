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
        {JSON.stringify(groups.A[0].Team)} -  {JSON.stringify(groups.A[2].Team)} ({Math.floor(Math.random() * (95 - 85 + 1) ) + 85}:{Math.floor(Math.random() * (87 - 74 + 1) ) + 74})
        <br/>
        {JSON.stringify(groups.A[1].Team)} -  {JSON.stringify(groups.A[3].Team)} ({Math.floor(Math.random() * (92 - 80 + 1) ) + 80}:{Math.floor(Math.random() * (85 - 70 + 1) ) + 70})
        <br/>
        <b>Grupa B:</b>
        <br/>
        {JSON.stringify(groups.B[0].Team)} -  {JSON.stringify(groups.B[3].Team)} ({Math.floor(Math.random() * (98 - 85 + 1) ) + 85}:{Math.floor(Math.random() * (99 - 69 + 1) ) + 69})
        <br/>
        {JSON.stringify(groups.B[1].Team)} -  {JSON.stringify(groups.B[2].Team)} ({Math.floor(Math.random() * (84 - 60 + 1) ) + 60}:{Math.floor(Math.random() * (87 - 50 + 1) ) + 50})
        <br/>
        <b>Grupa C:</b>
        <br/>
        {JSON.stringify(groups.C[0].Team)} -  {JSON.stringify(groups.C[3].Team)} ({Math.floor(Math.random() * (98 - 85 + 1) ) + 85}:{Math.floor(Math.random() * (99 - 69 + 1) ) + 69})
        <br/>
        {JSON.stringify(groups.C[1].Team)} -  {JSON.stringify(groups.C[2].Team)} ({Math.floor(Math.random() * (92 - 80 + 1) ) + 80}:{Math.floor(Math.random() * (85 - 70 + 1) ) + 70})
        <br/>
        <h1><b>Ovo je frontend deo, a ko je sastavljao zadatak neka ima dusu malo xD</b></h1> 
    </div>
  );
}

export default App;
