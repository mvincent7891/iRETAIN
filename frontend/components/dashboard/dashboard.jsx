import React from 'react';

export const Dashboard = ({loggedIn, user}) => {

  return (
  <div className="dashboard">
    <ul className="dashboard">
      <li className="dashboard-item">
          Welcome, { user }! Choose a deck to view your flash cards.
      </li>
    </ul>
  </div>
);
};
