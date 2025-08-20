import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      <h1 style={{ color: '#FF7F50' }}>GlamCS Cosmetics Website</h1>
      <h2>Overview</h2>
      <p>
        GlamCS is a high-end cosmetics website designed with elegance in mind. 
        Our color palette features luxurious orange and white colors, creating 
        a sophisticated look that appeals to our clientele.
      </p>
      
      <h2>Design Features</h2>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Luxurious color scheme: Orange and White</li>
        <li>3D designs and effects for an immersive experience</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>
        To get started with the GlamCS project, clone the repository and install 
        the necessary dependencies.
      </p>
      <pre>
        <code>
          git clone https://github.com/yourusername/glamcs.git
          cd glamcs
          npm install
        </code>
      </pre>
      
      <h2>Usage</h2>
      <p>
        Run the application in development mode:
      </p>
      <pre>
        <code>
          npm start
        </code>
      </pre>
      
      <h2>Contributing</h2>
      <p>
        We welcome contributions! Please open an issue or submit a pull request 
        for any enhancements or bug fixes.
      </p>
      
      <h2>License</h2>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default README;