
import {Component} from 'react'

import MentorItem from '../MentorItem'
import Header from '../Header'

import './index.css'

class Home extends Component {
    state={name:'', area_of_interest:'Marketing', duration:30, mentorList:[], timeSlot:'07:00:00', bookingRedirect:false}

    onInterestChange = (event) => {
        this.setState({area_of_interest:event.target.value})
    }

    onChangeName = (event) => {
        this.setState({name:event.target.value})
    }

    onDurationChange = (event) => {
        this.setState({duration: event.target.value})
    }

    onTimeSlotChange = (event) => {
        this.setState({timeSlot: event.target.value})
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        const { area_of_interest, timeSlot, duration} = this.state
        const apiUrl = `https://careercarve-backend-p8l0.onrender.com/mentor?areas_of_expertise=${area_of_interest}&start_time=${timeSlot}&current_duration=${duration}`

        const options = {
            method:'GET',
        }
        const response = await fetch(apiUrl,options)
        const data = await response.json()
        this.setState({mentorList:data})
    }

    onBooked = async (id) => {
        const {mentorList, name, duration, timeSlot, area_of_interest} = this.state

        const filteredMentorDetails = mentorList.filter((eachMentor) => {
            return eachMentor.id === id});
        
        const bookedMentorDetails = filteredMentorDetails[0]
     
        const mentor_id = bookedMentorDetails.ID;
        const apiUrl = `https://careercarve-backend-p8l0.onrender.com/bookings?student_name=${name}&mentor_name=${bookedMentorDetails.name}&booking_time=${timeSlot}&duration=${duration}&is_premium=${bookedMentorDetails.category}&mentor_id=${mentor_id}&subject=${area_of_interest}`

        const options = {
            method:'POST',
        }
        const response = await fetch(apiUrl, options)
        if(response.ok) {
            this.setState({bookingRedirect:true})
        }
    }

    render() {
        const {mentorList, name} = this.state
       
        return (
            <div className='bg-container'>
                <Header/>
                <div className='main-container'>
                <form className='form' onSubmit={this.onFormSubmit}>
                    <div>
                    <label htmlFor='name' className='label'>Student Name</label>
                    <input type='text' value={name} id='name' className='name-input' onChange={this.onChangeName}/>
                    </div>
                    <div className='input-container'>
                    <label htmlFor='areas_of_interest' className='label'>Area of Interest</label>
                    <select id='areas_of_interest' className='input-bar' onChange={this.onInterestChange}>
                        <option value='Marketing'>Marketing</option>
                        <option value='Finance'>Finance</option>
                        <option value='Banking'>Banking</option>
                        <option value='Sales'>Sales</option>
                        <option value='Accounting'>Accounting</option>
                        <option value='Operations'>Operations</option>
                    </select>
                    </div>
                    <div className='input-container'>
                    <label htmlFor='timeslot' className='label'>Time Slot</label>
                    <select id='timeslot' className='input-bar' onChange={this.onTimeSlotChange}>
                        <option value='07:00:00'>07:00 PM</option>
                        <option value='07:30:00'>07:30 PM</option>
                        <option value='08:00:00'>08:00 PM</option>
                        <option value='08:30:00'>08:30 PM</option>
                    </select>
                    </div>
                    <div className='input-container'>
                    <label htmlFor='duration' className='label'>Duration</label>
                    <select id='duration' className='input-bar' onChange={this.onDurationChange}>
                        <option value={30}>30 minutes</option>
                        <option value={45}>45 minutes</option>
                        <option value={60}>60 minutes</option>
                    </select>
                    </div>
                    <button className='mentor-button' type='submit'>Get Available Mentors</button>
                </form>
                <ul className='mentor-list'>
                    {mentorList.map((eachMentor) => (<MentorItem mentorDetails={eachMentor} key={eachMentor.id} onBooked={this.onBooked}/>))}
                </ul>
                </div>
            </div>
        )
    }
}

export default Home