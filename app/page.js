"use client";
import styles from "./page.module.css";
import medals from "./results.json";

export default function Home() {
  const medalsTable = medals.data.slice(0,81).map((country) =>{
    console.log(country)
    return(
      <tr className={styles.medalsRow} key={country.index}>
        <td className={styles.medalsDatum}>{country.index}</td>
        <td className={styles.medalsDatum}>{country.GOLD}</td>
        <td className={styles.medalsDatum}>{country.SILVER}</td>
        <td className={styles.medalsDatum}>{country.BRONZE}</td>
        <td className={styles.medalsDatum}>{country.TOTAL}</td>
      </tr>
    )
  });
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Paris 2024 Olympics Predictions</h1>
        <p>The summer Olympics are almost here. This year they are being hosted in the iconic city of Paris, France.
        Sporting events are a great excuse to practice data analytics, so I figured I would try my best to predict
        which countries would go home with the most hardware.</p>

        <p>The Kaggle <a href="https://www.kaggle.com/datasets/piterfm/olympic-games-medals-19862018?select=olympic_medals.csv">dataset</a> I was using had data going back to the first modern Olympics in 1896, but I decided to 
        only use data starting with the 2000 Summer Olympics in Sydney. This cutoff point removed many of the events
        and countries that no longer exist. Winter Olympics will not be helpful in determining this year&apos;s results, 
        so that leaves six years (2000, 2004, 2008, 2012, 2016, 2020) of data left. This still leaves over 5,000 data points!</p>

        <p>I tallied the amount of gold, silver, and bronze medals each country has earned in these summer games as well as
        the total number of medals that have been handed out. Then I used the percentage of gold medals a country has received
        to find the percentage of gold medals they will receive this year. For example to predict how many gold medals Canada
        will win calculate ( (Canada gold medals) / Total gold medals) * 329. The 329 comes from how many events will be
         in the Paris Olympics. Doing this for each country for each type of medal gives us these results:</p>
        <table className={styles.medalsTable}>
          <thead className={styles.medalsHead}>
            <tr>
              <th className={styles.medalsHead} > COUNTRY</th>
              <th className={styles.medalsHead} > {'\u{1F947}'}</th>
              <th className={styles.medalsHead} > {'\u{1F948}'}</th>
              <th className={styles.medalsHead} > {'\u{1F949}'}</th>
              <th className={styles.medalsHead} > TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {medalsTable}
          </tbody>
        </table>
      </div>
    </main>
  );
}
