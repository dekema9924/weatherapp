

const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=30132&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '648f851e60msha4fb2d06e576b16p172595jsndf296a87739c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



async function getData(result){
    try {
        const response = await fetch(url, options);
         const result = await response.text();
        console.log(url);
    } catch (error) {
        console.error(error);
    
    
    }

}
