import {resources} from '../resources/resources';

export default function TabContent(){
  return (
    <div className='tabContent'>
      {resources.map((resource, index) => (
        <div key={index}>
          <li><a href={resource.url}>{resource.title}</a></li>
        </div>
      ))}
    </div>
  );
}