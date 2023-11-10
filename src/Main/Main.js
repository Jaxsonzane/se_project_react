import { defaultClothingItems } from "../util/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import './Main.css';

function Main({weatherTemp}) {
    return <main className="main">
        <WeatherCard day={false} type="rain" weatherTemp={weatherTemp} />
        <section className="card__section">
            Today is {weatherTemp}°F/ You may want to wear:
            <div className="card__items">
                {defaultClothingItems.map((x) => {
                    console.log(x);
                    return (
                        <ItemCard x={x} />
                    );
                })}
            </div>
        </section>
    </main>;
}

export default Main