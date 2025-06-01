import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>@{username}</p>
      <p>{email}</p>
      <p>{address.street}, {address.city}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <p className="italic">{company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
