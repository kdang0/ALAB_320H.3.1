

interface Score{
    date:string;
    score:number;
}

export const Score = ({date, score}:Score) => {
  return (
    <div>
        <p>Score: {score} | {date}</p>
    </div>
  )
}
