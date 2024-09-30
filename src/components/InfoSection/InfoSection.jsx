import React from 'react';

const InfoSection = () => {
  return (
    <div className="flex flex-col items-center font-klavika">
      {/* About the Data Science Club Section */}
      <h2 className="text-2xl font-bold mb-2 mt-6">About the Data Science Club</h2>
      <Card>
        <CardContent>
          <p className="text-gray-700">
            The Data Science Club is created for all those interested in topics related to data science and data analytics, not just those interested in pursuing a career in the field. 
            We discuss new technologies, internship/career experiences, and other special topics. All skill levels and majors are welcome.
          </p>
        </CardContent>
      </Card>

      {/* Our Team Section */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-left">Our Team</h2>
      <Card>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-gray-700 w-full"> {/* Ensure full width */}
            <TeamMember name="Dr. YangYang Tao" email="taoy1@nku.edu" role="Advisor" />
            <TeamMember name="Gauarab Baral" email="baralg1@nku.edu" role="President" />
            <TeamMember name="Aditya Khanal" email="Khanala1@nku.edu" role="Vice President" />
            <TeamMember name="Mithlesh Sah" email="sahm1@nku.edu" role="E-board Member" />
            <TeamMember name="Sushant Shrestha" email="shresthas1@nku.edu" role="E-board Member" />
          </div>
        </CardContent>
      </Card>

      {/* Join Section */}
      <JoinButton />
    </div>
  );
};

// Card Component
const Card = ({ children }) => (
  <div className="card w-full h-auto flex flex-col bg- shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 p-4 font-klavika"> {/* w-full added */}
    {children}
  </div>
);

// CardContent Component
const CardContent = ({ children }) => (
  <div className="card-content w-full p-6 text-green-600 font-klavika">
    {children}
  </div>
);

// TeamMember Component
const TeamMember = ({ name, email, role }) => (
  <div className="flex flex-col items-left">
    <p className="text-gray-500">{role}</p>
    <a href={`mailto:${email}`} className="text-green-600 font-bold">{name}</a>
    <p className="text-gray-700">{email}</p>
  </div>
);

// JoinButton Component
const JoinButton = () => (
  <div className="text-center mt-6 mb-6">
    <a href="/join" className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full font-klavika">
      Join Us
    </a>
  </div>
);

export default InfoSection;
