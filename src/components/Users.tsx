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
            {true ? <div>True</div> : <div>False</div>}
        </div>
    )
}

