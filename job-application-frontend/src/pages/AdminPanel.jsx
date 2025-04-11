import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5000/api/admin/applications',
          { withCredentials: true }
        );
        setApplications(res.data.data);
        console.log(res);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch applications.');
      }
    };

    fetchApplications();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel - Job Applications</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Aadhaar</th>
            <th>PAN</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.phone}</td>
              <td>{app.aadhaarNumber}</td>
              <td>{app.panNumber}</td>
              <td>
                {app.resume ? (
                  <>
                    <a
                      href={`http://localhost:5000/${app.resume.replace(
                        /\\/g,
                        '/'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                    {' | '}
                    <a
                      href={`http://localhost:5000/${app.resume.replace(
                        /\\/g,
                        '/'
                      )}`}
                      download
                    >
                      Download Resume
                    </a>
                  </>
                ) : (
                  'No Resume'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
