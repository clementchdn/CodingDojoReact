import { useEffect, useState } from "react";

export default function HolidaysList() {
  const [holidays, setHolidays] = useState<Record<string, string>>({});

  const startYear = 2018;
  // API does not provide data for years > 2028
  const lastSupportedYear = 2028;
  const [selectedYear, setSelectedYear] = useState<number>(startYear);

  async function fetchHolidays(): Promise<Record<string, string>> {
    return (
      await fetch(
        `https://calendrier.api.gouv.fr/jours-feries/metropole/${selectedYear}.json`,
      )
    ).json();
  }

  useEffect(() => {
    async function getAndSetHolidays() {
      const list = await fetchHolidays();
      setHolidays(list);
    }
    getAndSetHolidays();
  }, [selectedYear]);

  const options = Array.from(
    { length: lastSupportedYear - startYear + 1 },
    (_, index) => index + startYear,
  ).map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));

  return (
    <div>
      <p>
        In this challenge, you must leverage the <i>useEffect</i> hook to
        display the fetched data in a list.
      </p>

      <select
        name="year"
        id="year-select"
        onChange={(v) => setSelectedYear(parseInt(v.target.value, 10))}
      >
        {options}
      </select>
      <ul style={{ maxLines: 10, overflowY: "auto" }}>
        {Object.entries(holidays).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
