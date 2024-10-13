const LoadMoreBtn = ({ setPage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          margin: "20px",
          fontSize: "20px",
          fontWeight: "500",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "darkblue",
          padding: "10px 15px",
        }}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
