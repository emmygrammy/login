import { Button } from './button';

export { Button };

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
      <Button>Logout</Button>
      <Button>Profile</Button>
    </div>
  );
}