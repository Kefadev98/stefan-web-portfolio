//Internal imports
import { TechnologiesTypes } from "../../types/TechnologiesTypes";

interface Props {
  technology: TechnologiesTypes;
}

const Technologies = ({ technology }: Props) => {
  return (
    <article className="p-6 hover:scale-105 duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center pb-4">
        <div className="m-auto bg-white rounded-lg p-1">
          <img src={technology.logo} alt="/" width="50px" height="50px" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{technology.name}</h3>
        </div>
      </div>
      <p className="mt-2 dark:font-light">{technology.description}</p>
    </article>
  );
};

export default Technologies;
