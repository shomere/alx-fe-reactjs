import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        {/* Example Ingredients and Steps */}
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {recipe.ingredients
            ? recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
            : ["Example ingredient 1", "Example ingredient 2"]}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.instructions
            ? recipe.instructions.map((step, index) => <li key={index}>{step}</li>)
            : ["Step 1: Do this", "Step 2: Do that"]}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;

