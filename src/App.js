import "./styles.css";
import Card from "./Card";
import Sdata from "./Sdata";
import Netflixheader from "./header";
export default function App() {
  return (
    <div className="App">
      <Netflixheader />
      <div className="cardsContainer">
        {Sdata.map((newdata, index) => {
          return (
            <Card
              key={index}
              imglink={newdata.imglink}
              category={newdata.category}
              cname={newdata.cname}
              redirectLink={newdata.redirectLink}
            />
          );
        })}
      </div>
    </div>
  );
}
