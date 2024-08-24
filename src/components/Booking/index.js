import {Component} from 'react'

import Header from '../Header'
import BookingItem from '../BookingItem'

import './index.css'

class Booking extends Component {
    state={bookingsList:[]}

    componentDidMount() {
        this.getBookings()
    }

    getBookings = async () => {
        const apiUrl = 'https://careercarve-backend-p8l0.onrender.com/bookings/details'
        const options = {
            method:'GET'
        }
        const response = await fetch(apiUrl, options);
        if(response.ok) {
            const data = await response.json()
            console.log(data)
            const updatedData = data.map((eachItem) => ({
                id: eachItem.id,
                duration: eachItem.duration,
                mentorName: eachItem.mentor_name,
                startTime: eachItem.booking_time,
                endTime: eachItem.booking_end_time,
                mentorType: eachItem.is_premium,
                studentName: eachItem.student_name,
                subject: eachItem.subject
            }))
            this.setState({bookingsList:updatedData})
        }
    }

    bookingListRender = () => {
        const {bookingsList} = this.state

        return (
            <ul className='bookings-list'>
                {bookingsList.map((eachBooking) => (
                    <BookingItem bookingDetails={eachBooking} key={eachBooking.id}/>
                ))}
            </ul>
        )
    }

    render() {
        const {bookingsList} = this.state
        if(bookingsList.length === 0) (
            <h1 className='no-booking-heading'>No Bookings</h1>
        )
        return(
            <div className='bg-container'>
                <Header/>
                <div className='main-container'>
                    {this.bookingListRender()}
                </div>
            </div>
        )
    }
}

export default Booking