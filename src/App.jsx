import { useState } from "react"

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-[#F7F3FC] text-[#35204F]">

      {/* Header */}
      <header className="bg-[#5B3A8E] text-white px-6 py-5 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold tracking-wide">
            RailPulse
          </h1>
          <p className="text-[#E6DDF2] mt-1">
            Passenger Safety
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#35204F]">
            Passenger Safety
          </h2>

          <p className="mt-3 text-[#766985]">
            Stay safe. Report emergencies and safety concerns quickly.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Emergency SOS */}
          <button
            onClick={() => alert("Emergency SOS activated!")}
            className="group bg-[#DC4C5A] text-white p-7 rounded-2xl shadow-md hover:bg-[#C83D4B] hover:shadow-lg transition-all duration-200"
          >
            <div className="text-4xl mb-3">🆘</div>

            <h3 className="text-xl font-bold">
              Emergency SOS
            </h3>

            <p className="text-sm text-red-100 mt-2">
              Use this for immediate emergency assistance
            </p>
          </button>

          {/* Report Issue */}
          <button
            onClick={() => setShowForm(true)}
            className="bg-white border border-[#E0D4ED] p-7 rounded-2xl shadow-sm hover:shadow-md hover:bg-[#FCFAFF] transition-all duration-200"
          >
            <div className="text-4xl mb-3">🛡️</div>

            <h3 className="text-xl font-bold text-[#5B3A8E]">
              Report Safety Issue
            </h3>

            <p className="text-sm text-[#766985] mt-2">
              Report suspicious activity or unsafe conditions
            </p>
          </button>

        </div>
        {/* Safety Status */}
        <div className="mt-8 bg-white border border-[#E0D4ED] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EDE7F6] flex items-center justify-center text-2xl">
              🟢
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#5B3A8E]">
                Safety Status
              </h3>

              <p className="text-sm text-[#766985] mt-1">
                Railway safety systems are currently operational.
              </p>
            </div>
          </div>
        </div>

        
        

        {/* Safety Report Form */}
        {showForm && (
          <div className="bg-white border border-[#E0D4ED] p-7 rounded-2xl shadow-sm mt-8">

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#5B3A8E]">
                Report a Safety Issue
              </h3>

              <p className="text-sm text-[#766985] mt-1">
                Please provide the details below so the railway authority
                can respond quickly.
              </p>
            </div>

            {/* Issue Type */}
            <div className="mt-5">
              <label className="block font-semibold text-[#4A385C]">
                Issue Type
              </label>

              <select
                className="w-full mt-2 p-3 border border-[#DCCFE9] rounded-xl
                bg-[#FBF9FD] text-[#4A385C]
                focus:outline-none focus:ring-2 focus:ring-[#9B7BC4]"
              >
                <option>Select an issue</option>
                <option>Suspicious Activity</option>
                <option>Harassment</option>
                <option>Medical Emergency</option>
                <option>Unsafe Condition</option>
                <option>Other</option>
              </select>
            </div>

            {/* Location */}
            <div className="mt-5">
              <label className="block font-semibold text-[#4A385C]">
                Location
              </label>

              <input
                type="text"
                placeholder="Example: Platform 3"
                className="w-full mt-2 p-3 border border-[#DCCFE9] rounded-xl
                bg-[#FBF9FD] text-[#4A385C]
                placeholder:text-[#A69AB2]
                focus:outline-none focus:ring-2 focus:ring-[#9B7BC4]"
              />
            </div>

            {/* Description */}
            <div className="mt-5">
              <label className="block font-semibold text-[#4A385C]">
                Description
              </label>

              <textarea
                placeholder="Describe the safety issue..."
                className="w-full mt-2 p-3 border border-[#DCCFE9] rounded-xl
                bg-[#FBF9FD] text-[#4A385C]
                placeholder:text-[#A69AB2]
                focus:outline-none focus:ring-2 focus:ring-[#9B7BC4]"
                rows="4"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">

              <button
                onClick={() => alert("Safety report submitted successfully!")}
                className="bg-[#6F4AA0] text-white px-6 py-3 rounded-xl
                font-semibold hover:bg-[#5B3A8E] transition"
              >
                Submit Report
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="bg-[#F0EAF6] text-[#5B3A8E] px-6 py-3 rounded-xl
                font-semibold hover:bg-[#E5DDF0] transition"
              >
                Cancel
              </button>

            </div>

          </div>
        )}

      </main>
    </div>
  )
}

export default App

