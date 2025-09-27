
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import CardSection from './component/CardSection'
import CardTwo from './component/CardTwo'
import Footer from './component/Footer'
import NavBar from './component/NavBar.jsx'

function App() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/support.json')
        const data = await response.json()
        setTickets(data)
      } catch (error) {
        toast.error('Failed to load tickets')
        console.error('Error fetching tickets:', error)
      }
    }
    
    fetchTickets()
  }, [])

  const moveToInProgress = (id) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => {
        if (ticket.id === id) {
          if (ticket.status === "Open") {
            toast.success("Ticket moved to In Progress!")
            return { ...ticket, status: "In Progress" }
          } else if (ticket.status === "In Progress") {
            toast.info("Ticket is already in progress")
            return ticket
          } else if (ticket.status === "Resolved") {
            toast.info("Ticket is already resolved")
            return ticket
          }
        }
        return ticket
      })
    )
  }

  const completeTicket = (id) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => {
        if (ticket.id === id && ticket.status === "In Progress") {
          toast.success("Ticket marked as completed!")
          return { ...ticket, status: "Resolved" }
        }
        return ticket
      })
    )
  }

  const inProgressCount = tickets.filter(t => t.status === "In Progress").length
  const resolvedCount = tickets.filter(t => t.status === "Resolved").length

  return (
    <>
      <NavBar />
      <CardTwo inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <CardSection 
        tickets={tickets} 
        moveToInProgress={moveToInProgress} 
        completeTicket={completeTicket} 
      />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
