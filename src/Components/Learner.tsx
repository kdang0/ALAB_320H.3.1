
 import { Score } from './Score.tsx';
interface Learner {
    name:string;
    bio:string;
    scores: Score[];
}

interface Score {
  date: string;
  score: number;
}


export const Learner = ({name, bio, scores} : Learner) => {

  return (
    <div>  
          <h2>{name}</h2>
          <p>{bio}</p> 
          {scores.map((score, index)=> {
            return(
                <Score key={index} {...score}/> 
            )
          })}
    </div>
  )
}
