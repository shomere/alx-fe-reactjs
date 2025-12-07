import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10 text-xl">
        Recipe not found. <Link to="/" className="text-blue-500">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Recipe Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Ingredients */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-1">{step}</li>
          ))}
        </ol>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;

