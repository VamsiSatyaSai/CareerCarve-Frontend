import './index.css'

const standardFee = {
    30: 2000,
    45: 3000,
    60: 4000
}

const premiumFee = {
    30: 2500,
    45: 3500,
    60: 4500
}

const BookingItem = (props) => {
    const {bookingDetails} = props
    const {mentorName, startTime, endTime, mentorType, subject, studentName, duration} = bookingDetails

    const totalFee = mentorType === 'Standard' ? standardFee[duration] : premiumFee[duration]
    return(
        <li className='each-booking-item'>
            <h1 className='mentor-name'>Mentor: {mentorName}</h1>
            <h1 className='mentor-name'>Student: {studentName}</h1>
            <p className='start'>Interview Start: <span className='span-ele'>{startTime} PM</span></p>
            <p className='end'>Interview End: <span className='span-ele'>{endTime} PM</span></p>
            <p className='expertise'>Subject: <span className='span-ele'>{subject}</span></p>
            <p className='type'>Mentor class: <span className='span-ele'>{mentorType}</span></p>
            <p className='fee'>Total Fee: {totalFee}</p>
        </li>
    )
}

export default BookingItem