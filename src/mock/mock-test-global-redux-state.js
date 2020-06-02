const mockData = {
  myQuizArray: [
    {
      quizName: "Mock-React-Quiz",

      yourGrades: [{ percentage: 67.76, dateTaken: "5/5/2020" }],
      questions: [
        {
          question: "What is react?",
          answer:
            "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        },
        {
          question: "What is JSX?",
          answer:
            "JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. ... Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.",
        },
        {
          question: "What are props?",
          answer:
            "Props are used sort of like state but they never change they are only passed and inherited by a child component. Also a parent component state can be passed as props",
        },
        {
          question: "What are states?",
          answer:
            "In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called 'this.state'. ",
        },
        {
          question: "Diffrence between states and props?",
          answer:
            "Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change. States can only be used in Class Components while Props don't have this limitation",
        
        },
        {
          question: "What are props?",
          answer:
            "Props are used sort of like state but they never change they are only passed and inherited by a child component. Also a parent component state can be passed as props",
        },
        {
          question: "When dont you need a class component?",
          answer: "When a component does not require state and ",
        },
        {
          question: "What is the Virtual DOM & what does it do?",
          answer: "When a component does not require state and ",
        },
      ],
      sources: ["https://www.geeksforgeeks.org/mern-stack/"],
      id: "0wzxoe-",
    },
  ],
};

export default mockData;
