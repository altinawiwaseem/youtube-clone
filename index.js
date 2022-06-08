
const body = document.querySelector("body");
const anchors = document.querySelectorAll("a")
const lists = document.querySelectorAll("ul li")
const spans = document.querySelectorAll("span")
const d = document.querySelectorAll("div")



let theme = () => {
  const checkbox = document.querySelector("#dark-mood").checked;
  if(checkbox){
      body.classList.add("dark")
      anchors.forEach((anchor) =>{
        anchor.classList.add("dark")
      })
      lists.forEach((list) =>{
        list.classList.add("dark")
      })
      spans.forEach((span) =>{
        span.classList.add("dark")
      })
      d.forEach((div) =>{
        div.classList.add("dark")
      })
      
      
      body.classList.remove("light")
      anchors.forEach((anchor) =>{
        anchor.classList.remove("light")
      })
      lists.forEach((list) =>{
        list.classList.remove("light")
      })
      spans.forEach((span) =>{
        span.classList.remove("light")
      })
      d.forEach((div) =>{
        div.classList.remove("light")
      })
  }else{
    body.classList.add("light")
    anchors.forEach((anchor) =>{
      anchor.classList.add("light")
    })
    lists.forEach((list) =>{
      list.classList.add("light")
    })
    spans.forEach((span) =>{
      span.classList.add("light")
    })
    body.classList.remove("dark")
    anchors.forEach((anchor) =>{
      anchor.classList.remove("dark")
    })
    lists.forEach((list) =>{
      list.classList.remove("dark")
    })
    spans.forEach((span) =>{
      span.classList.remove("dark")
    })
  }
};
