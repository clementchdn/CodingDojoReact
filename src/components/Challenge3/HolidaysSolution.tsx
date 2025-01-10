import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../LanguageProvider";

async function fetchHolidays(year: number): Promise<Record<string, string>> {
  return (
    await fetch(
      `https://calendrier.api.gouv.fr/jours-feries/metropole/${year}.json`,
    )
  ).json();
}

export default function HolidaysList() {
  const [holidays, setHolidays] = useState<Record<string, string>>({});

  const startYear = 2018;
  // API does not provide data for years > 2028
  const lastSupportedYear = 2028;
  const [selectedYear, setSelectedYear] = useState<number>(startYear);
  const { getText } = useContext(LanguageContext);

  useEffect(() => {
    async function getAndSetHolidays() {
      const list = await fetchHolidays(selectedYear);
      setHolidays(list);
    }
    getAndSetHolidays();
  }, [selectedYear]);

  const options = Array.from(
    { length: lastSupportedYear - startYear + 1 },
    (_, index) => index + startYear,
  ).map((year) => (
    <option value={year} key={year} selected={year == selectedYear}>
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
        <div style={{ display: "inline-flex", position: "relative" }}>
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
