import './App.css';
import Trainings from "./trainings/trainings";
import TrainingsModel from "./trainings/db/trainings-model";

function App() {

  const sampleData = [
    new TrainingsModel({dateString: '12.12.13', distance: '5'}),
    new TrainingsModel({dateString: '12.02.23', distance: '10'}),
    new TrainingsModel({dateString: '20.01.22', distance: '15'}),
  ];

  return (
      <Trainings records={sampleData}/>
  )
}

export default App;
