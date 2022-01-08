let getData = async (city) => {
    let allData = await fetch("https://static.pipezero.com/covid/data.json")
    let data = await allData.json()

    renderData(data, city)
    console.log(data);
}

let renderData = (data, city) => {
    var arr = [].concat(data.locations)
    let s = arr.filter((searchInput) => {
        if (searchInput.name === city) {
            console.log(searchInput)
            let name = searchInput.name
            let cases = searchInput.cases
            let death = searchInput.death
            let recovered = searchInput.recovered
            let treatment = searchInput.treating

            let domCovid = document.querySelector('.list')

            let html = `
            <div class="info_place">
                <h5>Stats Overview</h5>
                <h3><img src="https://img.icons8.com/color/48/000000/country.png"/> ${name}</h3>
            </div>
            <div class="info_death">
                <h5>Total Death</h5>
                <h3><img src="https://img.icons8.com/external-flat-juicy-fish/50/000000/external-death-crisis-management-flat-flat-juicy-fish.png"/> ${numb(death)}</h3>
            </div>
            <div class="info_treatment">
                <h5>In Treatment</h5>
                <h3><img src="https://img.icons8.com/officel/50/000000/treatment-plan.png"/>${numb(treatment)}</h3>
            </div>
            <div class="info_cases">
                <h5>Cases</h5>
                <h3><img src="https://img.icons8.com/cute-clipart/50/000000/coronavirus.png"/>${numb(cases)}</h3>
            </div>
            <div class="info_recovered">
                <h5>Recovered</h5>
                <h3><img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/50/000000/external-strong-healthy-wanicon-lineal-color-wanicon.png"/>${numb(recovered)}</h3>
            </div>`

            domCovid.innerHTML = html
        } 
        
    });
    ;

    if(city == '') {
        document.querySelector('.rcm').innerHTML ='<p>Bạn chưa điền nơi cần tìm</p>'
    }

    if (city === 'Internal' ) {
        let internalCases = data.total.internal.cases
        let internalDeath = data.total.internal.death
        let internalRecovered = data.total.internal.recovered
        let internalTreatment = data.total.internal.treating

        let domCovid = document.querySelector('.list')

        let html = `
            <div class="info_place">
                <h5>Stats Overview</h5>
                <h3><img src="https://img.icons8.com/emoji/60/000000/vietnam-emoji.png"/> Internal</h3>
            </div>
            <div class="info_death">
                <h5>Total Death</h5>
                <h3><img src="https://img.icons8.com/external-flat-juicy-fish/50/000000/external-death-crisis-management-flat-flat-juicy-fish.png"/> ${numb(internalDeath)}</h3>
            </div>
            <div class="info_treatment">
                <h5>In Treatment</h5>
                <h3><img src="https://img.icons8.com/officel/50/000000/treatment-plan.png"/>${numb(internalTreatment)}</h3>
            </div>
            <div class="info_cases">
                <h5>Cases</h5>
                <h3><img src="https://img.icons8.com/cute-clipart/50/000000/coronavirus.png"/>${numb(internalCases)}</h3>
            </div>
            <div class="info_recovered">
                <h5>Recovered</h5>
                <h3><img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/50/000000/external-strong-healthy-wanicon-lineal-color-wanicon.png"/>${numb(internalRecovered)}</h3>
            </div>
        `

        domCovid.innerHTML = html
        noRcm()


    } else if (city === 'World') {
        let worldCases = data.total.world.cases
        let worldDeath = data.total.world.death
        let worldRecovered = data.total.world.recovered
        let worldTreatment = data.total.world.treating
        let domCovid = document.querySelector('.list')

        let html = `
            <div class="info_place">
                <h5>Stats Overview</h5>
                <h3><img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-earth-space-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/> World</h3>
            </div>
            <div class="info_death">
                <h5>Total Death</h5>
                <h3><img src="https://img.icons8.com/external-flat-juicy-fish/50/000000/external-death-crisis-management-flat-flat-juicy-fish.png"/> ${numb(worldDeath)}</h3>
            </div>
            <div class="info_treatment">
                <h5>In Treatment</h5>
                <h3><img src="https://img.icons8.com/officel/50/000000/treatment-plan.png"/>${numb(worldTreatment)}</h3>
            </div>
            <div class="info_cases">
                <h5>Cases</h5>
                <h3><img src="https://img.icons8.com/cute-clipart/50/000000/coronavirus.png"/>${numb(worldCases)}</h3>
            </div>
            <div class="info_recovered">
                <h5>Recovered</h5>
                <h3><img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/50/000000/external-strong-healthy-wanicon-lineal-color-wanicon.png"/>${numb(worldRecovered)}</h3>
            `

        domCovid.innerHTML = html
        noRcm()

    }

}


let Search = document.getElementById("form")
Search.onsubmit = (e) => {
    e.preventDefault();

    let city = Search.city.value;
    getData(city)
}

rcm = () => {
    let html = `
    <p>Viết hoa chữ cái đầu và có dấu </p>
    `

    document.querySelector('.rcm').innerHTML = html
}
noRcm = ()=>{
    document.querySelector('.rcm').innerHTML = ''
}

let numb = (number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}