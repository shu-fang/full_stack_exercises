const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ part1, part2, part3, exercise1, exercise2, exercise3 }) => {
  return (
    <div>
      <p>
        {part1} {exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>
    </div>
  );
};
const Total = (props) => {
  const exercises = props.exercises;
  // const sum = exercises.exercise1 + exercises.exercise2 + exercises.exercise3;
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
