import { Link } from "react-router-dom"
export default function Navigation() {
  return (
    <div>
        <Link to={'/inventary'}> <h2>Task App</h2> </Link>
        <Link to="/add-item">Add Item</Link>
    </div>
  )
}

 