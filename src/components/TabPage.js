import { useParams } from 'react-router-dom';
import {resources} from '../resources/resources';

export default function TabPage(){
  const{category} = useParams()

  const filterRes = resources.filter((resource) => resource.category === category);

  return (
    <div className="tabContent">
      <ul>
        {filterRes.map((resource) => (
          <li key={resource.url}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );


}