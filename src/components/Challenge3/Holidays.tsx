import { useState } from "react";

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
      <div style={{ display: "inline-flex", position: "relative" }}>
        <span>
          In this challenge, you must leverage the <i>useEffect</i> hook to
          display the fetched data in a list.
        </span>
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

      <ul style={{ position: "relative", overflowY: "auto" }}>
        {Object.entries(holidays).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
