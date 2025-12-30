import React, { useEffect, useState } from "react";

export default function Blog() {
  const [comments, setComments] = useState([
    "First comment!",
    "Second comment!",
  ]);
  const [input, setInput] = useState("");

  // Simulated real-time comment
  useEffect(() => {
    const timer = setInterval(() => {
      setComments((prev) => [
        ...prev,
        "Live comment at " + new Date().toLocaleTimeString(),
      ]);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const addComment = () => {
    if (!input.trim()) return;
    setComments((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #1e1e1e;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 1rem;
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 1rem;
          color:blue;
        }

        .card {
          background: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          color:blue;
        }

        .comments {
          grid-column: span 2;
        }

        .comment-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid #ccc;
          border-radius: 6px;
          padding: 0.5rem;
          background: #f9f9f9;
        }

        .comment {
          background: #eaeaea;
          color: #000;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 4px;
          font-size: 14px;
        }

        .comment-input {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        input {
          flex: 1;
          padding: 0.5rem;
          font-size: 14px;
        }

        button {
          background: #000;
          color: #fff;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
          }
          .comments {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h1>Here's How I Earned My First Money!</h1>
          <p>When I was a teen.I have always...</p>
        </div>

        <div className="card">
          <h3>💸💸💸</h3>
          <p>Connect With Me- 00xx 00xx 00xx.</p>
        </div>

        <div className="card comments">
          <h2>Comments</h2>

          <div className="comment-list">
            {comments.map((c, i) => (
              <div key={i} className="comment">
                {c}
              </div>
            ))}
          </div>

          <div className="comment-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a comment..."
            />
            <button onClick={addComment}>Post</button>
          </div>
        </div>
      </div>
    </>
  );
}
//App.jsx

import Blog from "./Fswd/Sample/Blog"

function App() {
  return <Blog/>
    
}
export default App
