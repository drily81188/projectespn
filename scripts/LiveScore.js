let dataCricketmatch =
[
    {
        firstTeam:"PZ",
        secondTEams:"LQ",
        over:"103/2",batting:"ZALMI",
        status:"Live",
        NumberOfMatch:"30th Match",
        match:"T20",
        wickets:"2",
   
    },
    {
        
        firstTeam:"CANNADA",
        secondTEams:"NEPAL",
        over:"129/8",batting:"NEPAL",
        status:"Live",
        NumberOfMatch:"11th Match",
        match:"T20",
        wickets:"8",

    },
    {
        
        firstTeam:"GERMANY",
        secondTEams:"IRELAND",
        over:"200/7",batting:"IRELAND",
        status:"Live",
        NumberOfMatch:"9th Match",
        match:"T20",
        wickets:"7",
       
    },
    {
        firstTeam:"BAHRAIN",
        secondTEams:"UNITES ARAB EMIRATES",
        over:"143/2",batting:"BAHRAIN",
        status:"Live",
        NumberOfMatch:"10th Match",
        match:"T20",
        wickets:"2",

    },
   
]

let LiveScore = document.getElementById("Livescore")
dataCricketmatch.map(function(el){
    let div = document.createElement("div")
    div.setAttribute("class","DivLive")
    div.style.padding = "20px"

    let first = document.createElement("div")
    first.setAttribute("id","FirstDiv")
    // first.style.border = "1px solid black"

    let TopDiv = document.createElement("div")
    TopDiv.style.display = "flex"
    TopDiv.style.gap = "20px"
    
    let Details = document.createElement("p")
    Details.textContent = "LiveMatch"
    Details.style.color = "Red"
    Details.style.marginLeft = "20px"

    let Match = document.createElement("p")
    Match.textContent = el.match

    TopDiv.append(Details,Match)

    

    
    let firstTeam = document.createElement("p")
    firstTeam.textContent = el.firstTeam

    let Over = document.createElement("p")
    Over.textContent = el.over

    let SecondT = document.createElement("div")
    SecondT.setAttribute("id","SecondT")

    let Secondteam = document.createElement("p")
    Secondteam.textContent = el.secondTEams
     let score = document.createElement("p")
     score.textContent = "140/4"

    // let Bating = document.createElement("p")
    // Bating.textContent =  " batting ","el.batting "

    SecondT.append(Secondteam,score)

    let BtnDiv = document.createElement("div")
    
    BtnDiv.setAttribute("id","BtnDiv")
    
    let btn = document.createElement("button")
    btn.textContent = "points"
    btn.style.border = "none"
    btn.style.padding = "10px"

    let MiddleBtn = document.createElement("button")
    MiddleBtn.textContent = "Report"
    MiddleBtn.style.border = "none"

    let Lastbtn = document.createElement("button")
    Lastbtn.textContent = "SeriesHome"
    Lastbtn.style.border = "none"

    BtnDiv.append(btn,MiddleBtn,Lastbtn)



    first.append(firstTeam,Over)

    div.append(TopDiv,first,SecondT,BtnDiv)

    LiveScore.append(div)
    
})
