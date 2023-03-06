import {Resources} from '../resources/Resources';

export default function Nav(){
  return (
    <div className='tabContent'>
      {Resources.map((resource, index) => (
        <div key={index}>
          <h2>{resource.title}</h2>
          <p>{resource.url}</p>
          <p>Category: {resource.category}</p>
        </div>
      ))}
    </div>
  );
}