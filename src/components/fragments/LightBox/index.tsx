interface LightboxProps {
  src: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50 transition-all"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Zoomed"
        className="max-w-3xl max-h-[90vh] rounded shadow"
      />
    </div>
  );
};

export default Lightbox;
