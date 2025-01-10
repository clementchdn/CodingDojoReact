import { useContext, useState } from "react";
import { LanguageContext } from "../LanguageProvider";

async function fetchHolidays(year: number): Promise<Record<string, string>> {
  return (
    await fetch(
      `https://calendrier.api.gouv.fr/jours-feries/metropole/${year}.json`,
    )
  ).json();
}

export default function HolidaysList() {
  const startYear = 2018;
  // API does not provide data for years > 2028
  const lastSupportedYear = 2028;
  const [holidays, setHolidays] = useState<Record<string, string>>({});
  const { getText } = useContext(LanguageContext);

  fetchHolidays(startYear).then((result) => setHolidays(result));

  const [selectedYear, setSelectedYear] = useState<number>(startYear);

  const options = Array.from(
    { length: lastSupportedYear - startYear + 1 },
    (_, index) => index + startYear,
  ).map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        textAlign: "left",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      <span>
        {getText("Challenge3Description1")} <i>useEffect</i>
        {getText("Challenge3Description2")}
        <div
          style={{
            display: "inline-flex",
            position: "relative",
          }}
        >
          <div className="select-wrapper">
            <select
              name="year"
              id="year-select"
              onChange={(v) => setSelectedYear(parseInt(v.target.value, 10))}
            >
              {options}
            </select>
          </div>
        </div>
      </span>

      <ul
        style={{ position: "relative", marginTop: "1rem", overflowY: "auto" }}
      >
        {Object.entries(holidays).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
