import BasicRotation from "./components/BasicRotation";
import "./App.css";
import ReflactionComponent from "./components/Reflaction";
import MovingSpace from "./components/MovingSpace";
import Parallax from "./components/Parallax";
import { CoatAnimation } from "./components/CoatAnimation";
import { useState } from "react";
type AnimationType = {
  name: string;
  component: () => JSX.Element;
  message?: string;
}[];
function App() {
  const [selectedIndex, setSelectedindex] = useState(0);
  const arr: AnimationType = [
    {
      name: "Basic Rotation",
      component: BasicRotation,
    },
    {
      name: "Event based Animation",
      component: ReflactionComponent,
    },
    {
      name: "Parallax",
      component: Parallax,
    },
    {
      name: "Moving through space",
      component: MovingSpace,
    },
    {
      name: "3D Model animation",
      component: CoatAnimation,
    },
  ];
  const SelectedComponent = arr[selectedIndex].component;
  return (
    <div className="app">
      <div className="animatiomSelection">
        <ul>
          {arr.map((item, index) => {
            return (
              <li key={item.name} onClick={() => setSelectedindex(index)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      {<SelectedComponent />}
    </div>
  );
}

export default App;
