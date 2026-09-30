import { useState } from "react"

function App() {
  const [showForm, setShowForm] = useState(false)

  // Form data
  const [issueType, setIssueType] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [submitting, setSubmitting] = useState(false)

  // Submit report to backend
  const submitReport = async () => {
    if (!issueType || !location || !description) {
      alert("Please fill in all fields.")
      return
    }

    try {
      setSubmitting(true)

      const response = await fetch("http://localhost:5000/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          issueType,
          location,
          description
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit report")
      }

      alert(data.message)

      // Clear form
      setIssueType("")
      setLocation("")
      setDescription("")
      setShowForm(false)

    } catch (error) {
      console.error(error)
      alert("Unable to submit the report. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

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

        {/* Quick-Call Helplines */}
        <div className="mt-8 bg-white border border-[#E0D4ED] rounded-2xl shadow-sm p-6">

          <div className="mb-5">
            <h3 className="text-lg font-bold text-[#5B3A8E]">
              Quick-Call Helplines
            </h3>

            <p className="text-sm text-[#766985] mt-1">
              Contact the appropriate railway emergency service quickly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">

            <a
              href="tel:139"
              className="flex items-center justify-between bg-[#F7F3FC] border border-[#E0D4ED] p-4 rounded-xl hover:bg-[#EDE7F6] transition"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🚆</div>

                <div>
                  <p className="font-bold text-[#5B3A8E]">
                    139
                  </p>
                  <p className="text-sm text-[#766985]">
                    Rail Madad
                  </p>
                </div>
              </div>

              <span className="text-xl">📞</span>
            </a>

            <a
              href="tel:182"
              className="flex items-center justify-between bg-[#F7F3FC] border border-[#E0D4ED] p-4 rounded-xl hover:bg-[#EDE7F6] transition"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🛡️</div>

                <div>
                  <p className="font-bold text-[#5B3A8E]">
                    182
                  </p>
                  <p className="text-sm text-[#766985]">
                    RPF
                  </p>
                </div>
              </div>

              <span className="text-xl">📞</span>
            </a>

            <a
              href="tel:1091"
              className="flex items-center justify-between bg-[#F7F3FC] border border-[#E0D4ED] p-4 rounded-xl hover:bg-[#EDE7F6] transition"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">👩</div>

                <div>
                  <p className="font-bold text-[#5B3A8E]">
                    1091
                  </p>
                  <p className="text-sm text-[#766985]">
                    Women Safety
                  </p>
                </div>
              </div>

              <span className="text-xl">📞</span>
            </a>

            <a
              href="tel:112"
              className="flex items-center justify-between bg-[#F7F3FC] border border-[#E0D4ED] p-4 rounded-xl hover:bg-[#EDE7F6] transition"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🚑</div>

                <div>
                  <p className="font-bold text-[#5B3A8E]">
                    112
                  </p>
                  <p className="text-sm text-[#766985]">
                    Medical / Emergency
                  </p>
                </div>
              </div>

              <span className="text-xl">📞</span>
            </a>

          </div>
        </div>

        {/* Share Live Journey */}
        <div className="mt-6 bg-white border border-[#E0D4ED] rounded-2xl shadow-sm p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EDE7F6] flex items-center justify-center text-2xl">
                📍
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#5B3A8E]">
                  Share Live Journey
                </h3>

                <p className="text-sm text-[#766985] mt-1">
                  Share your journey status with a trusted contact.
                </p>
              </div>
            </div>

            <button
              onClick={() => alert("Live journey sharing started!")}
              className="bg-[#5B3A8E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#35204F] transition"
            >
              Share Journey
            </button>

          </div>
        </div>

        {/* Safety Alerts / Bulletins */}
        <div className="mt-6 bg-white border border-[#E0D4ED] rounded-2xl shadow-sm p-6">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-full bg-[#EDE7F6] flex items-center justify-center text-2xl shrink-0">
              🔔
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#5B3A8E]">
                Safety Alerts / Bulletins
              </h3>

              <p className="text-sm text-[#766985] mt-1">
                Stay informed about important railway safety updates,
                service notices, and passenger advisories.
              </p>

              <div className="mt-4 bg-[#F7F3FC] border border-[#E0D4ED] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#5B3A8E]">
                  No active safety alerts
                </p>

                <p className="text-sm text-[#766985] mt-1">
                  There are currently no new safety bulletins to display.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Safety Tips */}
        <div className="mt-6 bg-white border border-[#E0D4ED] rounded-2xl shadow-sm p-6">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-full bg-[#EDE7F6] flex items-center justify-center text-2xl shrink-0">
              💡
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#5B3A8E]">
                Quick Safety Tips
              </h3>

              <ul className="mt-3 space-y-3 text-sm text-[#766985]">

                <li className="flex gap-2">
                  <span className="text-[#5B3A8E] font-bold">•</span>
                  <span>
                    Keep your belongings secure and stay aware of your surroundings.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#5B3A8E] font-bold">•</span>
                  <span>
                    Avoid standing near train doors or crossing safety barriers.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#5B3A8E] font-bold">•</span>
                  <span>
                    In an emergency, contact the appropriate railway helpline.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#5B3A8E] font-bold">•</span>
                  <span>
                    Report suspicious activity or unsafe conditions as soon as possible.
                  </span>
                </li>

              </ul>
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
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full mt-2 p-3 border border-[#DCCFE9] rounded-xl
                bg-[#FBF9FD] text-[#4A385C]
                focus:outline-none focus:ring-2 focus:ring-[#9B7BC4]"
              >
                <option value="">Select an issue</option>
                <option value="Suspicious Activity">Suspicious Activity</option>
                <option value="Harassment">Harassment</option>
                <option value="Medical Emergency">Medical Emergency</option>
                <option value="Unsafe Condition">Unsafe Condition</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Location */}
            <div className="mt-5">
              <label className="block font-semibold text-[#4A385C]">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                onClick={submitReport}
                disabled={submitting}
                className="bg-[#6F4AA0] text-white px-6 py-3 rounded-xl
                font-semibold hover:bg-[#5B3A8E] transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Report"}
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



