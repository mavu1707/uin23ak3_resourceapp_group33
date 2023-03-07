import {resources} from '../resources/resources';

export default function TabContent(){
  return (
    <div className='tabContent'>
      {resources.map((resource, index) => (
        <div key={index}>
          <h2>{resource.title}</h2>
          <p>{resource.url}</p>
          <p>Category: {resource.category}</p>
        </div>
      ))}
    </div>
  );
}