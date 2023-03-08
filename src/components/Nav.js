import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="tabNav">
      <Link to="/html">HTML</Link>
      <Link to="/css">CSS</Link>
      <Link to="/javascript">Javascript</Link>
      <Link to="/react">React</Link>
      <Link to="/headless-cms">Headless-cms</Link>
    </nav>
  )
}
