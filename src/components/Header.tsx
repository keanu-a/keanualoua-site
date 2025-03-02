import Name from './Name';
import Time from './Time';

export default function Header() {
  return (
    <div className="flex justify-between items-center top-0">
      <Name />
      <Time />
    </div>
  );
}
