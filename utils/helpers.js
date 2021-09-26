export default async function getRecipes(query) {
  console.log(query)
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=cc8a048e&app_key=0dc862df5ecaa2cf7bc8fda5efdc5ea0&dishType=Desserts&random=true&field=label&field=image`,
    )
    const json = await data.json()
    console.log(json)
  } catch (err) {
    console.error(err)
  }
}
