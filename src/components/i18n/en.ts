import { TDict } from "./translations";

export const english: TDict = {
  AppDescription:
    'This coding dojo, presented as a slideshow, is designed to provide a foundational understanding of React. Use the arrow keys on your keyboard to navigate through the slides. Some slides are labeled as "Challenge," displaying the expected outcome of a task. To practice a challenge, move to the slide directly below (down arrow) and open the file at the specified path. Update the component\'s code until it matches the example shown on the challenge slide. A sample solution is provided on the slide following the challenge.',
  IntroductionComponentHeader: "I am a React component",
  IntroductionComponentSubtitle: "I'm a variable",
  Challenge1Description:
    "This is an exemple of React component. Create a new child component which takes a string and displays it in a header tag.",
  Challenge2Description:
    "This simple component displays a counter that is incremented everytime you click",
  Challenge3Description1: "In this challenge, you must leverage the ",
  Challenge3Description2: " hook to display the fetched data in a list.",
  Challenge4Description1: "Use the ",
  Challenge4Description2:
    " hook to display the number of seconds spent on this slide. The counter must reset to 0 when leaving the slide. Test it by going to the previous slide and back here.",
  Challenge4Description3: "Watching this slide since: ",
  Challenge5Description1: "Use the ",
  Challenge5Description2:
    " hook to allow users to switch between two themes, updating the colors of this slide",
  Challenge5Button: "toggle dark theme",
};

export default english;
