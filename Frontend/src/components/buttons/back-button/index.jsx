import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 m-6 z-10 cursor-pointer">
      <button
        className="w-10 cursor-pointer rounded-lg border border-primary bg-primary p-6 text-white transition hover:bg-transparent hover:text-accent py-3 px-3"
        aria-label="link"
        type="submit"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}

export default BackButton;
