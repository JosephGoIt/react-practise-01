const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}