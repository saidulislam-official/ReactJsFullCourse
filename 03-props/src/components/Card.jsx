export default function Card(props) {
  // console.log(props);
  // console.log(props.user);
  // console.log(props.age);
  
  return ( 
    <>
        <div className="card">
                <img src={props.img} alt="" />
                <h3>{props.user}, {props.age}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, iure?</p>
                <button>View Profile</button>
        </div>
    </>
  )
}
