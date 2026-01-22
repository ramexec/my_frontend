import { FaExternalLinkAlt } from "react-icons/fa";
import "./MiniUpdateCard.css";

export const MiniUpdateCard = ({subject = 'Default', text = 'Update Text '}) => {
  return (
    <div className="xp-card">
      <div className="xp-card-title">
        {subject}
      </div>
      <div className="xp-card-body">
        <div className="xp-text">
            {text}
        </div>
      <div className="xp-card-actions">
        <button className="xp-card-button">
            <FaExternalLinkAlt/>
        </button>
      </div>
      </div>
    </div>
  );
};
