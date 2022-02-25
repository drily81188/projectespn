// import navbar from "../components/navbar.js"
// // console.log("navbar:",navbar)

//   let header_div = document.getElementById("headers");
//   header_div.innerHTML = navbar();

 
 
 function directNews(){

    window.location.href = "../html/news.html"
    

}









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
let div = document.getElementById("container")
dataCricketmatch.map(function(el){

   
    
    let small = document.createElement("div")
    small.setAttribute("id","smallDiv")
    small.textContent = "Live  "+"Result"+"  "+"ODI"

    let bigDiv = document.createElement("div")
    bigDiv.setAttribute("id","BigDiv")

    let LeftDiv = document.createElement("div")
    LeftDiv.setAttribute("class","LeftDiv")
    // LeftDiv.style.gap = "20px"

    let big = document.createElement("p")
    big.textContent = el.firstTeam
    LeftDiv.append(big)

    let RightDiv = document.createElement("div")
    RightDiv.setAttribute("class","RightDiv")

    let Over = document.createElement("p")
    Over.textContent = el.over
    RightDiv.append(Over)

    bigDiv.append(LeftDiv,RightDiv)

    let MiddleDiv = document.createElement("div")
    MiddleDiv.setAttribute("id","MiddleDiv")

    let MiddleLeftDiv = document.createElement("div")
    MiddleLeftDiv.setAttribute("class","MiddleLeftDiv")

    let SecondTeam = document.createElement("p")
    SecondTeam.textContent = el.secondTEams

    MiddleLeftDiv.append(SecondTeam)
    
    


   let MiddleRighttDiv = document.createElement("div")
   MiddleRighttDiv.setAttribute("id","MiddleRighttDiv")
  
   let scores = document.createElement("p")
   scores.textContent = "170/5"

   MiddleRighttDiv.append(scores)

   MiddleDiv.append(MiddleLeftDiv,MiddleRighttDiv)

//    let p = document.createElement("p")
//    p.textContent = el.firstTeam + " won" 

   let btnDiv = document.createElement("div")
   btnDiv.style.display = "flex"
   btnDiv.style.justifyContent = "center"
   btnDiv.style.gap = "15px"

   let Points = document.createElement("button")
   Points.setAttribute("class","btn")
   Points.style.background = "none"
   
   Points.textContent = "Points"
   

   let btn = document.createElement("button")
   btn.setAttribute("class","btn")
   btn.style.background = "none"
   
   btn.textContent = "Schedule"

   let returnBtn = document.createElement("button")
   returnBtn.setAttribute("class","btn")
   returnBtn.style.background = "none"
   returnBtn.textContent ="Return"

   

   btnDiv.append(btn,returnBtn,Points)


   




    

  small.append(bigDiv,MiddleDiv,btnDiv)



    div.append(small)

})