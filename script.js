
function convertUnit(){
    let temperature=document.querySelector('.temperature').value;
    let currentUnit=document.querySelector('.currentUnit').value;

    if( currentUnit === 'c') {
        document.querySelector('.result1').innerHTML = `${Math.round(((temperature * 9 / 5) + 32) *100) / 100} &deg;F`;
        document.querySelector('.result2').innerHTML = `${Number(temperature) + 273.15} K`;
        return
    }

    if( currentUnit === 'f') {
        document.querySelector('.result1').innerHTML = `${Math.round(((temperature - 32) * 5 / 9 ) *100) / 100} &deg;C`
        document.querySelector('.result2').innerHTML = `${Math.round((((temperature - 32) * 5 / 9) *100) / 100) + 273.15} K`
        return
    }

    if( currentUnit === 'k') {
        document.querySelector('.result1').innerHTML = `${(Math.round((Number(temperature) - 273.15) * 100)) / 100} &deg;C`;
        document.querySelector('.result2').innerHTML = `${(Math.round(((Number(temperature) - 273.15) * 9 / 5) + 32) * 100) / 100} &deg;F`
        return
    }

    
}