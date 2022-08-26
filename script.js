const sub = document.getElementById('sub')
const search = document.getElementById("search")
const cont = document.getElementById("container")
sub.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
    .then(res=>res.json()).then(data=>{
        const food = data["meals"]
        // console.log(food);
        // console.log(data)
        food.map((meal)=>{
            const div = document.createElement('div')
            div.innerHTML=`<strong>${meal.strMeal}</strong>:${meal.strInstructions}`
            cont.append(div)
        })
    })
})