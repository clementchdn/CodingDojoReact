import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { LanguageContext } from "../LanguageProvider";

type TAvailableThemes = "light" | "dark";

type TThemeContext = {
  theme: TAvailableThemes;
  setTheme: Dispatch<SetStateAction<TAvailableThemes>>;
};

const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  setTheme: () => "dark",
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<TAvailableThemes>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function ThemedSlideSolution() {
  const { getText } = useContext(LanguageContext);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "min-content 1fr",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <span>
        {getText("Challenge5Description1")}
        <i>useContext</i>
        {getText("Challenge5Description2")}
      </span>
      <ThemeProvider>
        <SlideContent />
      </ThemeProvider>
    </div>
  );
}

function SlideContent() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { getText } = useContext(LanguageContext);
  return (
    <div
      className={`theme-${theme}`}
      style={{
        display: "grid",
        gridTemplateRows: "min-content 1fr",
        gridTemplateColumns: "49% 49%",
        columnGap: "2%",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <button
        style={{ gridColumn: "1 / 3", backgroundColor: "inherit" }}
        onClick={() => setTheme((prev) => (prev == "light" ? "dark" : "light"))}
      >
        {getText("Challenge5Button")}
      </button>
      <LeftColumnText />
      <RightColumnText />
    </div>
  );
}

function LeftColumnText() {
  const { getText } = useContext(LanguageContext);

  return (
    <span
      style={{
        overflow: "auto",
        height: "98%",
        textAlign: "left",
        direction: "rtl",
        margin: "0.5rem",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      pulvinar est sit amet quam tristique, in fermentum arcu luctus. Phasellus
      faucibus ex a accumsan maximus. Fusce aliquet turpis id ligula luctus
      gravida. Proin tincidunt est turpis, sit amet consequat justo efficitur
      nec. Praesent in metus porttitor, laoreet ante at, molestie lorem. In erat
      urna, consequat ut ante eu, placerat interdum arcu. Mauris tincidunt
      tempor ligula, gravida laoreet dolor bibendum sit amet. Nulla gravida
      faucibus eros nec accumsan. Aliquam ac placerat felis. Vivamus vulputate
      fermentum porta. Pellentesque sollicitudin, dolor gravida suscipit
      iaculis, risus diam tincidunt justo, in dignissim nisl neque vel purus.
      Maecenas ipsum sapien, tempus suscipit massa sit amet, dictum consequat
      mauris. Nam vehicula augue scelerisque libero lobortis, et semper tortor
      ultricies. Morbi sed diam sed arcu lobortis efficitur eget venenatis ante.
      Aenean at turpis quis augue vestibulum ultricies id tristique urna. Proin
      consequat quam accumsan ligula sodales sodales. Suspendisse dictum libero
      sem, at gravida nisl venenatis nec. Phasellus luctus neque sit amet nisl
      tempus, vitae varius quam vehicula. Quisque nulla ante, egestas in urna
      iaculis, bibendum gravida odio. Nunc ipsum augue, elementum id lobortis
      egestas, dignissim a magna.
    </span>
  );
}

function RightColumnText() {
  return (
    <span
      style={{
        overflow: "auto",
        height: "98%",
        textAlign: "right",
        margin: "0.5rem",
      }}
    >
      Curabitur pretium malesuada pulvinar. Pellentesque finibus tempor nibh at
      feugiat. Duis ultrices ornare est id porttitor. Cras luctus dui et felis
      interdum, et vestibulum turpis varius. Integer ut molestie ex, et rutrum
      ex. Mauris a nisl leo. Phasellus blandit dolor a faucibus luctus. Mauris
      massa orci, pellentesque nec ultricies non, porta vel risus. Proin id mi
      in libero pulvinar fermentum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nec accumsan magna. Morbi sit amet felis felis. Morbi
      eu faucibus ligula. Pellentesque consequat cursus pellentesque. In a felis
      suscipit, dignissim ipsum non, eleifend lacus. Ut quis mauris odio. Mauris
      tempor leo at lectus blandit, id rutrum lorem dictum. In porta vestibulum
      elit dignissim facilisis. Morbi varius, orci id fringilla euismod, est
      metus sodales magna, accumsan faucibus risus purus eu orci. Donec rutrum
      velit neque, nec congue leo ultrices eget. Mauris scelerisque molestie
      venenatis. Curabitur tincidunt, est vel eleifend accumsan, diam nunc
      auctor elit, id tempus ante purus at odio. Maecenas eget ex sed sapien
      venenatis molestie ac eu dolor.{" "}
    </span>
  );
}
