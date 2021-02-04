const TabList = () => {
  return (
    <div className="my-5 tab-list">
      <span
        onClick={() => displayCompleted(true)}
        className={viewCompleted ? "active" : ""}
      >
        complete
      </span>
      <span
        onClick={() => displayCompleted(false)}
        className={viewCompleted ? "" : "active"}
      >
        incomplete
      </span>
    </div>
  );
};
