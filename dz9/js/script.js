let birhYear = prompt('Ваш год рождения?');
let city;
let sport;
const currentYear = 2021;
const cancInput = 'Жаль, но вы не ввели свой';

if (birhYear === null || birhYear.trim() === '' || isNaN( birhYear)) {
    birhYear = cancInput + ' год рождения';
    alert(birhYear);
} else if (birhYear > 2021 || birhYear < 1900) {
    alert('Думаю вы ошиблись в дате, попробуйте еще раз');
} else {
    birhYear = currentYear - birhYear;

    city = prompt('В каком городе вы живете?');
        if (city === null || city.trim() === ''){
            city = cancInput + ' город';
            alert(city);
        } else if (city === 'Киев'){
            city = 'Живете в столице Украины';
        } else if (city === 'Минск'){
            city = 'Живете в столице Белоруссии';
        } else if (city === 'Москва'){
            city = 'Живете в столице России';
        } else {
            city = `Живете в городе ${city}`;
        }

    sport = prompt('Какой спорт вы любите?');
        if (sport === null || sport.trim() === ''){
            sport = cancInput + ' любимый спорт';
            alert(sport);
        } else if (sport === 'волейбол'){
            sport = 'Круто! Хочешь стать как Андреа Гардини';
        } else if (sport === 'баскетбол'){
            sport = 'Круто! Хочешь стать как Майкл Джордан';
        } else if (sport === 'футбол'){
            sport = 'Круто! Хочешь стать как Зинедин Зидан';
        } else {
            sport = `Ваш любимый спорт ${sport}`;
        }
        
    alert(` Вам ${birhYear} \n ${city} \n ${sport}`);
}
