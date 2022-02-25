PlayerIndia =
[
    {
        playerName:"Agarwal,MA",
        Name:"Mayank Agarwal",
        Age:"31y 6d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/302300/302377.jpg"

    },
    {
        playerName:"Avesh Khan",
        Name:"Avesh Khan",
        Age:"25y 71d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/200000/200065.1.jpg"
       

    },
    {
        playerName:"Bhatia T",
        Name:"Taniya Bhatia",
        Age:"24y 86d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/304300/304398.png"


    },
    {
        playerName:"Bisht,E",
        Name:"Ekta Bisht",
        Age:"36y 14d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/304400/304463.png"


    },
    {
        playerName:"Chahal,YS",
        Name:"Yuzeendra chahal",
        Age:"31y 214d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/312100/312155.png"

    },
    {
        playerName:"Chahar,RD",
        Name:"Rahul Chahar",
        Age:"22y 202d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/329300/329346.4.jpg"
    },
    {
        playerName:"Gayakwad,RS",
        Name:"rajeshwari Gayakwad",
        Age:"30y 266d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/304400/304473.png",
    },
    {
        playerName:"Kholi,V",
        Name:"Virat Kohli",
        Age:"36y 109d",
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/289000/289002.1.jpg",
    }



]
let MainDiv = document.getElementById("PlayerName")
PlayerIndia.map(function(el){

    let chotaDiv  = document.createElement("div")
    chotaDiv.setAttribute("class","chotaDiv")


    let div = document.createElement("div")
    div.setAttribute("id","div")

    let playerName = document.createElement("p")
    playerName.textContent = el.playerName


    let name = document.createElement("p")
    name.textContent = el.Name


    let Age = document.createElement("p")
    Age.textContent = el.Age

    let img = document.createElement("img")
    img.setAttribute("class","playersImg")
    img.src = el.image

    let details = document.createElement("div")
    
    details.append(playerName,name,Age)
    
     div.append(img,details)
    chotaDiv.append(div)

    MainDiv.append(chotaDiv)

   
    
    


   
})