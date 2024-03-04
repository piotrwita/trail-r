import {users} from "../data/users";

export function Users() {
    return (
        <div>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        {user.name}
                    </div>
                );
            })}
        </div>
    )
}

