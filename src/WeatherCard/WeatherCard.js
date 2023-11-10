import './Weather.css';

const weatherOptions = [
    {url: require('../images/day/sunnyday1.svg').default, day: true, type: 'sunny'},
    {url: require('../images/day/cloudyday.svg').default, day: true, type: 'cloudy'},
    {url: require('../images/day/fogday.svg').default, day: true, type: 'fog'},
    {url: require('../images/day/rainday.svg').default, day: true, type: 'rain'},
    {url: require('../images/day/snowday.svg').default, day: true, type: 'snow'},
    {url: require('../images/day/stormday.svg').default, day: true, type: 'storm'},
    {url: require('../images/night/night1.svg').default, day: false, type: 'sunny'},
    {url: require('../images/night/night2.svg').default, day: false, type: 'cloudy'},
    {url: require('../images/night/night3.svg').default, day: false, type: 'rain'},
    {url: require('../images/night/night4.svg').default, day: false, type: 'storm'},
    {url: require('../images/night/night5.svg').default, day: false, type: 'snow'},
    {url: require('../images/night/night6.svg').default, day: false, type: 'fog'},
];


const WeatherCard = ({day=true, type='sunny', weatherTemp = 0}) => {
    console.log('WeatherCard');
    const imageSrc = weatherOptions.filter((i) => {
        console.log(i);
        return i.day === day && i.type === type;
    });

    const imageSrcUrl = imageSrc[0].url || '';
    
    return (
        <section className='weather'>
					<div className='weather__info'>
					{weatherTemp}° F
					</div>
					<img src={imageSrcUrl} alt='weather' className='weather__image'/>
				</section>
    );
};

export default WeatherCard;