import React from 'react'

export default function SectionOne() {
    return (
        <div>
            <div className="bg-white text-gray-800">
                {/* Hero Section */}
                <header className="bg-blue-900 text-white py-16 text-center">
                    <h1 className="text-4xl font-bold">Our School Inspection Framework</h1>
                    <p className="mt-4 text-lg">Ensuring Excellence in Education</p>
                </header>

                {/* Focus Areas */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-8">Key Focus Areas</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Teaching & Learning</h3>
                            <p>Assessing classroom practices and student progress.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Student Wellbeing</h3>
                            <p>Ensuring a safe and supportive environment.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-2">Leadership & Management</h3>
                            <p>Evaluating school leadership and administration.</p>
                        </div>
                    </div>
                </section>

                {/* Inspection Process */}
                <section className="py-12 px-6 bg-gray-100">
                    <h2 className="text-2xl font-semibold text-center mb-8">Inspection Process</h2>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">1. Planning</h4>
                            <p>Setting goals and timelines.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">2. Observation</h4>
                            <p>On-site school visits.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">3. Evaluation</h4>
                            <p>Reviewing findings and data.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-bold text-lg mb-2">4. Reporting</h4>
                            <p>Sharing feedback and improvement plans.</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-blue-900 text-white text-center py-6">
                    <p>&copy; 2026 Your School Name. All rights reserved.</p>
                </footer>
            </div>

        </div>
    )
}
