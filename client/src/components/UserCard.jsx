import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  if (!user) return <div>No user data</div>;

  return (
    <div className="user-card" data-testid="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
