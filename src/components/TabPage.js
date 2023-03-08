import { useParams } from 'react-router-dom';
import {resources} from '../resources/resources';

export default function TabContent(){
  const{category} = useParams()

  const test = resources.filter(
    resource => resource.category === category
  )

  const resTest = test.map(resources => {
    return(
      <li key={resources.url}>
        <a href={resources.url}>{resources.title}</a>
      </li>
    )
  })
  
  return (
    <div className='tabContent'>
      <ul>{resTest}</ul>
    </div>
  );
}