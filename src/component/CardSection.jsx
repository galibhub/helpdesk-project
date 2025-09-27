
const CardSection = ({ tickets, moveToInProgress, completeTicket }) => {
    const customerTickets = tickets.filter(t => t.status !== "Resolved")
    const inProgressTickets = tickets.filter(t => t.status === "In Progress")
    const resolvedTickets = tickets.filter(t => t.status === "Resolved")

    const getStatusColor = (status) => {
        if (status === "Open") {
            return "bg-emerald-100 text-emerald-700"
        } else if (status === "In Progress") {
            return "bg-amber-100 text-amber-700"
        }
        return "bg-gray-100 text-gray-700"
    }

    const getStatusDot = (status) => {
        if (status === "Open") {
            return "bg-emerald-500"
        } else if (status === "In Progress") {
            return "bg-amber-400"
        }
        return "bg-gray-400"
    }

    const getPriorityColor = (priority) => {
        if (priority === "High") {
            return "text-rose-600"
        } else if (priority === "Medium") {
            return "text-amber-500"
        }
        return "text-green-600"
    }

    return (
       <section className="max-w-7xl mx-auto px-4 py-6">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* LEFT: All Tickets */}
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Tickets</h2>

      {/* Tickets grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customerTickets.map((ticket) => (
          <article 
            key={ticket.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => moveToInProgress(ticket.id)}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-gray-900 leading-snug">
                {ticket.title}
              </h3>
              <span className={`inline-flex items-center gap-2 rounded-full text-xs font-semibold px-3 py-1 ${getStatusColor(ticket.status)}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${getStatusDot(ticket.status)}`}></span> {ticket.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {ticket.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <span className="font-medium">#{ticket.id}</span>
                <span className={`font-bold ${getPriorityColor(ticket.priority)}`}>{ticket.priority.toUpperCase()} PRIORITY</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">{ticket.customer}</span>
                <span className="flex items-center gap-1">📅 {ticket.createdAt}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* RIGHT: Sidebar */}
    <aside className="lg:col-span-1">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Task Status</h2>
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
        {inProgressTickets.length > 0 ? (
          <div className="space-y-3">
            {inProgressTickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{ticket.title}</h4>
                  <p className="text-xs text-gray-500">#{ticket.id}</p>
                </div>
                <button 
                  onClick={() => completeTicket(ticket.id)}
                  className="bg-gradient-to-r from-[#11998E] to-[#38EF7D] text-white px-3 py-1 rounded text-xs font-semibold hover:opacity-90"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            Select a ticket to add to Task Status.
          </p>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Resolved Task</h3>
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
        {resolvedTickets.length > 0 ? (
          <div className="space-y-3">
            {resolvedTickets.map((ticket) => (
              <div key={ticket.id} className="p-3 border border-gray-200 rounded-lg bg-green-50">
                <h4 className="font-medium text-gray-900 text-sm">{ticket.title}</h4>
                <p className="text-xs text-gray-500">#{ticket.id} • {ticket.customer}</p>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 mt-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Resolved
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No resolved tasks yet.</p>
        )}
      </div>
    </aside>
  </div>
</section>
    );
};

export default CardSection;