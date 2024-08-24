import './index.css'

const MentorItem = (props) => { 
    const {mentorDetails, onBooked} = props
    const {id, name, category} = mentorDetails

    const onBookNowClicked = () => {
        onBooked(id)
    }
    return(
    <li>
        <h1>{name}</h1>
        <p>{category}</p>
        <button onClick={onBookNowClicked}>Book Now</button>
    </li>
)}

export default MentorItem