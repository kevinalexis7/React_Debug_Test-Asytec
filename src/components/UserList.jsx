import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="card">
      <h2>User List</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: "100%", padding: "10px" }}
        />
      </div>

      {error && <div className="error">{error}</div>}

      <div>
        <button className="button" onClick={fetchUsers}>
          Refresh Users
        </button>
        <span style={{ marginLeft: "10px" }}>
          Showing {filteredUsers.length} of {users.length} users
        </span>
      </div>

      <ul className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="user-item">
              <div>
                <strong>{user.name}</strong>
                <div>{user.email}</div>
                <div>{user.phone}</div>
              </div>
              <button
                className="button"
                onClick={() => deleteUser(user.id)}
                style={{ background: "#dc3545" }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <div style={{ textAlign: "center", color: "#666", padding: "20px" }}>
            No users to show
          </div>
        )}
      </ul>
    </div>
  );
}

export default UserList;
