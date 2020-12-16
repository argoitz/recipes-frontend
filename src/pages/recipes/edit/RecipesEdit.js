import { useParams } from "react-router-dom";
import { useEditRecipeHandler, useRecipe } from "../../../hooks/api";
import "./RecipesEdit.css";
import { usePages } from "../../../hooks/usePages";
import { useState, useEffect } from "react";

const RecipesEdit = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const { id } = useParams();
  const { goToRecipePage } = usePages();

  const recipe = useRecipe(id);

  const [title, setTitle] = useState();
  const [keywords, setKeywords] = useState();

  if (firstLoad && recipe) {
    setTitle(recipe.title);
    setKeywords(recipe.keywords);
    setFirstLoad(false);
  }

  const { loading, handler: modifyRecipeHandler } = useEditRecipeHandler(id);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const handleSave = () => {
    modifyRecipeHandler({
      title: title,
      keywords: keywords.split(","),
    }).then((response) => goToRecipePage(response.id));
  };

  return (
    <div className="RecipesOne">
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Keywords</label>
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSave} disabled={loading}>
        Save
      </button>
    </div>
  );
};

export default RecipesEdit;
