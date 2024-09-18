/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import { Learner } from './Components/Learner.tsx'
// import { Score } from './Components/Score.tsx'
function App() {
  const learners = {learners:[
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ]}
  const [learnerData, setLearnerData] = useState(learners)
  const [formData, setFormData] = useState({
    name:'',
    bio: ''
  });
  const learnerList = learnerData.learners.map((person, index) => {
    return(
      <div key={index}>
        <Learner {...person}/>
      </div>
    )
  })
  const handleChange = (e:React.ChangeEvent<any>) : void => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e:React.ChangeEvent<any>) : void => {
    e.preventDefault();
    const newLearner = {...formData, scores:[]};
    setLearnerData({
      learners: [newLearner, ...learnerData.learners]
    });
  }

  return (
    <>
      <h1>Learners</h1>
      {learnerList}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <br />
        <label htmlFor="">Bio:</label>
        <input type="text" name="bio" value={formData.bio} onChange={handleChange}/>
        <br />
        <input type="submit" value='Add'/>
      </form>
    </>
  )
}

export default App
