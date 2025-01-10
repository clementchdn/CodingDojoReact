import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { LanguageContext } from "../LanguageProvider";

type TAvailableThemes = "green" | "brown";

type TThemeContext = {
  theme: TAvailableThemes;
  setTheme: Dispatch<SetStateAction<TAvailableThemes>>;
};

const ThemeContext = createContext<TThemeContext>({
  theme: "green",
  setTheme: () => "green",
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<TAvailableThemes>("green");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function ThemedSlideSolution() {
  const { getText } = useContext(LanguageContext);

  return (
    <ThemeProvider>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "min-content 1fr",
          gridTemplateColumns: "50% 50%",
        }}
      >
        <p>
          {getText("Challenge5Description1")}
          <i>useContext</i>
          {getText("Challenge5Description2")}
        </p>
        <LeftColumnText />
        <RightColumnText />
      </div>
    </ThemeProvider>
  );
}

function LeftColumnText() {
  return (
    <p className="colored-text">
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
    </p>
  );
}

function RightColumnText() {
  return (
    <p className="colored-text">
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
    </p>
  );
}
