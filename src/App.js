import { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  return (
    <div>
      <section id="goals">
        <CourseGoalList items={courseGoals} />
      </section>
    </div>
  );
};

export default App;
