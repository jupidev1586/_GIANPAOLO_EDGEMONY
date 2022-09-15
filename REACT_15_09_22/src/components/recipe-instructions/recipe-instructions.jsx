import { useOutletContext } from 'react-router-dom';

export const RecipeInstructions = () => {
  const recipe =  useOutletContext();
  const { strInstructions } = recipe;

  console.log('===> recipe object', recipe);
  console.log('===> instructions property', strInstructions);

  return (
    <div>
      "{strInstructions}"
    </div>
  ) 
};
  
