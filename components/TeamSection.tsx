import React from 'react';
import './TeamSection.css'; // Assuming you have a CSS file for styling

const TeamSection: React.FC = () => {
    return (
        <section className="team-section">
            <h2 className="team-title">Meet Our Glam Team</h2>
            <div className="team-container">
                <div className="team-member">
                    <img src="/images/member1.jpg" alt="Team Member 1" className="member-image" />
                    <h3 className="member-name">Alice Johnson</h3>
                    <p className="member-role">Founder & CEO</p>
                </div>
                <div className="team-member">
                    <img src="/images/member2.jpg" alt="Team Member 2" className="member-image" />
                    <h3 className="member-name">Michael Smith</h3>
                    <p className="member-role">Creative Director</p>
                </div>
                <div className="team-member">
                    <img src="/images/member3.jpg" alt="Team Member 3" className="member-image" />
                    <h3 className="member-name">Sophia Brown</h3>
                    <p className="member-role">Marketing Specialist</p>
                </div>
                <div className="team-member">
                    <img src="/images/member4.jpg" alt="Team Member 4" className="member-image" />
                    <h3 className="member-name">David Lee</h3>
                    <p className="member-role">Product Designer</p>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;