export default function Time() {
  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return <div className="pointer-events-none hidden sm:block">{getTime()}</div>;
}
