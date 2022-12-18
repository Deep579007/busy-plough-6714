import "./Home_Styles/Home_Single_Card.css";
import { useNavigate,Link } from "react-router-dom";


const Home_Single_Card = ({...elem}) => {
    const {_id,img1,title,mrp,strike} = elem;
   
    return (
        <Link to={`product/${_id}`}><div key={_id}  className="Home_Single_Card_Item">
            <div>
                <img src={img1} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>MRP <span>₹{strike}</span></p>
                <p>₹{mrp} <span>{Math.floor(strike-mrp)} rs.. OFF</span></p>
            </div>
        </div></Link>
    );
}

export {Home_Single_Card};