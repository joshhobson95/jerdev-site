import { useState } from "react";
import "./Popup.css"; // Import the CSS file

export default function PopupComponent() {
  const [isOpen, setIsOpen] = useState(true); // Open by default

  return (
    <div className="container">
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              ✖
            </button>
            <h2>Welcome!</h2>
            <p>This popup is open when you visit the page.</p>
          </div>
        </div>
      )}
    </div>
  );
}
