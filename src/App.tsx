import BasicRotation from "./components/BasicRotation";
import "./App.css";
import ReflactionComponent from "./components/Reflaction";
function App() {
  const arr = [
    {
      name: "basic",
      Compo: BasicRotation,
    },
    {
      name: "relaction",
      Compo: ReflactionComponent,
    },
  ];
  return (
    <div className="app">
      <div></div>
      {/* <BasicRotation /> */}
      <ReflactionComponent />
    </div>
  );
}

export default App;
